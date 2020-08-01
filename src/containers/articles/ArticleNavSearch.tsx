import React from "react";
import { Search } from "react-feather";

import "./ArticleNavSearch.css";

const ArticleNavSearch = () => {
  return (
    <div className="article-nav-search-container">
      <div className="article-nav-search">
        <input type="text" placeholder="검색" />
        <Search size={20} color="#888888" />
      </div>
    </div>
  );
};

export default ArticleNavSearch;
