import {TypeormDatabase} from '@subsquid/typeorm-store'
import {CONTRACT_ADDRESS, REGISTRY_CONTRACT, processor} from './processor'
import { User, UserFname} from './model'

import * as FarcasterNameRegistryABI from './abi/FarcasterNameRegistry'
import * as TokenIdRegistryABI from './abi/TokenIdRegistry'







processor.run(new TypeormDatabase({supportHotBlocks: true}), async (ctx) => {
    for (let c of ctx.blocks) {
        for (let log of c.logs) {
          if (log.topics[0] === FarcasterNameRegistryABI.events.Transfer.topic) {
            let {from, to, tokenId } = FarcasterNameRegistryABI.events.Transfer.decode(log);
         if (log.topics[0] === TokenIdRegistryABI.events.Register.topic) {
                let {to, id, recovery, url } = TokenIdRegistryABI.events.Register.decode(log);
          }
        }
    }
}
})