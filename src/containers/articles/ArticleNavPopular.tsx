import React from "react";

import "./ArticleNavPopular.css";
import PopularPostCard from "./PopularPostCard";

const ArticleNavPopular = () => {
  const postArray: any = [
    {
      id: 1,
      title: "Lorem Ipsum",
      tags: ["#JavaScript", "#TypeScript"],
      date: "2020. 7. 30",
    },
    {
      id: 2,
      title: "Lorem Ipsum",
      tags: ["#JavaScript", "#TypeScript"],
      date: "2020. 7. 30",
    },
    {
      id: 3,
      title: "Lorem Ipsum",
      tags: ["#JavaScript", "#TypeScript"],
      date: "2020. 7. 30",
    },
    {
      id: 4,
      title: "Lorem Ipsum",
      tags: ["#JavaScript", "#TypeScript"],
      date: "2020. 7. 30",
    },
    {
      id: 5,
      title: "Lorem Ipsum",
      tags: ["#JavaScript", "#TypeScript"],
      date: "2020. 7. 30",
    },
  ];

  return (
    <div className="article-nav-popular-container">
      <h1>인기 포스트</h1>
      {postArray.map(
        (
          post: { id: number; title: string; tags: string; date: string },
          i: number
        ) => (
          <PopularPostCard
            key={post.id}
            index={i + 1}
            title={post.title}
            tags={post.tags}
            date={post.date}
          />
        )
      )}
    </div>
  );
};

export default ArticleNavPopular;
