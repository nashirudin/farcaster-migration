import { lookupArchive } from '@subsquid/archive-registry'
import {
  BlockHeader,
  DataHandlerContext,
  EvmBatchProcessor,
  EvmBatchProcessorFields,
  Log as _Log,
  Transaction as _Transaction,
} from "@subsquid/evm-processor",
import { User, UserFname } from './model'

import * as FarcasterNameRegistry from './abi/FarcasterNameRegistry'
import * as TokenIdRegistry from './abi/TokenIdRegistry'

export const CONTRACT_ADDRESS = '0xe3be01d99baa8db9905b33a3ca391238234b79d1'.toLowerCase()
export const REGISTRY_CONTRACT = '0xda107a1caf36d198b12c16c7b6a1d1c795978c42'.toLowerCase()


export const processor = new EvmBatchProcessor()
  .setDataSource({
    archive: lookupArchive('eth-goerli'),
    chain: {
      url: 'https://eth-goerli.g.alchemy.com/v2/demo',
      rateLimit: 10
    }
  })
    .setFinalityConfirmation(75)
      .setBlockRange({
        from: 7648795,})
    .setFields({
        log: {
          topics: true,
          data: true,
          transactionHash: true,
        },
        transaction: {
          from: true,
          value: true,
          hash: true,
        },
      
      })
    .addLog({
        address: [CONTRACT_ADDRESS],
        topic0: [
            FarcasterNameRegistry.events.Transfer.topic,
          ],
        transaction: true,
    })

    .addLog({
        address: [REGISTRY_CONTRACT],
        topic0: [
            TokenIdRegistry.events.Register.topic,
        ],
        transaction: true,

    })
export type Fields = EvmBatchProcessorFields<typeof processor>;
export type Block = BlockHeader<Fields>;
export type Log = _Log<Fields>;
export type Transaction = _Transaction<Fields>;
export type ProcessorContext<Store> = DataHandlerContext<Store, Fields>;
