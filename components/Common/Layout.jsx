import React, { useEffect } from "react";
import Head from "./MainHead";
import Header from "./Header";
import Footer from "./Footer";
import Loader from "./Loader";
import Script from "next/script";

export default function Layout(props) {
  const [hasMounted, setHasMounted] = React.useState(false);
  useEffect(() => {
    async function HandleMount() {
      setHasMounted(true);
    }
    HandleMount();
  }, []);
  console.log(props.title);
  return (
    <>
      <Head title={props.title} />
      <Header />
      <div>{props.children}</div>
      <Footer />
    </>
  );
}
