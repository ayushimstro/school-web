import React, { useState } from "react";
import Layout from "../components/Common/Layout";
import Script from "next/script";
export default function Search() {
  const [classs, setsClass] = useState("search-result");
  const changeBackground = () => {
    if (window.scrollY >= 55) {
      setsClass("search-result-scroll");
    } else {
      setsClass("search-result");
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeBackground);
  }
  return (
    <Layout>
      <div className={classs}>
        <Script
          src="https://cse.google.com/cse.js?cx=e60d373261a394525"
          async
        />
        <div
          class="gcse-searchresults-only"
          style={{
            padding: "2rem",
          }}
        ></div>
      </div>
    </Layout>
  );
}
