import React, { useEffect, useState } from "react";
import axios from "axios";
import { stripHtmlTags } from "../../modules/stripHtmlTags";

import ArticleCard from "../../components/ArticleCard";

const hashtags = ["#헤헤", "#호호", "#뿅뿅"];

const Articles = () => {
  const [post, setPost] = useState<any>([
    {
      id: 1,
      title: "title",
      content: "content",
    },
  ]);

  useEffect(() => {
    axios
      .get("/post/latest")
      .then(response => {
        setPost(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  return (
    <div>
      {post.map((post: any) => (
        <ArticleCard
          key={post.id}
          title={post.title}
          content={stripHtmlTags(post.content)}
          hashtags={hashtags}
        />
      ))}
    </div>
  );
};

export default Articles;
