import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
const Contact = () => {
  // for dark mode
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  //for email js

  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_11a0svl",
        "template_mde4e3m",
        form.current,
        "f_UGPIusihwKr0UBO"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div className="contact-form" id="contact">
        {/* left side copy and paste from work section */}
        <div className="w-left">
          <div className="awesome">
            {/* darkMode */}
            <span style={{ color: darkMode ? "white" : "" }}>Get in Touch</span>
            <span>Contact me</span>
            <div
              className="blur s-blur1"
              style={{ background: "#ABF1FF94" }}
            ></div>
          </div>
        </div>
        {/* right side form */}
        <div className="c-right">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="user_name"
              className="user"
              placeholder="Virat Kohli"
            />
            <input
              type="text"
              name="user_phone"
              className="user"
              placeholder="+977 98XXXXXXX"
            />
            <input
              type="email"
              name="user_email"
              className="user"
              placeholder="example123@gmail.com"
            />
            <textarea name="message" className="user" placeholder="Message" />
            <input type="submit" value="Send" className="button" />
            <span>{done && "Thanks for Contacting me"}</span>
            <div
              className="blur c-blur1"
              style={{ background: "var(--purple)" }}
            ></div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
