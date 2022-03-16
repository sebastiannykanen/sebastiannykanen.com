import React from "react";
import { Link } from "react-router-dom";

function NavigationMobile(props) {
  return (
    <div id="navigation-links-mobile">
      <></>
      <Link to="/about">
        <h1 onClick={() => props.setIsOpen(false)}>about</h1>
      </Link>
      <Link to="/projects">
        <h1 onClick={() => props.setIsOpen(false)}>projects</h1>
      </Link>
      <Link to="/contact">
        <h1 onClick={() => props.setIsOpen(false)}>contact me</h1>
      </Link>
    </div>
  );
}

export default NavigationMobile;
