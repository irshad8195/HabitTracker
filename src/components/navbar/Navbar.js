import React from "react";
import { Link, NavLink } from "react-router-dom";
import Class from "./Navbar.module.css"

const Navbar = () => {
  return (
    <div className={Class.nav}>
     <h1 > TRACK EACH HABIT EVERYDAY </h1>
<div>
   <Link className={Class.link} to={"/"}>Home</Link>
  <Link className={Class.link} to={"dashboard"} > Dashboard </Link>
  </div>
    </div>
  );
};

export default Navbar;