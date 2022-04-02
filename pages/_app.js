import ComponentWrapper from 'components/General/ComponentWrapper';
import Head from 'next/head';
import { Provider } from 'react-redux';
import store from 'src/app/store';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Head>
          <title>Jean Chirinos Portfolio</title>
          <meta name="description" content="Jean Chirinos Portfolio" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <ComponentWrapper>
          <Component {...pageProps} />
        </ComponentWrapper>
      </Provider>
    </>
  );
}
