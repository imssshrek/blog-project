import React from "react";

import "./IndexPage.css";

import Header from "./Header";
import Projects from "./ProjectsSection";
import Articles from "./ArticlesSection";
import SectionTitle from "../../components/SectionTitle";
import AdminEditor from "../admin/AdminEditor";

const IndexPage = (props: any) => {
  console.log(props.history.location.pathname);
  return (
    <div className="index-page-container">
      <Header />
      <section className="article-section">
        <SectionTitle title={"최신 글"} more={"더 보기"} url={"/articles"} />
        <Articles />
      </section>
      <hr />
      <section className="project-section">
        <SectionTitle title={"프로젝트"} more={"자세히 보기"} url={"/"} />
        <Projects />
      </section>
      <hr />
      <AdminEditor />
    </div>
  );
};

export default IndexPage;
