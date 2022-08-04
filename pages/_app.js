import '../styles/globals.css';

import client from 'src/helpers/connectors.ts';
import {WagmiConfig} from 'wagmi';

function MyApp({Component, pageProps}) {
  return (
    <WagmiConfig client={client}>
      <Component {...pageProps} />
    </WagmiConfig>
  );
}

export default MyApp;
