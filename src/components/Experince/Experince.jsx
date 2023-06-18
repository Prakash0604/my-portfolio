import React, { useContext } from "react";
import "./Experince.css";
import { themeContext } from "../../Context";

const Experince = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <div className="experince">
        <div className="achivement">
          <div
            className="circle"
            style={{ color: darkMode ? "var(--orange)" : "" }}
          >
            1+
          </div>
          <span style={{ color: darkMode ? "white" : "" }}>years</span>
          <span>Experince</span>
        </div>
        <div className="achivement">
          <div
            className="circle"
            style={{ color: darkMode ? "var(--orange)" : "" }}
          >
            10+
          </div>
          <span style={{ color: darkMode ? "white" : "" }}>completed</span>
          <span>Projects</span>
        </div>
        <div className="achivement">
          <div
            className="circle"
            style={{ color: darkMode ? "var(--orange)" : "" }}
          >
            1
          </div>
          <span style={{ color: darkMode ? "white" : "" }}>Companies</span>
          <span>Work</span>
        </div>
      </div>
    </>
  );
};

export default Experince;
