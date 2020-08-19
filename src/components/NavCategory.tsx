import React, { useState } from "react";
import { Plus, Minus } from "react-feather";

import "./NavCategory.css";

interface IProps {
  largeCategory: string;
  smallCategory: string[];
}

const NavCategory = (props: IProps) => {
  const [display, setDisplay] = useState(false);

  const handleClick = () => {
    setDisplay(!display);
  };

  return (
    <div className="article-nav-category-list">
      <ul className="list-large">
        <li>
          {display ? (
            <Minus size={18} strokeWidth={2} onClick={handleClick} />
          ) : (
            <Plus size={18} strokeWidth={1} onClick={handleClick} />
          )}
          <span
            style={display ? { fontWeight: 500 } : { fontWeight: "normal" }}
          >
            {props.largeCategory}
          </span>
          <ul
            className="list-small"
            style={display ? { display: "inherit" } : { display: "none" }}
          >
            {props.smallCategory.map((smallCategory: any) => {
              return <li>{smallCategory.subCategory}</li>;
            })}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default NavCategory;
