import { useEffect, useState } from "react";
import "../styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Provider } from "react-redux";
import { wrapper } from "../redux/store";
import Loader from "../components/Common/Loader";
import useWindowDimensions from "../components/Common/Dimensions";
import { ToastContainer } from "react-toastify";
function MyApp({ Component, pageProps, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const [loader, setLoader] = useState(true);
  const { width } = useWindowDimensions();
  useEffect(() => {
    async function AOSINIT() {
      return AOS.init({
        duration: 1200,
        disable: "mobile",
      });
    }
    if (width > 768) {
      console.log("hello");
      AOSINIT();
    }

    setTimeout(() => setLoader(false), 4000);
  }, [width]);
  return (
    <Provider store={store}>
      {!loader ? (
        <>
          <Component {...pageProps} />
          <ToastContainer />
        </>
      ) : (
        <div className="loader-container">
          <Loader />
        </div>
      )}
    </Provider>
  );
}

export default MyApp;
