import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './TokenIdRegistry.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    CancelRecovery: new LogEvent<([by: string, id: bigint] & {by: string, id: bigint})>(
        abi, '0x6181d4215ebc71e962cc193554c17f05a825da06230fdf9ece45081f09cb206f'
    ),
    ChangeHome: new LogEvent<([id: bigint, url: string] & {id: bigint, url: string})>(
        abi, '0x5d926244a310a9e23d7caac05945165ecf7ef6f4a47fae87eb5e8a005629fdb0'
    ),
    ChangeRecoveryAddress: new LogEvent<([id: bigint, recovery: string] & {id: bigint, recovery: string})>(
        abi, '0x8e700b803af43e14651431cd73c9fe7d11b131ad797576a70b893ce5766f65c3'
    ),
    ChangeTrustedCaller: new LogEvent<([trustedCaller: string] & {trustedCaller: string})>(
        abi, '0x255ba3357fefe42b361c216b6e0bc5541f1e6ea4c6178d4a45ad8dd7ec28139d'
    ),
    DisableTrustedOnly: new LogEvent<[]>(
        abi, '0x03732e5295a5bd18e6ef95b03b41aa8bcadae292a7ef40468144c7a727dfa8b5'
    ),
    OwnershipTransferred: new LogEvent<([previousOwner: string, newOwner: string] & {previousOwner: string, newOwner: string})>(
        abi, '0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0'
    ),
    Register: new LogEvent<([to: string, id: bigint, recovery: string, url: string] & {to: string, id: bigint, recovery: string, url: string})>(
        abi, '0x3cd6a0ffcc37406d9958e09bba79ff19d8237819eb2e1911f9edbce656499c87'
    ),
    RequestRecovery: new LogEvent<([from: string, to: string, id: bigint] & {from: string, to: string, id: bigint})>(
        abi, '0xfab80e8bf242ed27bf595552dfdddbdd794f201d6dfcd8df7347f82f8e1f1f9b'
    ),
    Transfer: new LogEvent<([from: string, to: string, id: bigint] & {from: string, to: string, id: bigint})>(
        abi, '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef'
    ),
}

export const functions = {
    cancelRecovery: new Func<[from: string], {from: string}, []>(
        abi, '0xc90db447'
    ),
    changeHome: new Func<[url: string], {url: string}, []>(
        abi, '0xaa217f25'
    ),
    changeRecoveryAddress: new Func<[recovery: string], {recovery: string}, []>(
        abi, '0xf1f0b224'
    ),
    changeTrustedCaller: new Func<[_trustedCaller: string], {_trustedCaller: string}, []>(
        abi, '0x881b1956'
    ),
    completeRecovery: new Func<[from: string], {from: string}, []>(
        abi, '0xf480dd7e'
    ),
    completeTransferOwnership: new Func<[], {}, []>(
        abi, '0x53f0447e'
    ),
    disableTrustedOnly: new Func<[], {}, []>(
        abi, '0x6e9bde49'
    ),
    idOf: new Func<[_: string], {}, bigint>(
        abi, '0xd94fe832'
    ),
    isTrustedForwarder: new Func<[forwarder: string], {forwarder: string}, boolean>(
        abi, '0x572b6c05'
    ),
    owner: new Func<[], {}, string>(
        abi, '0x8da5cb5b'
    ),
    register: new Func<[to: string, recovery: string, url: string], {to: string, recovery: string, url: string}, []>(
        abi, '0xede49739'
    ),
    renounceOwnership: new Func<[], {}, []>(
        abi, '0x715018a6'
    ),
    requestRecovery: new Func<[from: string, to: string], {from: string, to: string}, []>(
        abi, '0x36bacd73'
    ),
    requestTransferOwnership: new Func<[newOwner: string], {newOwner: string}, []>(
        abi, '0x9d6fa618'
    ),
    transfer: new Func<[to: string], {to: string}, []>(
        abi, '0x1a695230'
    ),
    transferOwnership: new Func<[_: string], {}, []>(
        abi, '0xf2fde38b'
    ),
    trustedRegister: new Func<[to: string, recovery: string, url: string], {to: string, recovery: string, url: string}, []>(
        abi, '0x052a30a3'
    ),
}

export class Contract extends ContractBase {

    idOf(arg0: string): Promise<bigint> {
        return this.eth_call(functions.idOf, [arg0])
    }

    isTrustedForwarder(forwarder: string): Promise<boolean> {
        return this.eth_call(functions.isTrustedForwarder, [forwarder])
    }

    owner(): Promise<string> {
        return this.eth_call(functions.owner, [])
    }
}
