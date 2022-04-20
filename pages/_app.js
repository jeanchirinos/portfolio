import { Provider } from 'react-redux';
import Head from 'next/head';
import store from 'src/app/store';
import ComponentWrapper from 'components/General/ComponentWrapper';

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Jean Chirinos - Portfolio</title>
        <meta name="description" content="Jean Chirinos Portfolio" />
      </Head>
      <ComponentWrapper>
        <Component {...pageProps} />
      </ComponentWrapper>
    </Provider>
  );
}
