import React from "react";
// import "./App.css";

function Projects(props) {
  return (
    <div id="Projects-main">
      <div className="project-card card1">
        <a href="https://to-do-list.sebastiannykanen.com/">
          <h2>React To Do List</h2>
        </a>
      </div>
      <div className="project-card card2">
        <a href="https://weather-app.sebastiannykanen.com/">
          <h2>React Weather App</h2>
        </a>
      </div>
      <div className="project-card card3">
        <a href="https://react-calculator.sebastiannykanen.com/">
          <h2>React Calculator</h2>
        </a>
      </div>
      <div className="project-card card4">
        <a href="https://to-do-list-v2.sebastiannykanen.com/">
          <h2>To do List with Firestore database</h2>
        </a>
      </div>
    </div>
  );
}

export default Projects;
