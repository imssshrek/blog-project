import React, { useState, ChangeEvent } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import "./AdminEditor.css";
import axios from "axios";

const AdminEditor = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [categoryId, setCategoryId] = useState<number>(1);

  const handleContentChange = (value: string) => {
    setContent(value);
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSubmit = () => {
    const newPost = {
      title,
      content,
      categoryLarge: "testLarge",
      categorySmall: "testSmall",
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

  // useEffect(() => {
  //   console.log(title, content);
  // }, [title, content]);

  return (
    <div className="admin-editor-container">
      <div className="admin-editor">
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={handleTitleChange}
        />
        <ReactQuill value={content} onChange={handleContentChange} />
        <input type="text" placeholder="hashtag" />
        <button onClick={handleSubmit}>등록</button>
      </div>
    </div>
  );
};

export default AdminEditor;
