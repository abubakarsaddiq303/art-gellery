import React, { useState } from "react";
import "./Contact.css";

import { useContext } from "react";
import { ThemeContext } from "./contexts/theme";
import emailjs from "emailjs-com";

function Contact() {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [subject, setsubject] = useState("");
  const [message, setmessage] = useState("");

  const handleFirstname = (e) => {
    setfirstname(e.target.value);
  };
  const handleLastname = (e) => {
    setlastname(e.target.value);
  };
  const handleSubject = (e) => {
    setsubject(e.target.value);
  };
  const handleMessage = (e) => {
    setmessage(e.target.value);
  };

  console.log(firstname);
  console.log(lastname);
  console.log(subject);
  console.log(message);

  const [{ isDark }, toggleTheme] = useContext(ThemeContext);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_s4vjtzo",
        "template_q9n8dbt",
        e.target,
        "user_hUJ3EoRqDIN2O1jfXZqdo"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));

    window.location.reload();
  }

  return (
    <div className={isDark ? "ContactDark" : "Contact"}>
      <h1 className={isDark ? "headingDark" : "heading"}>Contact Me</h1>
      <p className={isDark ? "paragraphDark" : "paragraph"}>
        We’re here to help and answer any question you might have.
        <br /> We look forward to hearing from you
        <br /> 🙂
      </p>
      <div className="ContactRow">
        <div class="ContactmeLeft">
          <form
            for="fname"
            style={{ display: "flex", color: "#9d9ca2", flexWrap: "wrap" }}
            onSubmit={sendEmail}
          >
            <label>
              <strong style={{ color: "#B0B5C6" }}>Full Name</strong>
            </label>
            <input
              input
              type="text"
              id="fname"
              name="fullname"
              placeholder=""
              onChange={handleFirstname}
            />

            <label for="fname" style={{ display: "flex", color: "#9d9ca2" }}>
              <strong style={{ color: "#B0B5C6" }}>Email</strong>
            </label>
            <input
              input
              type="email"
              id="lname"
              name="user_email"
              placeholder=""
              onChange={handleLastname}
            />

            <label for="fname" style={{ display: "flex", color: "#9d9ca2" }}>
              <strong style={{ color: "#B0B5C6" }}> Subject </strong>
            </label>
            <input
              input
              type="text"
              id="subject"
              name="Subject"
              placeholder=""
              onChange={handleSubject}
            />

            <label for="fname" style={{ display: "flex", color: "#9d9ca2" }}>
              <strong style={{ color: "#B0B5C6" }}> Your Message</strong>
            </label>
            <textarea
              input
              type="text"
              id="subject"
              name="message"
              placeholder=""
              style={{ height: "8rem" }}
              onChange={handleMessage}
            />
            <button className="Sendbtn" type="submit" style={{}}>
              sent
            </button>
          </form>
        </div>

        <div class="ContactmeRight">
          <label for="fname" style={{ display: "flex" }}>
            <strong style={{ color: "#c7a09d" }}> Email </strong>
          </label>

          <p
            href="abubakar.saddiq303@gmail.com"
            style={{ display: "flex", color: "#afafb1" }}
          >
            abubakar.saddiq303@gmail.com
          </p>

          {/* <div className="line"></div> */}
          <label for="fname" style={{ display: "flex", paddingTop: "3rem" }}>
            <strong style={{ color: "#c7a09d" }}> Phone</strong>
          </label>
          <p>
            <p
              href="tel:+923332580666"
              style={{ display: "flex", color: "#afafb1" }}
            >
              +923332580666
            </p>
          </p>
          {/* <div className="line"></div> */}
          <label for="fname" style={{ display: "flex", paddingTop: "3rem" }}>
            <strong style={{ color: "#c7a09d" }}> Adress </strong>
          </label>
          <p>
            <p
              href="I-10/1 Islamabad Pakistan"
              style={{ display: "flex", color: "#afafb1" }}
            >
              I-10/1 Islamabad Pakistan
            </p>
          </p>
          {/* <div className="line"></div> */}
        </div>
      </div>
    </div>
  );
}

export default Contact;
