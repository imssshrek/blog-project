import React from "react";

import "./PopularPostCard.css";

interface IProps {
  index: number;
  title: string;
  tags: string;
  date: string;
}

const PopularPostCard = (props: IProps) => {
  return (
    <div className="popular-post-card-container">
      <h1 className="popular-post-card-rank">{props.index}</h1>
      <div className="popular-post-card-content">
        <div className="card-title">{props.title}</div>
        <div className="card-info">
          {props.tags[0]} / {props.date}
        </div>
      </div>
    </div>
  );
};

export default PopularPostCard;
