import React, { useContext } from "react";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";

import "./Works.css";
import { themeContext } from "../../Context";

const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <div className="works">
        {/* left side */}
        <div className="w-left">
          <div className="awesome">
            <span style={{ color: darkMode ? "white" : "" }}>
              Works for All these
            </span>
            <span>Brands & Clients</span>
            <spane>
              Working On Quasar Technology
              <br />
              Best Service Provider Based On Uk and Nepal.
            </spane>
            <a href="https://www.instagram.com/imkrprashant18/" target="_">
              <button className="button s-button">Hire Me</button>
            </a>
            <div
              className="blur s-blur1"
              style={{ background: "#ABF1FF94" }}
            ></div>
          </div>
        </div>
        <div className="w-right">
          <div className="w-mainCircle">
            <div className="w-secCircle">
              <img src={Upwork} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={Fiverr} alt="" />
            </div>

            {/* background circle */}
            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yellowCircle"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
