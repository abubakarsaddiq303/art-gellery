import React, { useState } from "react";
import "./Contact.css";

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
  const handleSubmit = (e) => {
    alert(`${firstname} ${lastname} ${subject} ${message}`);
  };

  console.log(firstname);
  console.log(lastname);
  console.log(subject);
  console.log(message);
  return (
    <div className="Contact">
      <h1>Contact Me</h1>
      <p>
        We’re here to help and answer any question you might have.
        <br /> We look forward to hearing from you
        <br /> 🙂
      </p>
      <div className="ContactRow">
        <div class="ContactmeLeft">
          <form onSubmit={handleSubmit}>
            <label for="fname" style={{ display: "flex", color: "#9d9ca2" }}>
              <strong> First Name</strong>
            </label>
            <input
              input
              type="text"
              id="fname"
              name="firstname"
              placeholder=""
              onChange={handleFirstname}
            />

            <label for="fname" style={{ display: "flex", color: "#9d9ca2" }}>
              <strong>Last Name</strong>
            </label>
            <input
              input
              type="text"
              id="lname"
              name="lastname"
              placeholder=""
              onChange={handleLastname}
            />

            <label for="fname" style={{ display: "flex", color: "#9d9ca2" }}>
              <strong> Subject </strong>
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
              <strong> Your Message</strong>
            </label>
            <input
              input
              type="text"
              id="subject"
              name="Subject"
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
