import { useEffect } from 'react';
import '../styles/globals.css'
import AOS from "aos";
import "aos/dist/aos.css";
import { Provider } from "react-redux";
import { wrapper } from "../redux/store";
function MyApp({ Component, pageProps, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  useEffect(() => {
    AOS.init({
      duration: 1200,
      disable: 'mobile'
    });
  }, []);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp
