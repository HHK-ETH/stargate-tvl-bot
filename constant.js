const POOL_SUBGRAPHS = [
  'https://api.thegraph.com/subgraphs/name/goldennaim/bsc-stargate-pool-usdt',
  'https://api.thegraph.com/subgraphs/name/goldennaim/bsc-stargate-pool-busd',
  'https://api.thegraph.com/subgraphs/name/goldennaim/avalanche-stargate-pool-usdc',
  'https://api.thegraph.com/subgraphs/name/goldennaim/avalanche-stargate-pool-usdt',
  'https://api.thegraph.com/subgraphs/name/goldennaim/polygon-stargate-pool-usdc',
  'https://api.thegraph.com/subgraphs/name/goldennaim/polygon-stargate-pool-usdt',
  'https://api.thegraph.com/subgraphs/name/goldennaim/arbitrum-stargate-pool-usdc',
  'https://api.thegraph.com/subgraphs/name/goldennaim/arbitrum-stargate-pool-usdt',
  'https://api.thegraph.com/subgraphs/name/goldennaim/optimism-stargate-pool-usdc',
  'https://api.thegraph.com/subgraphs/name/goldennaim/fantom-stargate-pool-usdc',
];

const MAINNET_POOL_SUBGRAPH = 'https://api.thegraph.com/subgraphs/name/goldennaim/stargate';

//could probably be easier with subgraphs
const NETWORKS = [
  {
    rpc: 'https://rpc.flashbots.net',
    tokens: [
      {
        decimals: 6,
        address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
        lp: '0xdf0770dF86a8034b3EFEf0A1Bb3c889B8332FF56',
      },
      {
        decimals: 6,
        address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
        lp: '0x38EA452219524Bb87e18dE1C24D3bB59510BD783',
      },
      {
        decimals: 18,
        address: 'ETH',
        lp: '0x72E2F4830b9E45d52F80aC08CB2bEC0FeF72eD9c',
      },
    ],
  },
  {
    rpc: 'https://bsc-dataseed1.binance.org',
    tokens: [
      {
        decimals: 18,
        address: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
        lp: '0x98a5737749490856b401DB5Dc27F522fC314A4e1',
      },
      {
        decimals: 18,
        address: '0x55d398326f99059fF775485246999027B3197955',
        lp: '0x9aA83081AA06AF7208Dcc7A4cB72C94d057D2cda',
      },
    ],
  },
  {
    rpc: 'https://api.avax.network/ext/bc/C/rpc',
    tokens: [
      {
        decimals: 6,
        address: '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E',
        lp: '0x1205f31718499dBf1fCa446663B532Ef87481fe1',
      },
      {
        decimals: 6,
        address: '0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7',
        lp: '0x29e38769f23701A2e4A8Ef0492e19dA4604Be62c',
      },
    ],
  },
  {
    rpc: 'https://polygon-rpc.com/',
    tokens: [
      {
        decimals: 6,
        address: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
        lp: '0x1205f31718499dBf1fCa446663B532Ef87481fe1',
      },
      {
        decimals: 6,
        address: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
        lp: '0x29e38769f23701A2e4A8Ef0492e19dA4604Be62c',
      },
    ],
  },
  {
    rpc: 'https://arb1.arbitrum.io/rpc',
    tokens: [
      {
        decimals: 6,
        address: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',
        lp: '0x892785f33CdeE22A30AEF750F285E18c18040c3e',
      },
      {
        decimals: 6,
        address: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
        lp: '0xB6CfcF89a7B22988bfC96632aC2A9D6daB60d641',
      },
      {
        decimals: 18,
        address: 'ETH',
        lp: '0x82CbeCF39bEe528B5476FE6d1550af59a9dB6Fc0',
      },
    ],
  },
  {
    rpc: 'https://mainnet.optimism.io/',
    tokens: [
      {
        decimals: 6,
        address: '0x7F5c764cBc14f9669B88837ca1490cCa17c31607',
        lp: '0xDecC0c09c3B5f6e92EF4184125D5648a66E35298',
      },
      {
        decimals: 18,
        address: 'ETH',
        lp: '0xb69c8CBCD90A39D8D3d3ccf0a3E968511C3856A0',
      },
    ],
  },
  {
    rpc: 'https://rpc.ftm.tools',
    tokens: [
      {
        decimals: 6,
        address: '0x04068DA6C83AFCFA0e13ba15A6696662335D5B75',
        lp: '0x12edeA9cd262006cC3C4E77c90d2CD2DD4b1eb97',
      },
    ],
  },
];

