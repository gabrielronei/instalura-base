import { ThemeProvider } from 'styled-components';
import theme from '../src/theme';
import GlobalStyle from '../src/theme/GlobalStyle';
import Head from 'next/head';
import { SEO } from '../src/components/commons/SEO';

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <SEO /> */}
      {/* <ThemeProvider theme={theme}>
        <GlobalStyle />
      
      </ThemeProvider> */}
      <Component {...pageProps} />
    </>
  )
}
