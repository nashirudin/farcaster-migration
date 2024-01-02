import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './FarcasterNameRegistry.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    AdminChanged: new LogEvent<([previousAdmin: string, newAdmin: string] & {previousAdmin: string, newAdmin: string})>(
        abi, '0x7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f'
    ),
    Approval: new LogEvent<([owner: string, approved: string, tokenId: bigint] & {owner: string, approved: string, tokenId: bigint})>(
        abi, '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925'
    ),
    ApprovalForAll: new LogEvent<([owner: string, operator: string, approved: boolean] & {owner: string, operator: string, approved: boolean})>(
        abi, '0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31'
    ),
    BeaconUpgraded: new LogEvent<([beacon: string] & {beacon: string})>(
        abi, '0x1cf3b03a6cf19fa2baba4df148e9dcabedea7f8a5c07840e207e5c089be95d3e'
    ),
    CancelRecovery: new LogEvent<([by: string, tokenId: bigint] & {by: string, tokenId: bigint})>(
        abi, '0x6181d4215ebc71e962cc193554c17f05a825da06230fdf9ece45081f09cb206f'
    ),
    ChangeFee: new LogEvent<([fee: bigint] & {fee: bigint})>(
        abi, '0xfba1d84f2e30311f1380f2355f294fbedd53264c2504378e2c4b2133dea16670'
    ),
    ChangePool: new LogEvent<([pool: string] & {pool: string})>(
        abi, '0x79025dab199855650264c602de305dcf5c292b8e5b4470ef271724a79d0343f4'
    ),
    ChangeRecoveryAddress: new LogEvent<([tokenId: bigint, recovery: string] & {tokenId: bigint, recovery: string})>(
        abi, '0x8e700b803af43e14651431cd73c9fe7d11b131ad797576a70b893ce5766f65c3'
    ),
    ChangeTrustedCaller: new LogEvent<([trustedCaller: string] & {trustedCaller: string})>(
        abi, '0x255ba3357fefe42b361c216b6e0bc5541f1e6ea4c6178d4a45ad8dd7ec28139d'
    ),
    ChangeVault: new LogEvent<([vault: string] & {vault: string})>(
        abi, '0x646d70535c6b451b92021874a72abd441f122ba1c0b8f24d074352bd169fad3f'
    ),
    DisableTrustedOnly: new LogEvent<[]>(
        abi, '0x03732e5295a5bd18e6ef95b03b41aa8bcadae292a7ef40468144c7a727dfa8b5'
    ),
    Initialized: new LogEvent<([version: number] & {version: number})>(
        abi, '0x7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498'
    ),
    Invite: new LogEvent<([inviterId: bigint, inviteeId: bigint, fname: string] & {inviterId: bigint, inviteeId: bigint, fname: string})>(
        abi, '0xed994b8dfbd359de8b535931832fe533e23820fbb73ce69d8dde9bd677989f39'
    ),
    Paused: new LogEvent<([account: string] & {account: string})>(
        abi, '0x62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258'
    ),
    Renew: new LogEvent<([tokenId: bigint, expiry: bigint] & {tokenId: bigint, expiry: bigint})>(
        abi, '0xbf5b84fa6df1868d005e90d05ee12a6c49025be6f38d2807f183743676744c16'
    ),
    RequestRecovery: new LogEvent<([from: string, to: string, tokenId: bigint] & {from: string, to: string, tokenId: bigint})>(
        abi, '0xfab80e8bf242ed27bf595552dfdddbdd794f201d6dfcd8df7347f82f8e1f1f9b'
    ),
    RoleAdminChanged: new LogEvent<([role: string, previousAdminRole: string, newAdminRole: string] & {role: string, previousAdminRole: string, newAdminRole: string})>(
        abi, '0xbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff'
    ),
    RoleGranted: new LogEvent<([role: string, account: string, sender: string] & {role: string, account: string, sender: string})>(
        abi, '0x2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d'
    ),
    RoleRevoked: new LogEvent<([role: string, account: string, sender: string] & {role: string, account: string, sender: string})>(
        abi, '0xf6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b'
    ),
    Transfer: new LogEvent<([from: string, to: string, tokenId: bigint] & {from: string, to: string, tokenId: bigint})>(
        abi, '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef'
    ),
    Unpaused: new LogEvent<([account: string] & {account: string})>(
        abi, '0x5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa'
    ),
    Upgraded: new LogEvent<([implementation: string] & {implementation: string})>(
        abi, '0xbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b'
    ),
}

