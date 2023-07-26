import { useEffect, useState } from "react";
import "../styles/globals.css";
// import AOS from "aos";
// import "aos/dist/aos.css";
import { Provider } from "react-redux";
import { wrapper } from "../redux/store";
import Loader from "../components/Common/Loader";
import useWindowDimensions from "../components/Common/Dimensions";
import { ToastContainer } from "react-toastify";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import Link from "next/link";
import { GetCMS } from "../services/websiteServices";
import dynamic from "next/dynamic";
import Script from "next/script";

// const Animejs = dynamic(() =>
//   import("")
// );
function MyApp({ Component, pageProps, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const [loader, setLoader] = useState(true);
  const [open, setOpen] = useState(false);
  const [popupdatas, setPopupData] = useState(null);
  const { width } = useWindowDimensions();
  useEffect(() => {
    async function AOSINIT() {
      // return AOS.init({
      //   duration: 1200,
      //   disable: "mobile",
      // });
    }
    async function GetModalData() {
      const response = await GetCMS("home");
      const popupdata = response.data.data.filter(
        (res) => res.sectionType == "popup"
      );
      setPopupData(popupdata);
    }
    GetModalData();
    if (width > 768) {
      console.log("hello");
      AOSINIT();
    }

    setTimeout(() => {
      setLoader(false);
      setOpen(false);
    }, 4000);
  }, [width]);
  function removeTags(str) {
    if (str === null || str === "") return false;
    else str = str.toString();

    // Regular expression to identify HTML tags in
    // the input string. Replacing the identified
    // HTML tag with a null string.
    return str.replace(/(<([^>]+)>)/gi, "");
  }
  // const updatedData =
  //   popupdatas &&
  //   popupdatas.length > 0 &&
  //   popupdatas.splice(1, popupdatas.length);
  console.log(popupdatas, "updatedData");
  return (
    <Provider store={store}>
      {!loader ? (
        <>
          {/* <Animejs /> */}
          {/* <Script
            src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"
            async
          /> */}
          <Component {...pageProps} />
          <ToastContainer />
          <Script
            src="https://cdn.jsdelivr.net/gh/yesiamrocks/cssanimation.io@1.0.3/letteranimation.min.js"
            async
          />
          {/* <Modal
            open={open}
            center
            styles={{
              modal: {
                borderRadius: 20,
              },
            }}
            onClose={() => setOpen(!open)}
          >
            <div className="container">
              <div className="row gx-1">
                <div className="row gx-2">
                  {popupdatas?.length > 0 &&
                    popupdatas?.map((popup) => (
                      <div class="col-md-6" key={popup._id}>
                        <Link href={removeTags(popup?.description)}>
                          <div class="p-3  inner-container text-center">
                            {popup.title}
                          </div>
                        </Link>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </Modal> */}
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
