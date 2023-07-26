import React, { useEffect, useState } from "react";
import BlogPage from "../../components/blog/Blog";
import Layout from "../../components/Common/Layout";
import { useSelector } from "react-redux";
export default function Blog() {
  const [heroclass, setHeroClass] = useState("hero-spacing");
  const { news, cms, gallery } = useSelector((state) => state.websitecontent);
  // const { cms } = useSelector((state) => state.cms);
  const NewsEvent = news.filter(
    (onenew) => onenew.eventType.toLowerCase() == "news"
  );
  //   useEffect(() => {

  //     changeBackground
  //   }, []);
  const changeBackground = () => {
    if (window.scrollY >= 55) {
      setHeroClass("hero-spacing-top");
    } else {
      setHeroClass("hero-spacing");
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeBackground);
  }
  return (
    <Layout title={"ICSK News"}>
      <div className={`inside-hero-one ${heroclass}`}>
        <div className="container">
          <h2 className="page-title font-recoleta">News</h2>
          <p>Find stories from our community</p>
        </div>
      </div>
      <div className="blog-section-four mt-160 mb-150 lg-mt-100 lg-mb-120">
        <div className="container">
          <div className="row gx-xl-5">
            <div className="col-lg-12">
              <div className="blog-meta-wrapper">
                <BlogPage NewsEvent={NewsEvent} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
