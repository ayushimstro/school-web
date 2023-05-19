import '../styles/globals.css'
import { Provider } from "react-redux";
import { wrapper } from "../redux/store";
function MyApp({ Component, pageProps, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp
