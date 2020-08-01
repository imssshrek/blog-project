import React from "react";
import "./ArticleCard.css";

interface IProps {
  title: string;
  content: string;
}

const ArticleCard = () => {
  return (
    <div className="article-card-container">
      <div className="text-block">
        <h1>제목</h1>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit. Exercitation veniam consequat sunt nostrud
          amet. Velit officia consequat duis enim velit mollit. Exercitation ...
        </p>
        <h3>#태그</h3>
        <h3>#뿅뿅</h3>
        <h3>#히히</h3>
      </div>
      <div className="thumbnail-block"></div>
    </div>
  );
};

export default ArticleCard;
