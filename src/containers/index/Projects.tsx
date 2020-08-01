import React from "react";
import ProjectCard from "../../components/ProjectCard";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="main-project-list">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  );
};

export default Projects;