export const functions = {
    DEFAULT_ADMIN_ROLE: new Func<[], {}, string>(
        abi, '0xa217fddf'
    ),
    approve: new Func<[to: string, tokenId: bigint], {to: string, tokenId: bigint}, []>(
        abi, '0x095ea7b3'
    ),
    balanceOf: new Func<[owner: string], {owner: string}, bigint>(
        abi, '0x70a08231'
    ),
    bid: new Func<[to: string, tokenId: bigint, recovery: string], {to: string, tokenId: bigint, recovery: string}, []>(
        abi, '0x5e751000'
    ),
    cancelRecovery: new Func<[tokenId: bigint], {tokenId: bigint}, []>(
        abi, '0x10de2676'
    ),
    changeFee: new Func<[_fee: bigint], {_fee: bigint}, []>(
        abi, '0x6a1db1bf'
    ),
    changePool: new Func<[_pool: string], {_pool: string}, []>(
        abi, '0x4339bc30'
    ),
    changeRecoveryAddress: new Func<[tokenId: bigint, recovery: string], {tokenId: bigint, recovery: string}, []>(
        abi, '0x9950e7ee'
    ),
    changeTrustedCaller: new Func<[_trustedCaller: string], {_trustedCaller: string}, []>(
        abi, '0x881b1956'
    ),
    changeVault: new Func<[_vault: string], {_vault: string}, []>(
        abi, '0x60e232a9'
    ),
    completeRecovery: new Func<[tokenId: bigint], {tokenId: bigint}, []>(
        abi, '0x85fb8449'
    ),
    disableTrustedOnly: new Func<[], {}, []>(
        abi, '0x6e9bde49'
    ),
    expiryOf: new Func<[_: bigint], {}, bigint>(
        abi, '0xbaef73e9'
    ),
    fee: new Func<[], {}, bigint>(
        abi, '0xddca3f43'
    ),
    generateCommit: new Func<[fname: string, to: string, secret: string, recovery: string], {fname: string, to: string, secret: string, recovery: string}, string>(
        abi, '0x9fc999e4'
    ),
    getApproved: new Func<[tokenId: bigint], {tokenId: bigint}, string>(
        abi, '0x081812fc'
    ),
    getRoleAdmin: new Func<[role: string], {role: string}, string>(
        abi, '0x248a9ca3'
    ),
    grantRole: new Func<[role: string, account: string], {role: string, account: string}, []>(
        abi, '0x2f2ff15d'
    ),
    hasRole: new Func<[role: string, account: string], {role: string, account: string}, boolean>(
        abi, '0x91d14854'
    ),
    initialize: new Func<[_tokenName: string, _tokenSymbol: string, _vault: string, _pool: string], {_tokenName: string, _tokenSymbol: string, _vault: string, _pool: string}, []>(
        abi, '0x8f15b414'
    ),
    isApprovedForAll: new Func<[owner: string, operator: string], {owner: string, operator: string}, boolean>(
        abi, '0xe985e9c5'
    ),
    isTrustedForwarder: new Func<[forwarder: string], {forwarder: string}, boolean>(
        abi, '0x572b6c05'
    ),
    makeCommit: new Func<[commit: string], {commit: string}, []>(
        abi, '0x0c97fc36'
    ),
    name: new Func<[], {}, string>(
        abi, '0x06fdde03'
    ),
    ownerOf: new Func<[tokenId: bigint], {tokenId: bigint}, string>(
        abi, '0x6352211e'
    ),
    pause: new Func<[], {}, []>(
        abi, '0x8456cb59'
    ),
    paused: new Func<[], {}, boolean>(
        abi, '0x5c975abb'
    ),
    pool: new Func<[], {}, string>(
        abi, '0x16f0115b'
    ),
    proxiableUUID: new Func<[], {}, string>(
        abi, '0x52d1902d'
    ),
    reclaim: new Func<[tokenId: bigint], {tokenId: bigint}, []>(
        abi, '0x2dabbeed'
    ),
    recoveryClockOf: new Func<[_: bigint], {}, bigint>(
        abi, '0xac817ccc'
    ),
    recoveryDestinationOf: new Func<[_: bigint], {}, string>(
        abi, '0xcb17e04a'
    ),
    recoveryOf: new Func<[_: bigint], {}, string>(
        abi, '0xfa1a1b25'
    ),
    register: new Func<[fname: string, to: string, secret: string, recovery: string], {fname: string, to: string, secret: string, recovery: string}, []>(
        abi, '0x464ac22c'
    ),
    renew: new Func<[tokenId: bigint], {tokenId: bigint}, []>(
        abi, '0x5baa7509'
    ),
    renounceRole: new Func<[role: string, account: string], {role: string, account: string}, []>(
        abi, '0x36568abe'
    ),
    requestRecovery: new Func<[tokenId: bigint, to: string], {tokenId: bigint, to: string}, []>(
        abi, '0x6473b35e'
    ),
    revokeRole: new Func<[role: string, account: string], {role: string, account: string}, []>(
        abi, '0xd547741f'
    ),
    'safeTransferFrom(address,address,uint256)': new Func<[from: string, to: string, tokenId: bigint], {from: string, to: string, tokenId: bigint}, []>(
        abi, '0x42842e0e'
    ),
    'safeTransferFrom(address,address,uint256,bytes)': new Func<[from: string, to: string, tokenId: bigint, data: string], {from: string, to: string, tokenId: bigint, data: string}, []>(
        abi, '0xb88d4fde'
    ),
    setApprovalForAll: new Func<[operator: string, approved: boolean], {operator: string, approved: boolean}, []>(
        abi, '0xa22cb465'
    ),
    supportsInterface: new Func<[interfaceId: string], {interfaceId: string}, boolean>(
        abi, '0x01ffc9a7'
    ),
    symbol: new Func<[], {}, string>(
        abi, '0x95d89b41'
    ),
    timestampOf: new Func<[_: string], {}, bigint>(
        abi, '0x76fa0b8a'
    ),
    tokenURI: new Func<[tokenId: bigint], {tokenId: bigint}, string>(
        abi, '0xc87b56dd'
    ),
    transferFrom: new Func<[from: string, to: string, tokenId: bigint], {from: string, to: string, tokenId: bigint}, []>(
        abi, '0x23b872dd'
    ),
    trustedCaller: new Func<[], {}, string>(
        abi, '0x268f0760'
    ),
    trustedOnly: new Func<[], {}, bigint>(
        abi, '0x6b2ddd4e'
    ),
    trustedRegister: new Func<[fname: string, to: string, recovery: string, inviter: bigint, invitee: bigint], {fname: string, to: string, recovery: string, inviter: bigint, invitee: bigint}, []>(
        abi, '0x3f09a95a'
    ),
    unpause: new Func<[], {}, []>(
        abi, '0x3f4ba83a'
    ),
    upgradeTo: new Func<[newImplementation: string], {newImplementation: string}, []>(
        abi, '0x3659cfe6'
    ),
    upgradeToAndCall: new Func<[newImplementation: string, data: string], {newImplementation: string, data: string}, []>(
        abi, '0x4f1ef286'
    ),
    vault: new Func<[], {}, string>(
        abi, '0xfbfa77cf'
    ),
    withdraw: new Func<[amount: bigint], {amount: bigint}, []>(
        abi, '0x2e1a7d4d'
    ),
}

