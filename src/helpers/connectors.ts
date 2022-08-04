import {createClient, chain, configureChains} from 'wagmi';
import {MetaMaskConnector} from 'wagmi/connectors/metaMask';
import {alchemyProvider} from 'wagmi/providers/alchemy';
import {publicProvider} from 'wagmi/providers/public';

const {chains, provider, webSocketProvider} = configureChains(
  [chain.mainnet, chain.rinkeby],
  [alchemyProvider({apiKey: process.env.NEXT_PUBLIC_PROVIDER_KEY}), publicProvider()],
);

const client = createClient({
  autoConnect: true,
  connectors: [new MetaMaskConnector({chains})],
  provider,
  webSocketProvider,
});

export default client;
