import React from "react";
import Card from "../Card/Card";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Resume from "./resume.png";
import { useContext } from "react";
import { themeContext } from "../../Context";

const Services = () => {
  // context for dark mode
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>
      <div className="services" id="services">
        {/* left side */}
        <div className="awesome">
          {/* dark mode */}
          <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
          <span>services</span>
          <spane>
            Lorem ispum is simpley dummy text of printing of printing Lorem
            <br />
            ispum is simpley dummy text of printing
          </spane>
          <a href={Resume} download>
            <button className="button s-button">Download CV</button>
          </a>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
        {/* right side */}
        <div className="cards">
          <div style={{ left: "14rem" }}>
            <Card
              emoji={HeartEmoji}
              heading={"Design"}
              detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
            />
          </div>
          <div style={{ top: "12rem", left: "-4rem" }}>
            <Card
              emoji={Glasses}
              heading={"Developer"}
              detail={"HTML, CSS, Javascript, React, Node, Express, MongoDb"}
            />
          </div>
          <div style={{ top: "19rem", left: "12rem" }}>
            <Card
              emoji={Humble}
              heading={"UI/UX Desiginer"}
              detail={"lorem ux ui designer"}
            />
          </div>
          <div
            className="blur s-blur2"
            style={{ background: "var(--purple)" }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Services;
