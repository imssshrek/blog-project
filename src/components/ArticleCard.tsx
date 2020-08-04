import React from "react";
import "./ArticleCard.css";

interface IProps {
  title: string;
  content: string | boolean;
  hashtags: string[];
}

const ArticleCard = (props: IProps) => {
  return (
    <div className="article-card-container">
      <div className="text-block">
        <h1>{props.title}</h1>
        <p>{props.content} ...</p>
        {props.hashtags.map((hashtag, i) => (
          <h3 key={i}>{hashtag}</h3>
        ))}
      </div>
      <div className="thumbnail-block"></div>
    </div>
  );
};

export default ArticleCard;
