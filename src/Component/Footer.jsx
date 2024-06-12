import React from "react";
import footlogo from "../../imgs/Saidjon. (1).png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="Footer mtt t1"  data-aos="fade-down">
      <div className=" container ">
        <img src={footlogo} alt="" className="foot-img t1"  data-aos="fade-down" />
        <p className="foot-text t2"  data-aos="fade-down">
          Hello, my name is Saidjon, I am interested in programming. I have been
          in the programming industry since 2021.
        </p>
        <Link to={"/talk"}>
          <button className="foot-btns1" >Comments</button>
        </Link>
        <Link to={"/about"}>
          <button className="foot-btns2" >My sites</button>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
