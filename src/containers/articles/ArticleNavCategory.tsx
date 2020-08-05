import React, { useEffect, useState } from "react";
import axios from "axios";
import createCleanObjectFromArray from "../../modules/createCleanObjectFromArray";

import "./ArticleNavCategory.css";
import NavCategory from "../../components/NavCategory";

const ArticleNavCategory = () => {
  const [category, setCategory] = useState<any>({});

  useEffect(() => {
    axios.get("/post/category").then(response => {
      const newCategory = createCleanObjectFromArray(response.data);
      setCategory(newCategory);
    });
  }, []);

  const CategoryList = Object.keys(category).map(key => (
    <NavCategory largeCategory={key} smallCategory={category[key]} />
  ));

  return (
    <div className="article-nav-category-container">
      <h1>카테고리</h1>
      <div className="article-nav-category-list">{CategoryList}</div>
    </div>
  );
};

export default ArticleNavCategory;
