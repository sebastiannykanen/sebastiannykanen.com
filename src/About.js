import React from "react";
import AnimatedPage from "./AnimatedPage";

function About(props) {
  return (
    <AnimatedPage>
      <div id="About-main">
        <div></div>
        <img
          width="40vh"
          alt="Sebastian Nykänen"
          id="profile-picture"
          src="/profilepicture.jpeg"
        />
        <h1 id="AboutMe">
          Hello, my name is Sebastian. I'm an aspiring web developer living in
          Helsinki, Finland. I studied Industrial Engineering and Management in
          Vasa, but my goal is to become a self taught programmer. As of this
          moment, I have base knowledge in HTML, CSS, Javascript and React.
        </h1>
        <div></div>
      </div>
    </AnimatedPage>
  );
}

export default About;
