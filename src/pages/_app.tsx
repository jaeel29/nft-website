import type { AppProps } from 'next/app';
import GlobaleStyle from '@styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from '@styles/Theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobaleStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
