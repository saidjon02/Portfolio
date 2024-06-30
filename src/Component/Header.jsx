import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../imgs/Saidjon.png";
import "boxicons";

function Header() {
  const [pop, setPop] = useState(false);
  const cloase = ()=>{
    setPop(!pop)
  }
  return (
    <div className="header">
      <div className="header-row container">
        <div className="header-left">
          <Link to={"/"}>
            <img src={logo} className="logo" alt="" />
          </Link>
          <i class={pop? "bx bx-x":"bx bx-menu"} onClick={() => setPop(!pop)}></i>
        </div>
        <div className={pop? "header-right head-active":"header-right"}>
          <Link to={"/"} className="header-link">
            Home
          </Link>
          <Link to={"/about"} className="header-link">
            About Me
          </Link>
          <Link to={"/contact"} className="header-link">
            Contact Me
          </Link>
          <i class="bx bx-x" onClick={cloase}></i>
        </div>
      </div>
    </div>
  );
}

export default Header;
