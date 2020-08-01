import React from "react";
import { Plus, Minus } from "react-feather";

import "./ArticleNavCategory.css";

const ArticleNavCategory = () => {
  return (
    <div className="article-nav-category-container">
      <h1>카테고리</h1>
      <div className="article-nav-category-list">
        <ul className="list-large">
          <li>
            <Plus size={18} strokeWidth={1} />
            대분류
          </li>
          <li style={{ fontWeight: 500 }}>
            <Minus size={18} strokeWidth={2} />
            대분류
          </li>
          <ul className="list-small">
            <li>소분류</li>
            <li>소분류</li>
            <li>소분류</li>
          </ul>
          <li>
            <Plus size={18} strokeWidth={1} />
            대분류
          </li>
          <li>
            <Plus size={18} strokeWidth={1} />
            대분류
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ArticleNavCategory;
