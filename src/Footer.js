import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div id="App-footer">
      <Link to="/projects">
        <h1>projects</h1>
      </Link>
    </div>
  );
}

export default Footer;
