import React from "react";

function About(props) {
  return (
    <div id="About-main">
      <div></div>
      <img
        alt="Picture of Sebastian Nykänen"
        id="profile-picture"
        src="/profilepicture.jpeg"
      />
      <h1 id="AboutMe">
        Hello, my name is Sebastian. I'm an aspiring web developer living in
        Helsinki, Finland. I studied Industrial Engineering and Management in
        Vasa, but now my goal is to become a self taught programmer. As of this
        moment, I have base knowledge in HTML, CSS, Javascript and React.
      </h1>
      <div></div>
    </div>
  );
}

export default About;
