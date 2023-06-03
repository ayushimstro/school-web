import React from "react";
import Head from "./MainHead";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout(props) {
  return (
    <>
      <Head title={props.title} />
      <Header />
     <div>{props.children}</div> 
      <Footer/>
    </>
  );
}