export class Contract extends ContractBase {

    DEFAULT_ADMIN_ROLE(): Promise<string> {
        return this.eth_call(functions.DEFAULT_ADMIN_ROLE, [])
    }

    balanceOf(owner: string): Promise<bigint> {
        return this.eth_call(functions.balanceOf, [owner])
    }

    expiryOf(arg0: bigint): Promise<bigint> {
        return this.eth_call(functions.expiryOf, [arg0])
    }

    fee(): Promise<bigint> {
        return this.eth_call(functions.fee, [])
    }

    generateCommit(fname: string, to: string, secret: string, recovery: string): Promise<string> {
        return this.eth_call(functions.generateCommit, [fname, to, secret, recovery])
    }

    getApproved(tokenId: bigint): Promise<string> {
        return this.eth_call(functions.getApproved, [tokenId])
    }

    getRoleAdmin(role: string): Promise<string> {
        return this.eth_call(functions.getRoleAdmin, [role])
    }

    hasRole(role: string, account: string): Promise<boolean> {
        return this.eth_call(functions.hasRole, [role, account])
    }

    isApprovedForAll(owner: string, operator: string): Promise<boolean> {
        return this.eth_call(functions.isApprovedForAll, [owner, operator])
    }

    isTrustedForwarder(forwarder: string): Promise<boolean> {
        return this.eth_call(functions.isTrustedForwarder, [forwarder])
    }

    name(): Promise<string> {
        return this.eth_call(functions.name, [])
    }

    ownerOf(tokenId: bigint): Promise<string> {
        return this.eth_call(functions.ownerOf, [tokenId])
    }

    paused(): Promise<boolean> {
        return this.eth_call(functions.paused, [])
    }

    pool(): Promise<string> {
        return this.eth_call(functions.pool, [])
    }

    proxiableUUID(): Promise<string> {
        return this.eth_call(functions.proxiableUUID, [])
    }

    recoveryClockOf(arg0: bigint): Promise<bigint> {
        return this.eth_call(functions.recoveryClockOf, [arg0])
    }

    recoveryDestinationOf(arg0: bigint): Promise<string> {
        return this.eth_call(functions.recoveryDestinationOf, [arg0])
    }

    recoveryOf(arg0: bigint): Promise<string> {
        return this.eth_call(functions.recoveryOf, [arg0])
    }

    supportsInterface(interfaceId: string): Promise<boolean> {
        return this.eth_call(functions.supportsInterface, [interfaceId])
    }

    symbol(): Promise<string> {
        return this.eth_call(functions.symbol, [])
    }

    timestampOf(arg0: string): Promise<bigint> {
        return this.eth_call(functions.timestampOf, [arg0])
    }

    tokenURI(tokenId: bigint): Promise<string> {
        return this.eth_call(functions.tokenURI, [tokenId])
    }

    trustedCaller(): Promise<string> {
        return this.eth_call(functions.trustedCaller, [])
    }

    trustedOnly(): Promise<bigint> {
        return this.eth_call(functions.trustedOnly, [])
    }

    vault(): Promise<string> {
        return this.eth_call(functions.vault, [])
    }
}