const ERC20ABI = [
  {
    constant: true,
    inputs: [],
    name: 'name',
    outputs: [{ name: '', type: 'string' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: 'guy', type: 'address' },
      { name: 'wad', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: 'src', type: 'address' },
      { name: 'dst', type: 'address' },
      { name: 'wad', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [{ name: 'wad', type: 'uint256' }],
    name: 'withdraw',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', type: 'uint8' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ name: '', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', type: 'string' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: 'dst', type: 'address' },
      { name: 'wad', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'deposit',
    outputs: [],
    payable: true,
    stateMutability: 'payable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      { name: '', type: 'address' },
      { name: '', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  { payable: true, stateMutability: 'payable', type: 'fallback' },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'src', type: 'address' },
      { indexed: true, name: 'guy', type: 'address' },
      { indexed: false, name: 'wad', type: 'uint256' },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'src', type: 'address' },
      { indexed: true, name: 'dst', type: 'address' },
      { indexed: false, name: 'wad', type: 'uint256' },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'dst', type: 'address' },
      { indexed: false, name: 'wad', type: 'uint256' },
    ],
    name: 'Deposit',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'src', type: 'address' },
      { indexed: false, name: 'wad', type: 'uint256' },
    ],
    name: 'Withdrawal',
    type: 'event',
  },
];

const PRICEFEED_ABI = [
  {
    inputs: [
      { internalType: 'address', name: '_aggregator', type: 'address' },
      { internalType: 'address', name: '_accessController', type: 'address' },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'int256', name: 'current', type: 'int256' },
      { indexed: true, internalType: 'uint256', name: 'roundId', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'updatedAt', type: 'uint256' },
    ],
    name: 'AnswerUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'uint256', name: 'roundId', type: 'uint256' },
      { indexed: true, internalType: 'address', name: 'startedBy', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'startedAt', type: 'uint256' },
    ],
    name: 'NewRound',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'from', type: 'address' },
      { indexed: true, internalType: 'address', name: 'to', type: 'address' },
    ],
    name: 'OwnershipTransferRequested',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'from', type: 'address' },
      { indexed: true, internalType: 'address', name: 'to', type: 'address' },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  { inputs: [], name: 'acceptOwnership', outputs: [], stateMutability: 'nonpayable', type: 'function' },
  {
    inputs: [],
    name: 'accessController',
    outputs: [{ internalType: 'contract AccessControllerInterface', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'aggregator',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: '_aggregator', type: 'address' }],
    name: 'confirmAggregator',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'decimals',
    outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'description',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: '_roundId', type: 'uint256' }],
    name: 'getAnswer',
    outputs: [{ internalType: 'int256', name: '', type: 'int256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint80', name: '_roundId', type: 'uint80' }],
    name: 'getRoundData',
    outputs: [
      { internalType: 'uint80', name: 'roundId', type: 'uint80' },
      { internalType: 'int256', name: 'answer', type: 'int256' },
      { internalType: 'uint256', name: 'startedAt', type: 'uint256' },
      { internalType: 'uint256', name: 'updatedAt', type: 'uint256' },
      { internalType: 'uint80', name: 'answeredInRound', type: 'uint80' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: '_roundId', type: 'uint256' }],
    name: 'getTimestamp',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'latestAnswer',
    outputs: [{ internalType: 'int256', name: '', type: 'int256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'latestRound',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'latestRoundData',
    outputs: [
      { internalType: 'uint80', name: 'roundId', type: 'uint80' },
      { internalType: 'int256', name: 'answer', type: 'int256' },
      { internalType: 'uint256', name: 'startedAt', type: 'uint256' },
      { internalType: 'uint256', name: 'updatedAt', type: 'uint256' },
      { internalType: 'uint80', name: 'answeredInRound', type: 'uint80' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'latestTimestamp',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [{ internalType: 'address payable', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint16', name: '', type: 'uint16' }],
    name: 'phaseAggregators',
    outputs: [{ internalType: 'contract AggregatorV2V3Interface', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'phaseId',
    outputs: [{ internalType: 'uint16', name: '', type: 'uint16' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: '_aggregator', type: 'address' }],
    name: 'proposeAggregator',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'proposedAggregator',
    outputs: [{ internalType: 'contract AggregatorV2V3Interface', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint80', name: '_roundId', type: 'uint80' }],
    name: 'proposedGetRoundData',
    outputs: [
      { internalType: 'uint80', name: 'roundId', type: 'uint80' },
      { internalType: 'int256', name: 'answer', type: 'int256' },
      { internalType: 'uint256', name: 'startedAt', type: 'uint256' },
      { internalType: 'uint256', name: 'updatedAt', type: 'uint256' },
      { internalType: 'uint80', name: 'answeredInRound', type: 'uint80' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'proposedLatestRoundData',
    outputs: [
      { internalType: 'uint80', name: 'roundId', type: 'uint80' },
      { internalType: 'int256', name: 'answer', type: 'int256' },
      { internalType: 'uint256', name: 'startedAt', type: 'uint256' },
      { internalType: 'uint256', name: 'updatedAt', type: 'uint256' },
      { internalType: 'uint80', name: 'answeredInRound', type: 'uint80' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: '_accessController', type: 'address' }],
    name: 'setController',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: '_to', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'version',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
];

const ETHUSD_ADDRESS = '0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419';

export { ERC20ABI, PRICEFEED_ABI, ETHUSD_ADDRESS, NETWORKS, POOL_SUBGRAPHS, MAINNET_POOL_SUBGRAPH };
