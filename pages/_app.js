import NProgress from 'nprogress';
import Router from 'next/router';
import { ChakraProvider, extendTheme, CSSReset } from '@chakra-ui/react';

import '../styles/globals.css'
import "nprogress/nprogress.css";
import Layout from '../components/layout/Layout'

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    
    <ChakraProvider 
      theme={extendTheme({
        fonts: {
          heading: "Tauri, serif",
          body: "Architects Daughter, cursive",
        }
      })
    }>
      <CSSReset />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp
