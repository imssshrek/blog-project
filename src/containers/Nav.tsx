import React from "react";
import { Link } from "react-router-dom";
import {
  Code,
  Codepen,
  Edit2,
  User,
  Instagram,
  GitHub,
  Search,
} from "react-feather";

import "./Nav.css";

const SearchBlock = () => {
  return (
    <div className="nav-search">
      <Search size={18} color="white"></Search>
      <input type="text" placeholder="검색" />
    </div>
  );
};

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-logo">
          <Link to={"/"}>
            <Code size={24} />
            <h1>개발새발</h1>
          </Link>
        </div>
        <div className="nav-link">
          <Link to={"/"}>
            <Codepen size={18} />
            <h1>프로젝트</h1>
          </Link>
          <Link to={"/articles"}>
            <Edit2 size={18} />
            <h1>블로그</h1>
          </Link>
          <Link to={"/"}>
            <User size={18} />
            <h1>소개</h1>
          </Link>
          <Link to={"/"}>
            <Instagram className="nav-icon" size={24} />
          </Link>
          <Link to={"/"}>
            <GitHub className="nav-icon" size={24} />
          </Link>
          <h1>
            <SearchBlock />
          </h1>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
