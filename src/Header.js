import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div id="App-header">
      <Link to="/about">
        <h1>about</h1>
      </Link>
    </div>
  );
}

export default Header;
