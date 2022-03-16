import React from "react";
import { Link } from "react-router-dom";

function Navigation(props) {
  return (
    <div id="navigation-links">
      <></>
      <Link to="/about">
        <h1>about</h1>
      </Link>
      <Link to="/projects">
        <h1>projects</h1>
      </Link>
      <Link to="/contact">
        <h1>contact me</h1>
      </Link>
    </div>
  );
}

export default Navigation;
