import Head from 'next/head';
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import Nav from '@/components/Nav';
import { Analytics } from '@vercel/analytics/react';
import { Notifications } from '@mantine/notifications';
import { useState } from 'react';


export default function App(props) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState('light');
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            /** Put your mantine theme override here */
            colorScheme: colorScheme,
          }}
        >
          <Nav/>
          <Notifications position='top-center'/>
          <Component {...pageProps} />
          <Analytics />
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}