import React, { useContext } from "react";
import StyleContext from "../contexts/StyleContext";
import Button from "@material-ui/core/Button";
import "../styles/Blog.css";
import BlogsCard from "./constants/BlogCard";
import { blogCard } from "./constants/Constant";
import speaker from "../assets/Button.png";
import like from "../assets/like.png";
import BlogBannerCard from "./constants/BlogBannerCard";

function Blog() {
  const { isDark } = useContext(StyleContext);
  return (
    <div
      className={
        isDark ? "blog-container dark-blog-container" : "blog-container"
      }
    >
      <div className="blog-div-title">
        <h1>Blogs & Announcements</h1>
      </div>
      <div className="align-blog-horizontal-cards">
        <div className="blog-podcast">
          <BlogsCard>
            <div className="align-card-heading">
              <p className="blog-card-type">Podcasts</p>
              <p>14th May</p>
              <div className="align-card-likes">
                <img src={like} alt="" />
                <p>93</p>
              </div>
            </div>
            <div>
              <div className="blog-card-img">
                <img src={speaker} alt="" />
              </div>
              <div className="blog-card-text">
                <h1>
                  An app for tracking sleep without pain and crutches is worth a
                  try
                </h1>
                <p>~ 2hr 15mins</p>
              </div>
            </div>
          </BlogsCard>
        </div>
        <div className="align-blog-cards">
          {blogCard.blogs.map((content) => (
            <BlogsCard>
              <div className="align-card-header-img">
                <img src={content.image} alt="" />
              </div>
              <div className="align-card-headings">
                <p className="blog-card-type">{content.type}</p>
                <p>{content.date}</p>
                <div className="align-card-likes">
                  <img src={content.like} alt="" />
                  <p>{content.stars}</p>
                </div>
              </div>
              <div>
                <h2 className="blog-title">{content.subTitle}</h2>
                <p className="blog-desc">{content.desc}</p>
              </div>
              <div className="blog-next">
                <p>{content.next}</p>
                <img src={content.arrow} alt="" />
              </div>
            </BlogsCard>
          ))}
        </div>
      </div>
      <div className="align-banner">
        <BlogBannerCard>
          <div className="banner-content">
            <h1>
              Ready to work with Tezos <br /> India?
            </h1>
            <Button className="banner-button">Get in Touch</Button>
          </div>
        </BlogBannerCard>
      </div>
    </div>
  );
}

export default Blog;
