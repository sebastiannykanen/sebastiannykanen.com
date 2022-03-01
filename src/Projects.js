import React from "react";
import AnimatedPage from "./AnimatedPage";
// import "./App.css";

function Projects(props) {
  return (
    <AnimatedPage>
      <div id="Projects-main">
        <div className="project-card card1">
          <a href="https://weather-app.sebastiannykanen.com/">
            <h2>React Weather App</h2>
          </a>
        </div>
        <div className="project-card card2">
          <a href="https://weather-app.sebastiannykanen.com/">
            <h2>Project</h2>
          </a>
        </div>
        <div className="project-card card3">
          <a href="https://weather-app.sebastiannykanen.com/">
            <h2>Project</h2>
          </a>
        </div>
      </div>
    </AnimatedPage>
  );
}

export default Projects;
