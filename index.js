import dotenv from 'dotenv';
import { Client, Intents } from 'discord.js';
import { ERC20ABI, ETHUSD_ADDRESS, NETWORKS, PRICEFEED_ABI } from './constant.js';
import { Contract } from 'ethers';
import { JsonRpcProvider } from '@ethersproject/providers';
import { formatUnits } from 'ethers/lib/utils.js';
dotenv.config();

const client = new Client({ intents: [Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILDS] });

const fetchEthUsdPrice = async () => {
  const provider = new JsonRpcProvider(NETWORKS[0].rpc);
  const pricefeed = new Contract(ETHUSD_ADDRESS, PRICEFEED_ABI, provider);
  const price = await pricefeed.latestAnswer();
  return parseFloat(formatUnits(price, 8));
};

const fetchTvl = async () => {
  let tvl = 0;
  const ethPrice = await fetchEthUsdPrice();
  for (const id in NETWORKS) {
    const provider = new JsonRpcProvider(NETWORKS[id].rpc);
    await Promise.all(
      NETWORKS[id].tokens.map(async (token) => {
        if (token.address === 'ETH') {
          const ethAmount = parseFloat(formatUnits(await provider.getBalance(token.lp), 18));
          tvl += ethAmount * ethPrice;
          return;
        }
        const erc20 = new Contract(token.address, ERC20ABI, provider);
        const balance = await erc20.balanceOf(token.lp);
        tvl += parseFloat(formatUnits(balance, token.decimals));
        return;
      })
    );
  }
  return (tvl / 1_000_000_000).toFixed(2);
};

setInterval(async function () {
  try {
    if (client.user) {
      const tvl = await fetchTvl();
      client.user.setActivity('TVL=' + tvl + 'B$', {
        type: 'PLAYING',
      });
      const guild = client.guilds.cache.get(process.env.GUILD);
      const user = await guild.members.fetch(client.user.id);
      await user.setNickname('TVL=' + tvl + 'B$');
    }
  } catch (e) {
    console.log(e);
  }
}, 600_000);

client.login(process.env.DISCORD_TOKEN);
