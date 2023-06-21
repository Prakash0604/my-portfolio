import React from "react";
import "./Navbar.css";
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <>
      <div className="n-wrapper" id="Navbar">
        <div className="n-left">
          <div className="n-name">Prashant Kr</div>
          <Toggle />
        </div>
        <div className="n-right">
          <div className="n-list">
            <ul style={{ listStyleType: "none" }}>
              <li>
                <Link to="Navbar" spy={true} smooth={true}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="services" spy={true} smooth={true}>
                  Serivces
                </Link>
              </li>
              <li>
                <Link to="works" spy={true} smooth={true}>
                  Experience
                </Link>
              </li>
            </ul>
          </div>
          <Link to="contact" spy={true} smooth={true}>
            <button className="button">Contact</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
