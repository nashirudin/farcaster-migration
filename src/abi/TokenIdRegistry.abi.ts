export const ABI_JSON = [
    {
        "type": "constructor",
        "stateMutability": "undefined",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_forwarder"
            }
        ]
    },
    {
        "type": "error",
        "name": "Escrow",
        "inputs": []
    },
    {
        "type": "error",
        "name": "HasId",
        "inputs": []
    },
    {
        "type": "error",
        "name": "HasNoId",
        "inputs": []
    },
    {
        "type": "error",
        "name": "Invitable",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NoRecovery",
        "inputs": []
    },
    {
        "type": "error",
        "name": "Registrable",
        "inputs": []
    },
    {
        "type": "error",
        "name": "Unauthorized",
        "inputs": []
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "CancelRecovery",
        "inputs": [
            {
                "type": "address",
                "name": "by",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "id",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ChangeHome",
        "inputs": [
            {
                "type": "uint256",
                "name": "id",
                "indexed": true
            },
            {
                "type": "string",
                "name": "url",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ChangeRecoveryAddress",
        "inputs": [
            {
                "type": "uint256",
                "name": "id",
                "indexed": true
            },
            {
                "type": "address",
                "name": "recovery",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ChangeTrustedCaller",
        "inputs": [
            {
                "type": "address",
                "name": "trustedCaller",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "DisableTrustedOnly",
        "inputs": []
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "OwnershipTransferred",
        "inputs": [
            {
                "type": "address",
                "name": "previousOwner",
                "indexed": true
            },
            {
                "type": "address",
                "name": "newOwner",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Register",
        "inputs": [
            {
                "type": "address",
                "name": "to",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "id",
                "indexed": true
            },
            {
                "type": "address",
                "name": "recovery",
                "indexed": false
            },
            {
                "type": "string",
                "name": "url",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "RequestRecovery",
        "inputs": [
            {
                "type": "address",
                "name": "from",
                "indexed": true
            },
            {
                "type": "address",
                "name": "to",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "id",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Transfer",
        "inputs": [
            {
                "type": "address",
                "name": "from",
                "indexed": true
            },
            {
                "type": "address",
                "name": "to",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "id",
                "indexed": true
            }
        ]
    },
    {
        "type": "function",
        "name": "cancelRecovery",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "address",
                "name": "from"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "changeHome",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "string",
                "name": "url"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "changeRecoveryAddress",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "address",
                "name": "recovery"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "changeTrustedCaller",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "address",
                "name": "_trustedCaller"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "completeRecovery",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "address",
                "name": "from"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "completeTransferOwnership",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "disableTrustedOnly",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "idOf",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": ""
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "isTrustedForwarder",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "forwarder"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "owner",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "register",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "address",
                "name": "to"
            },
            {
                "type": "address",
                "name": "recovery"
            },
            {
                "type": "string",
                "name": "url"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "renounceOwnership",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "requestRecovery",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "address",
                "name": "from"
            },
            {
                "type": "address",
                "name": "to"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "requestTransferOwnership",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "newOwner"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "transfer",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "address",
                "name": "to"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "transferOwnership",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": ""
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "trustedRegister",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "address",
                "name": "to"
            },
            {
                "type": "address",
                "name": "recovery"
            },
            {
                "type": "string",
                "name": "url"
            }
        ],
        "outputs": []
    }
]
