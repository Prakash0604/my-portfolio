import { useContext } from "react";
import "./App.css";
import Contact from "./components/Contact/Contact";
import Experince from "./components/Experince/Experince";
import Footer from "./components/Footer/Footer";
import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import Works from "./components/Works/Works";
import { themeContext } from "./Context";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <div
        className="App"
        style={{
          background: darkMode ? "black" : "",
          color: darkMode ? "white" : "",
        }}
      >
        <Navbar />
        <Intro />
        <Services />
        <Experince />
        <Works />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
