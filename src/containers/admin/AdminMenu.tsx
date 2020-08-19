import React from "react";
import { Edit } from "react-feather";
import { Link } from "react-router-dom";

import "./AdminMenu.css";

const AdminMenu = () => {
  return (
    <div className="admin-menu-container">
      <Link to="/adminwrite">
        <Edit size={24} color="#444444" />
      </Link>
    </div>
  );
};

export default AdminMenu;
