import getConfig from 'next/config';

import {createClient, chain, configureChains} from 'wagmi';
import {MetaMaskConnector} from 'wagmi/connectors/metaMask';
import {alchemyProvider} from 'wagmi/providers/alchemy';
import {publicProvider} from 'wagmi/providers/public';

const {publicRuntimeConfig} = getConfig();

const {chains, provider, webSocketProvider} = configureChains(
  [chain.mainnet, chain.rinkeby],
  [alchemyProvider({apiKey: publicRuntimeConfig.providerKey}), publicProvider()],
);

const client = createClient({
  autoConnect: true,
  connectors: [new MetaMaskConnector({chains})],
  provider,
  webSocketProvider,
});

export default client;
