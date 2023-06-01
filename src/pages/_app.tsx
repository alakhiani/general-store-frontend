import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { CartContextProvider } from '../components/contexts/CartContext';
import Navigation from '../components/Navigation';

const theme = createTheme();

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Navigation>
            <Component {...pageProps} />
          </Navigation>
        </CssBaseline>
      </ThemeProvider>
    </CartContextProvider>
  );
}
