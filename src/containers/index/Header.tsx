import React from "react";

import "./Header.css";
import { ReactComponent as HeaderSVG } from "./header-scene.svg";

const Header = () => {
  return (
    <div className="header-container">
      <header>
        <HeaderSVG width="500px" />
        <span className="header-title">
          <span className="header-title-small">게을러서 만들어버린</span>
          <br />
          개발새발<span className="header-title-light">블로그</span>
        </span>
      </header>
    </div>
  );
};

export default Header;
