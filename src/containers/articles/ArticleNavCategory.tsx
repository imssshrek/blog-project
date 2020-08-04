import React, { useEffect, useState } from "react";
import axios from "axios";
import createCleanObjectFromArray from "../../modules/createCleanObjectFromArray";
import { Plus, Minus } from "react-feather";

import "./ArticleNavCategory.css";

const ArticleNavCategory = () => {
  const [category, setCategory] = useState<any>({});

  useEffect(() => {
    axios.get("/post/category").then(response => {
      const newCategory = createCleanObjectFromArray(response.data);
      setCategory({ ...newCategory });
    });
  }, []);

  const CategoryList = Object.keys(category).map(key => (
    <ul className="list-large">
      <li key={key}>
        <Plus size={18} strokeWidth={1} />
        {key}
      </li>
      {category[key] && (
        <ul className="list-small">
          {category[key].map((categorySmall: any) => (
            <li>{categorySmall}</li>
          ))}
        </ul>
      )}
    </ul>
  ));

  return (
    <div className="article-nav-category-container">
      <h1>카테고리</h1>
      <div className="article-nav-category-list">
        {CategoryList}
        {/* <li>
            <Plus size={18} strokeWidth={1} />
            {categoryObject.categoryLarge}
          </li>
          <li style={{ fontWeight: 500 }}>
            <Minus size={18} strokeWidth={2} />
            {categoryObject.categoryLarge}
          </li>
          <ul className="list-small">
            <li>{categoryObject.categorySmall}</li>
            <li>{categoryObject.categorySmall}</li>
            <li>{categoryObject.categorySmall}</li>
          </ul>
          <li>
            <Plus size={18} strokeWidth={1} />
            {categoryObject.categoryLarge}
          </li>
          <li>
            <Plus size={18} strokeWidth={1} />
            {categoryObject.categoryLarge}
          </li> */}
      </div>
    </div>
  );
};

export default ArticleNavCategory;
