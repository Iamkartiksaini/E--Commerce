import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";

function NavBar() {
  return (
    <div className="contest-navBar">
      <NavLink to="/supersme/password"> General </NavLink>
      <NavLink to="/supersme/sC"> Contest </NavLink>
      <NavLink to="/supersme/prize"> Prize </NavLink>
      <NavLink to="/supersme/page"> Assign </NavLink>
    </div>
  );
}

export default NavBar;
