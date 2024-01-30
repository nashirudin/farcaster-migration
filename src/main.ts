import {TypeormDatabase} from '@subsquid/typeorm-store'
import {CONTRACT_ADDRESS, REGISTRY_CONTRACT, processor} from './processor'
import {User, UserFname} from './model'

import * as FarcasterNameRegistryABI from './abi/FarcasterNameRegistry'
import * as TokenIdRegistryABI from './abi/TokenIdRegistry'








processor.run(new TypeormDatabase({supportHotBlocks: true}), async (ctx) => {
  const users: Map<string, User> = new Map();
  const usersFnames: Map<string, UserFname> = new Map();
    for (let block of ctx.blocks) {
        for (let log of block.logs) {
          if (log.topics[0] === FarcasterNameRegistryABI.events.Transfer.topic) {
            let event = FarcasterNameRegistryABI.events.Transfer.decode(log);
            let user = new User({
              id: log.transaction?.hash,
              createdAtBlock: BigInt(block.header.height),
              createdAtTimestamp: BigInt(block.header.timestamp)})
            ctx.store.save<User>(user);
            }

         if (log.topics[0] === TokenIdRegistryABI.events.Register.topic) {
                let event = TokenIdRegistryABI.events.Register.decode(log);
                let userFname = new UserFname({
                  id: log.transaction?.hash,
                  createdAtBlock: BigInt(block.header.height),
                  createdAtTimestamp: BigInt(block.header.timestamp)
                })
           ctx.store.save<UserFname>(userFname);
          }
        }
    }
    await ctx.store.upsert([...users.values()]);
    await ctx.store.upsert([...usersFnames.values()]);
})
