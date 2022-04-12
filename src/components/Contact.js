import React from "react";
import Sidebar from "./Sidebar";
import emailjs from "emailjs-com";
import "../App.css";

function Contact(props) {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qe1eyxp",
        "template_hlucgl6",
        e.target,
        "d-Mj-d3rgjo45jFI5"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div id="Contact-main">
      <div className="contact-form">
        <form onSubmit={sendEmail}>
          <p>Interested in hiring me? Please contact me below!</p>
          <input type="text" id="name" name="name" placeholder="Name"></input>
          <br />
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
          ></input>
          <br />
          <textarea
            rows="3"
            cols="30"
            type="text"
            id="message"
            name="message"
            placeholder="Message"
          ></textarea>
          <br />
          <input type="submit" id="contact-submit" value="Submit"></input>
        </form>
      </div>
      <br />
      <h1>Connect with me 👇🏻</h1>
      <div>
        <Sidebar />
      </div>
    </div>
  );
}

export default Contact;
