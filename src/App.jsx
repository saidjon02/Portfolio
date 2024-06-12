import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import AddElement from "./Component/AddElement";
import AddList from "./Component/AddList";
import Sites from "./Component/Sites";
import Talk from "./Component/Talk";
import Saidjon from "./Component/Saidjon";
import 'boxicons'
import Scardlist from "./Component/scardlist";
import About from "./Component/About";
import AOS from "aos";
import Contact from "./Component/Contact";
AOS.init({
  offset: 100,
  duration: 500,
  easing: "ease-in-sine",
})
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
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
    </div>
  );
}

export default App;
