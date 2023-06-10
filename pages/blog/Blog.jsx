import React, { useEffect } from "react";
import blog_data from "./blog-data";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { ListBlogs } from "../../redux/slices/blogSlice";
import Logo from "../../assets/dmv/logoo.gif";
import LazyLoad from "react-lazyload";
const Blog = () => {
  const dispatch = useDispatch();
  const { blogList } = useSelector((state) => state.blog);
  useEffect(() => {
    async function GetBlogs() {
      const res = await dispatch(ListBlogs());
      console.log(res, "Ressss");
    }
    GetBlogs();
  }, [dispatch]);
  const blogContent =
    blogList && blogList?.data?.length > 0
      ? blogList?.data?.map((b) => {
          const obj = {
            id: b.id,
            slug: b?.attributes?.slug,
            img: `${
              process.env.NEXT_PUBLIC_APP_ENV == "dev"
                ? process.env.NEXT_PUBLIC_APP_DEVURL
                : process.env.NEXT_PUBLIC_APP_PROD_URL
            }${b?.attributes?.BlogImage?.data?.attributes?.url}`,
            icon: Logo.src,
            tag: b?.attributes?.BlogCategory,
            featured: "Featured",
            date: new Date(b?.attributes?.createdAt).toDateString(),
            title: b?.attributes?.Title,
            blog_1: true,
          };
          return obj;
        })
      : [];
  console.log(blogContent, "blogContent");
  return (
    <>
      {blogContent.length > 0
        ? blogContent?.map((item) => (
            <article className="blog-meta-four" key={item.id}>
              <div className="img-meta position-relative">
                <LazyLoad height={200}>
                  <img src={item.img} alt="blog post" className="w-100" />
                </LazyLoad>
                <Link
                  prefetch={false}
                  href={`/blog-details/${item.id}`}
                  className="tag"
                >
                  {item.tag}
                </Link>
              </div>
              <div className="post-info">
                {item.featured} - <span className="date">{item.date}</span>
              </div>
              <Link
                prefetch={false}
                href={`/blog-details/${item.slug}`}
                className="title"
                onClick={() => localStorage.setItem("slug", item.slug)}
              >
                {item.title}
              </Link>
              <div className="post-footer d-flex align-items-center justify-content-between">
                <img src={item.icon} alt="icon" className="logo" height={40} />
                <Link
                  prefetch={false}
                  href="/blog-details-v3"
                  className="read-more tran3s"
                >
                  <img src={"/images/icon/icon_16.svg"} alt="icon" />
                </Link>
              </div>
            </article>
          ))
        : ""}
    </>
  );
};

export default Blog;
