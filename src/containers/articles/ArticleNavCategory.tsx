import React, { useEffect, useState } from "react";
import axios from "axios";
import arrayToCleanObject from "../../modules/arrayToCleanObject";

import "./ArticleNavCategory.css";
import NavCategory from "../../components/NavCategory";

const ArticleNavCategory = () => {
  const [category, setCategory] = useState<any>([]);

  useEffect(() => {
    axios
      .get("/post/category")
      .then(response => {
        setCategory(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const CategoryList = category.map((category: any) => {
    return (
      <NavCategory
        largeCategory={category.category}
        smallCategory={category.SubCategories}
      />
    );
  });

  return (
    <div className="article-nav-category-container">
      <h1>카테고리</h1>
      <div className="article-nav-category-list">{CategoryList}</div>
    </div>
  );
};

export default ArticleNavCategory;
