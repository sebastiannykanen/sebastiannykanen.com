import React from "react";

function About(props) {
  return (
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
        moment, I have base knowledge in HTML, CSS, Javascript and React. Under
        the "projects" section you can find my completed projects, but for a
        closer look at my past and current projects, check out my{" "}
        <a className="githubLink" href="https://github.com/sebastiannykanen">
          GitHub
        </a>{" "}
        page.
      </h1>
      <div></div>
    </div>
  );
}

export default About;
