import React from "react";
import ReactMarkdown from "react-markdown";

import dynamic from "next/dynamic";

const CommentBox = dynamic(() => import("../common/CommentBox"));
const BlogComments = dynamic(() => import("../common/BlogComments"));
const SocialShare = dynamic(() => import("../common/SocialShare"));
const Tags = dynamic(() => import("../common/Tags"));

const BlogDetailsV1 = ({ blogDetails }) => {
  const createdDay = new Date(
    blogDetails[0]?.attributes?.createdAt
  ).toDateString();

  // const createdMonth = new Date(blogDetails[0]?.attributes?.createdAt).getMonth();
  return (
    <div className="main-page-wrapper">
      <div className="inside-hero-six hero-spacing">
        <div className="bg-container">
          <div className="container">
            <p className="blog-pubish-date">
              <span
                style={{
                  textTransform: "capitalize",
                }}
              >
                {blogDetails[0]?.attributes?.BlogCategory}
              </span>{" "}
              . <span style={{ fontWeight: "bold" }}>{createdDay}</span>
            </p>
            <div className="row">
              <div className="col-xxl-8 col-xl-10 col-lg-7">
                <h2 className="blog-heading-one">
                  {blogDetails[0]?.attributes?.Title}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blog-details-one mt-80 mb-120 lg-mt-60 lg-mb-70">
        <div className="container">
          <div className="row gx-xl-5">
            <div className="col-lg-12">
              <div className="blog-meta-wrapper pe-xxl-5">
                <article className="blog-details-content">
                  <img
                    src={`${
                      process.env.NEXT_PUBLIC_APP_ENV == "dev"
                        ? process.env.NEXT_PUBLIC_APP_DEVURL
                        : process.env.NEXT_PUBLIC_APP_PROD_URL
                    }${
                      blogDetails[0]?.attributes?.BlogImage?.data?.attributes
                        ?.url
                    }`}
                    alt="blog post"
                    className="image-meta w-100"
                  />
                  <ReactMarkdown
                    children={blogDetails[0]?.attributes?.BlogContent}
                    skipHtml={false}
                  />
                  <div className="bottom-widget d-sm-flex align-items-center justify-content-between">
                    <Tags />
                    <SocialShare />
                  </div>
                  {/* <!-- /.bottom-widget --> */}
                </article>
                {/* <!-- /.blog-details-content --> */}

                {/* <div className="blog-comment-area">
                  <h3 className="blog-inner-title pb-15">2 Comments</h3>
                  <BlogComments />
                </div> */}
                {/* <!-- /.blog-comment-area --> */}
{/* 
                <div className="blog-comment-form bg-color">
                  <h3 className="blog-inner-title">Leave A Comment</h3>
                  <p>
                    Sign in to post your comment or signup if you dont have any
                    account.
                  </p>
                  <CommentBox />
                </div> */}
                {/* <!-- /.blog-comment-form --> */}
              </div>
              {/* <!-- /.blog-meta-wrapper --> */}
            </div>
            {/* End .col-lg-8 */}
            {/* <div className="col-lg-4 col-md-8">
              <div className="blog-sidebar md-mt-80">
                <BlogSidebar />
              </div>
              {/* <!-- /.blog-sidebar --> */}
            {/* </div> */}
            {/* End .col */}
          </div>
        </div>
      </div>
      {/* <!-- /.blog-details-one --> */}

      {/* <!--
        =====================================================
         Footer
        =====================================================
        --> */}

      {/* <!-- /.vcamp-footer-one --> */}
    </div>
    // End .main-page-wrapper
  );
};

export default BlogDetailsV1;
