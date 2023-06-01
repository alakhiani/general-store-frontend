import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { CartContextProvider } from '../components/contexts/CartContext';
import Layout from '../components/Layout';

const theme = createTheme();

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </CssBaseline>
      </ThemeProvider>
    </CartContextProvider>
  );
}
