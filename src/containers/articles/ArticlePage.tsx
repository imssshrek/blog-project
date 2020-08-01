import React from "react";
import "./ArticlePage.css";
import ArticleNavSearch from "./ArticleNavSearch";
import ArticleNavCategory from "./ArticleNavCategory";
import ArticleCard from "../../components/ArticleCard";
import ArticleNavTags from "./ArticleNavTags";
import ArticleNavPopular from "./ArticleNavPopular";

const ArticlePage = () => {
  return (
    <div className="article-page-container">
      <nav className="article-page-side-nav">
        <ArticleNavSearch />
        <ArticleNavCategory />
        <ArticleNavTags />
        <ArticleNavPopular />
      </nav>
      <main className="article-page-main">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </main>
    </div>
  );
};

export default ArticlePage;
