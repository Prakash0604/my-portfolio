import React from "react";
import "./Intro.css";
import Github from "../../img/Github.png";
import Linkedin from "../../img/linkedin.png";
import instagram from "../../img/instagram.png";
import vector1 from "../../img/Vector1.png";
import vector2 from "../../img/Vector2.png";
import man1 from "../../img/me.png";
import { useContext } from "react";
import { themeContext } from "../../Context";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

const Intro = () => {
  // transtion

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <div className="intro">
        <div className="i-left">
          <div className="i-name">
            <span style={{ color: darkMode ? "white" : "" }}>Hi! I Am</span>
            <span>Prashant Mahato</span>
            <span>
              MERN STACK Developer with level of experience in web development,
              producting the Quality work
            </span>
          </div>
          <a href="https://www.facebook.com/imkrprashant18/" target="_">
            <button className="button i-button">Hire</button>
          </a>

          {/* social media icons */}
          <div className="i-icons">
            <a href="https://github.com/imkrprashant18" target="__">
              <img src={Github} alt="" />
            </a>

            <a
              href="https://www.linkedin.com/in/prashant-kr-b4a5aa258/"
              target="_"
            >
              <img src={Linkedin} alt="" />
            </a>

            <a href="https://www.instagram.com/imkrprashant18/" target="_">
              <img src={instagram} alt="" />
            </a>
          </div>
        </div>
        <div className="i-right">
          <img src={vector1} alt="" />
          <img src={vector2} alt="" />
          <img src={man1} alt="" />
          <div
            className="blur"
            style={{
              background: "#C1F5FF",
              top: "17rem",
              width: "21rem",
              height: "11rem",
              left: "-9rem",
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Intro;
