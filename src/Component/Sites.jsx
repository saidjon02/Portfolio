import React from "react";
import not from "../../imgs/not.png";
import { Link } from "react-router-dom";
import Fetch from "./Fetch";
function Sites() {
  const { site } = Fetch("https://5b4fe1198f106fc2.mokky.dev/sites");
  return (
    <div className="Sites mtt">
      <div className="site container">
        <div className="site-row">
          <h2 className="com-title">My Sites</h2>
          <Link to={"/"}><button className="com-btn">Back to Home</button></Link>
        </div>
        <div className="sites">
          {site &&
            site.map((e) => {
              return (
                <div className="site-row">
                  <img src={not} alt="" />
                  <div className="site-box">
                    <h2 className="sites-title">{e.title}</h2>
                    <p className="sites-text">
                      The main goal of this project is to educate new students
                      who are just getting into web programming, what
                      technologies they should learn, what they will encounter
                      along the way, and what skills and devices they will need.
                    </p>
                    <Link to={e.link} target="_blank">
                      <button className="com-btn fz">Open</button>
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Sites;
