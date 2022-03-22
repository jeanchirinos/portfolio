import ComponentWrapper from 'components/General/ComponentWrapper';
import { Provider } from 'react-redux';
import store from 'src/app/store';

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ComponentWrapper>
        <Component {...pageProps} />
      </ComponentWrapper>
    </Provider>
  );
}
