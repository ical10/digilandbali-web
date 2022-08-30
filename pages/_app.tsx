import {ChakraProvider} from '@chakra-ui/react';
import {extendTheme} from '@chakra-ui/react';
import '@fontsource/syne/700.css';
import {createTheme, ThemeProvider} from '@mui/material/styles';

import React, {useEffect} from 'react';

import {AppProps} from 'next/app';

import '../styles/globals.css';

import client from 'src/helpers/connectors';
import {WagmiConfig} from 'wagmi';

const theme = extendTheme({
  fonts: {
    heading: `'Syne', sans-serif`,
    body: `'Syne', sans-serif`,
  },

  colors: {
    darkBlue: {
      100: '#284071',
    },
  },
});

const customTheme = createTheme({});

function MyApp({Component, pageProps}: AppProps) {
  useEffect(() => {
    document.body.className = pageProps.isDark ? 'dark-mode' : 'light-mode';
  });

  return (
    <ThemeProvider theme={customTheme}>
      <ChakraProvider theme={theme}>
        <WagmiConfig client={client}>
          <Component {...pageProps} />
        </WagmiConfig>
      </ChakraProvider>
    </ThemeProvider>
  );
}

export default MyApp;
