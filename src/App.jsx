import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import Footer from "./Component/Footer";
import AddElement from "./Component/AddElement";
import AddList from "./Component/AddList";
import Sites from "./Component/Sites";
import Talk from "./Component/Talk";
import Saidjon from "./Component/Saidjon";
import "boxicons";
import Scardlist from "./Component/scardlist";
import About from "./Component/About";
import AOS from "aos";
import Contact from "./Component/Contact";
import logo from "../imgs/Saidjon.png";
AOS.init({
  offset: 100,
  duration: 500,
  easing: "ease-in-sine",
});
function App() {
  const [pop, setPop] = useState(false);
  return (
    <div>
      <BrowserRouter>
        <div className={pop ? "header activeMe" : "header"}>
          <div className="header-row container">
            <div className="header-left">
              <Link to={"/"}>
                <img src={logo} className="logo" alt="" />
              </Link>
            </div>
            <div className="header-right">
              <Link to={"/"} className="header-link">
                Home
              </Link>
              <Link to={"/about"} className="header-link">
                About Me
              </Link>
              <Link to={"/contact"} className="header-link">
                Contact Me
              </Link>
            </div>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="add" element={<AddElement />} />
          <Route path="alll" element={<Sites />} />
          <Route path="talk" element={<Talk />} />
          <Route path="im" element={<Saidjon />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/liist/:id" element={<AddList />} />
          <Route path="/linkk/:id" element={<Scardlist />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <i className={pop ? "bx bx-x apps" : "bx bx-menu apps"} onClick={() => setPop(!pop)}></i>
    </div>
  );
}

export default App;
