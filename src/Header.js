import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div id="App-header">
      <Link to="/">
        <img alt="site logo" id="logo" src="/logo.png" />
      </Link>
      <Link to="/about">
        <h1>about</h1>
      </Link>
    </div>
  );
}

export default Header;
