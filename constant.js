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

export { ERC20ABI, NETWORKS, POOL_SUBGRAPHS, MAINNET_POOL_SUBGRAPH };
