import React from "react";
// import "./App.css";
import { SocialIcon } from "react-social-icons";

function Sidebar(props) {
  return (
    <div id="App-sidebar" className="Sidebar-icons">
      <SocialIcon url="https://github.com/sebastiannykanen" />
      <SocialIcon url="https://www.linkedin.com/in/sebastiannykanen/" />
      <SocialIcon url="https://www.instagram.com/sebastian.nykanen/" />
    </div>
  );
}

export default Sidebar;
