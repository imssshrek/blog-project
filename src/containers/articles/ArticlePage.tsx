import React, { useEffect, useState } from "react";
import { stripHtmlTags } from "../../modules/stripHtmlTags";
import axios from "axios";

import "./ArticlePage.css";
import ArticleNavSearch from "./ArticleNavSearch";
import ArticleNavCategory from "./ArticleNavCategory";
import ArticleCard from "../../components/ArticleCard";
import ArticleNavTags from "./ArticleNavTags";
import ArticleNavPopular from "./ArticleNavPopular";
import SectionTitle from "../../components/SectionTitle";

const hashtags = ["#헤헤", "#호호", "#뿅뿅"];

const ArticlePage = (props: any) => {
  console.log(props.history.location.pathname);
  const [post, setPost] = useState<any>([]);

  useEffect(() => {
    axios
      .get("/post")
      .then(response => {
        setPost(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  return (
    <div className="article-page-container">
      <nav className="article-page-side-nav">
        <ArticleNavSearch />
        <ArticleNavCategory />
        <ArticleNavTags />
        <ArticleNavPopular />
      </nav>
      <main className="article-page-main">
        <SectionTitle title="글 목록" more="최신순" url="/articles" />
        {post.map((post: any) => (
          <ArticleCard
            key={post.id}
            title={post.title}
            content={stripHtmlTags(post.content)}
            hashtags={hashtags}
          />
        ))}
      </main>
    </div>
  );
};

export default ArticlePage;
