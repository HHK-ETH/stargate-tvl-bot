import { request, gql } from 'graphql-request';
import { POOL_SUBGRAPHS, MAINNET_POOL_SUBGRAPH } from './constant.js';

const SideChainQuery = gql`
  query ($time: BigInt) {
    allSwaps(first: 1000, orderBy: amountSD, orderDirection: desc, where: { timestamp_gt: $time }) {
      amountSD
      eqFee
      protocolFee
      lpFee
    }
  }
`;

const mainnetQuery = gql`
  query ($time: BigInt) {
    swaps(first: 1000, orderBy: amountLD, orderDirection: desc, where: { timestamp_gt: $time }) {
      amountLD
    }
  }
`;

const querySideChain24HoursSwaps = async () => {
  const time = (new Date().getTime() / 1000 - 3600 * 24).toFixed(0);
  const swaps = await Promise.all(
    POOL_SUBGRAPHS.map(async (subgraph) => {
      const result = await request(subgraph, SideChainQuery, { time: time });
      return result.allSwaps;
    })
  );
  return swaps;
};

const queryMainnet24HoursSwaps = async () => {
  const time = (new Date().getTime() / 1000 - 3600 * 24).toFixed(0);
  const result = await request(MAINNET_POOL_SUBGRAPH, mainnetQuery, { time: time });
  return result.swaps;
};

const processSideChainVolume = (swaps) => {
  let volume = 0;
  for (const i in swaps) {
    for (const y in swaps[i]) {
      const swap = swaps[i][y];
      const amount = parseInt(swap.amountSD) + parseInt(swap.eqFee) + parseInt(swap.protocolFee) + parseInt(swap.lpFee);
      volume += amount;
    }
  }
  return volume;
};

const processMainnetVolume = (swaps) => {
  let volume = 0;
  for (const i in swaps) {
    const swap = swaps[i];
    volume += parseInt(swap.amountLD);
  }
  return volume;
};

const query24HoursVolume = async () => {
  const sideChainSwaps = await querySideChain24HoursSwaps();
  const sideChainVolume = processSideChainVolume(sideChainSwaps) / 1e6;

  const mainnetSwaps = await queryMainnet24HoursSwaps();
  const mainnetVolume = processMainnetVolume(mainnetSwaps) / 1e6;
  console.log(sideChainVolume);
  console.log(mainnetVolume);

  console.log(sideChainVolume + mainnetVolume);
  return sideChainVolume + mainnetVolume;
};

query24HoursVolume();
