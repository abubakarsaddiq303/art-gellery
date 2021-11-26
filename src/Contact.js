import React, { useState, useEffect } from "react";
import "./Contact.css";

function Contact() {
  const [firstname, setfirstname] = useState();
  const [lastname, setlastname] = useState();
  const [subject, setsubject] = useState();
  const [message, setmessage] = useState();

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
  const handleSubmit = (e) => {
    alert(`${firstname} ${lastname} ${subject} ${message}`);
  };

  console.log(firstname);
  console.log(lastname);
  console.log(subject);
  console.log(message);
  return (
    <div className="Contact">
      <h1>Contact US</h1>
      <p>
        We’re here to help and answer any question you might have.
        <br /> We look forward to hearing from you
        <br /> 🙂
      </p>
      <div className="row">
        <div class="column">
          <form onSubmit={handleSubmit}>
            <label for="fname" style={{ display: "flex" }}>
              <strong> First Name</strong>
            </label>
            <input
              input
              type="text"
              id="fname"
              name="firstname"
              placeholder="FirstName.."
              onChange={handleFirstname}
            />

            <label for="fname" style={{ display: "flex" }}>
              <strong>Last Name</strong>
            </label>
            <input
              input
              type="text"
              id="lname"
              name="lastname"
              placeholder="LastName.."
              onChange={handleLastname}
            />

            <label for="fname" style={{ display: "flex" }}>
              <strong> Subject </strong>
            </label>
            <input
              input
              type="text"
              id="subject"
              name="Subject"
              placeholder="Subject..."
              onChange={handleSubject}
            />

            <label for="fname" style={{ display: "flex" }}>
              <strong> Your Message</strong>
            </label>
            <input
              input
              type="text"
              id="subject"
              name="Subject"
              placeholder=""
              style={{ height: "12rem" }}
              onChange={handleMessage}
            />
            <button
              type="submit"
              style={{
                width: "4rem",
                height: "2rem",
                backgroundColor: "skyblue",
                border: "none",
                marginRight: "24rem",
              }}
            >
              sent
            </button>
          </form>
        </div>

        <div class="column">
          <label for="fname" style={{ display: "flex" }}>
            <strong style={{ color: "red" }}> Email </strong>
          </label>
          <p>
            <a href="abubakar.saddiq303@gmail.com" style={{ display: "flex" }}>
              abubakar.saddiq303@gmail.com
            </a>
          </p>
          {/* <div className="line"></div> */}
          <label for="fname" style={{ display: "flex", paddingTop: "3rem" }}>
            <strong style={{ color: "red" }}> Phone</strong>
          </label>
          <p>
            <a href="tel:+923332580666" style={{ display: "flex" }}>
              +923332580666
            </a>
          </p>
          {/* <div className="line"></div> */}
          <label for="fname" style={{ display: "flex", paddingTop: "3rem" }}>
            <strong style={{ color: "red" }}> Adress </strong>
          </label>
          <p>
            <p href="I-10/1 Islamabad Pakistan" style={{ display: "flex" }}>
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
