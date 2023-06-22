import React, { useEffect } from "react";
import blog_data from "./blog-data";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
// import { ListBlogs } from "../../redux/slices/blogSlice";
// import Logo from "../../assets/dmv/logoo.gif";
// import LazyLoad from "react-lazyload";
const BlogPage = ({ NewsEvent }) => {
  // const dispatch = useDispatch();
  // const { blogList } = useSelector((state) => state.blog);
  // useEffect(() => {
  //   async function GetBlogs() {
  //     const res = await dispatch(ListBlogs());
  //     console.log(res, "Ressss");
  //   }
  //   GetBlogs();
  // }, [dispatch]);
  const blogContent =
    NewsEvent && NewsEvent?.length > 0
      ? NewsEvent?.map((b) => {
          const obj = {
            id: b._id,
            img: b.Image
              ? b.Image
              : "https://source.unsplash.com/600x400/?computer",
            tag: b?.eventType,
            date: new Date(b?.createdAt).toDateString(),
            title: b?.eventTitle,
            blog_1: true,
          };
          return obj;
        })
      : [];
  // console.log(blogContent, "blogContent");
  return (
    <>
      {blogContent.length > 0
        ? blogContent?.map((item) => (
            <article className="container blog-meta-four" key={item.id}>
              <div className="img-meta position-relative">
                {/* <LazyLoad height={200}> */}
                <img src={item.img} alt="blog post" className="w-100" />
                {/* </LazyLoad> */}
                <Link prefetch={false} href={`#`} className="tag">
                  {item.tag}
                </Link>
              </div>
              <div className="post-info">
                {item.featured} - <span className="date">{item.date}</span>
              </div>
              <Link
                prefetch={false}
                href={"/NewsDetail"}
                onClick={() => {
                  if (typeof window !== "undefined") {
                    localStorage.setItem("news", item.id);
                  }
                }}
                className="title"
                // onClick={() => localStorage.setItem("slug", item.slug)}
              >
                {item.title}
              </Link>
              <div className="post-footer d-flex align-items-center justify-content-between">
                {/* <img src={item.icon} alt="icon" className="logo" height={40} /> */}
                <Link
                  prefetch={false}
                  href={"/NewsDetail"}
                  onClick={() => {
                    if (typeof window !== "undefined") {
                      localStorage.setItem("news", item.id);
                    }
                  }}
                >
                  {/* <img src={"/images/icon/icon_16.svg"} alt="icon" /> */}
                </Link>
              </div>
            </article>
          ))
        : ""}
    </>
  );
};

export default BlogPage;
