import React from "react";
import "./ProjectCard.css";

interface IProps {
  title: string;
}

const ProjectCard = () => {
  return (
    <div className="project-card-container">
      <h1>제목</h1>
      <p>자세히보기</p>
    </div>
  );
};

export default ProjectCard;
