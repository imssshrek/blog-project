import React, { useState, ChangeEvent } from "react";
import ReactQuill from "react-quill";
import styled from "styled-components";

import "react-quill/dist/quill.snow.css";

import "./AdminEditor.css";
import axios from "axios";

const HashtagBlock = styled.span`
  font-size: 16px;
  padding: 4px 8px;
  background-color: #eeeeee;
  border-radius: 50px;
  margin-right: 8px;
`;

const AdminEditor = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [hashtag, setHashtag] = useState<string>("");
  const [hashtagList, setHashtagList] = useState<string[]>([]);
  const [categoryId, setCategoryId] = useState<number>(1);

  const handleContentChange = (value: string) => {
    setContent(value);
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleHashtagChange = (e: ChangeEvent<HTMLInputElement>) => {
    setHashtag(e.target.value);
  };

  const handleHashtagSubmit = () => {
    const newHashtagArr: any = [...hashtagList, hashtag];
    setHashtagList(newHashtagArr);
    console.log(hashtagList);
  };

  const handleSubmit = () => {
    const newPost = {
      title,
      content,
      categoryLarge: "testLarge",
      categorySmall: "testSmall",
      hashtagList,
    };
    axios
      .post("http://localhost:4000/post/", newPost)
      .then(response => {
        console.log(newPost);
        setTitle("");
        setContent("");
        const newCategoryId = categoryId + 1;
        setCategoryId(newCategoryId);
      })
      .catch(error => {
        console.log(newPost);
        console.error(error);
      });
  };

  return (
    <div className="admin-editor-container">
      <input
        className="admin-editor-title-input"
        type="text"
        placeholder="제목"
        value={title}
        onChange={handleTitleChange}
      />
      <div className="admin-editor">
        <ReactQuill value={content} onChange={handleContentChange} />
      </div>
      <div className="admin-editor-hashtag">
        <div className="hashtag-list">
          {hashtagList.map((hashtag, i) => (
            <HashtagBlock
              key={i}
              onClick={() => {
                const newHashtagArr = hashtagList.filter(
                  hashtag_ => hashtag_ !== hashtag
                );
                setHashtagList(newHashtagArr);
              }}
            >
              {hashtag}
            </HashtagBlock>
          ))}
        </div>
        <input
          type="text"
          placeholder="hashtag"
          className="admin-editor-hashtag-input"
          value={hashtag}
          onChange={handleHashtagChange}
        />
        <button onClick={handleHashtagSubmit}>추가</button>
      </div>
      <button onClick={handleSubmit}>등록</button>
    </div>
  );
};

export default AdminEditor;
