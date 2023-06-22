import React, { useEffect } from "react";
import Head from "./MainHead";
import Header from "./Header";
import Footer from "./Footer";
import Loader from "./Loader";

export default function Layout(props) {
  const [hasMounted, setHasMounted] = React.useState(false);
  useEffect(() => {
    async function HandleMount() {
      setHasMounted(true);
    }
    HandleMount();
  }, []);
  return (
    <>
      <Head title={props.title} />
      <Header />
      <div>{props.children}</div>
      <Footer />
    </>
  );
}
