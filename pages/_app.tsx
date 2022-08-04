import type {AppProps} from 'next/app';

import '../styles/globals.css';

import client from 'src/helpers/connectors';
import {WagmiConfig} from 'wagmi';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <WagmiConfig client={client}>
      <Component {...pageProps} />
    </WagmiConfig>
  );
}

export default MyApp;
