import React from "react";
import Button from "@material-ui/core/Button";
import { HeadingComponent } from "./common/TextComponent";
import blogStyles from "../styles/Blog.module.css";
import BlogsCard from "./common/BlogsCard";
import team from "./constant";

function Blogs() {
  return (
    <div className={blogStyles.container}>
      <HeadingComponent
        text={"Blog & Announcements"}
        componentStyle={blogStyles.header}
      />
      <div className={blogStyles.blogContainer}>
        <BlogsCard>
          <div className={blogStyles.blogHeadingContent}>
            <p className={blogStyles.blogType}>Podcasts</p>
            <p className={blogStyles.blogDate}>14th May</p>
            <div className={blogStyles.blogStar}>
              <p className={blogStyles.blogStarContent}>93</p>
            </div>
          </div>
          <div>
            <h1 className={blogStyles.blogTitle}>
              An app for tracking sleep without pain and crutches is worth a try
            </h1>
          </div>
          <p className={blogStyles.blogDuration}>-2hr 15mins</p>
        </BlogsCard>
        {team.blogs.map((blogContent) => (
          <div className={blogStyles.alignCard}>
            <BlogsCard>
              <div>
                <img
                  src={blogContent.image}
                  alt=""
                  className={blogStyles.blogImg}
                />
              </div>
              <div className={blogStyles.blogHeadingContent}>
                <p className={blogStyles.blogType}>{blogContent.type}</p>
                <p className={blogStyles.blogDate}>{blogContent.date}</p>
                <div className={blogStyles.blogStar}>
                  <p className={blogStyles.blogStarContent}>
                    {blogContent.stars}
                  </p>
                </div>
              </div>
              <div>
                <h2 className={blogStyles.blogSubTitle}>
                  {blogContent.subTitle}
                </h2>
                <p className={blogStyles.blogDecs}>{blogContent.desc}</p>
              </div>
              <p className={blogStyles.nextAction}>{blogContent.next}</p>
            </BlogsCard>
          </div>
        ))}
      </div>
      <div className={blogStyles.banner}>
        <h1 className={blogStyles.bannerDesc}>
          Ready to work with <br /> Tezos India?
        </h1>
        <Button className={blogStyles.bannerBtn}>Get In Touch</Button>
      </div>
    </div>
  );
}

export default Blogs;
