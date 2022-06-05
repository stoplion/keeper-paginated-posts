import '../styles/globals.css';
import '../styles/loader.css';
import '../styles/pagination.css';

import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../state/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />;
    </Provider>
  );
}

export default MyApp;
