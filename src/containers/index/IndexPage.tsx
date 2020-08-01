import React from "react";

import Header from "./Header";
import Projects from "./Projects";
import Articles from "./Articles";
import SectionTitle from "../../components/SectionTitle";

const IndexPage = () => {
  return (
    <div>
      <Header />
      <section className="project-section">
        <SectionTitle title={"프로젝트"} more={"자세히 보기"} url={"/"} />
        <Projects />
      </section>
      <hr />
      <section className="article-section">
        <SectionTitle title={"최신 글"} more={"더 보기"} url={"/articles"} />
        <Articles />
      </section>
      <hr />
    </div>
  );
};

export default IndexPage;
