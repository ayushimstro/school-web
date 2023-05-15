import React from "react";
import Head from "./MainHead";
import Header from "./Header";

export default function Layout(props) {
  return (
    <>
      <Head title={props.title} />
      <Header />
      {props.children}
    </>
  );
}
