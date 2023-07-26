import React, { useEffect } from "react";
import Header from "../../components/Common/Header";
import Footer from "../../components/Common/Footer";
import Layout from "../../components/Common/Layout";
import BlogDetails from "../../components/blog/blogdetails";
import { useDispatch, useSelector } from "react-redux";
import { GetNewsData } from "../../redux/slices/websiteslices";
export default function NewsDetail() {
  const dispatch = useDispatch();
  const { news } = useSelector((state) => state.websitecontent);

  const NewsDetail = news.filter(
    (onenew) =>
      onenew.eventType.toLowerCase() == "news" &&
      onenew._id == localStorage.getItem("news")
  );
  console.log(NewsDetail, "NewsDetail");
  useEffect(() => {
    async function GetSinglNews() {
      dispatch(GetNewsData());
    }
    GetSinglNews();
  }, []);
  return (
    <Layout title={NewsDetail[0].eventTitle}>
      <BlogDetails blogDetails={NewsDetail[0]} />
    </Layout>
  );
}
