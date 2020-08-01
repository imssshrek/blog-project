import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "react-feather";

import "./SectionTitle.css";

interface IProps {
  title: string;
  more: string;
  url: string;
}

const SectionTitle = (props: IProps) => {
  return (
    <div className="section-title-container">
      <div className="section-title-title">
        <Link to={props.url}>{props.title}</Link>
        <ChevronRight size={24} />
      </div>
      <div className="section-title-more">
        <Link to={props.url}>{props.more}</Link>
      </div>
    </div>
  );
};

export default SectionTitle;
