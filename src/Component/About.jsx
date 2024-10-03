import React from "react";
import imgg from "../../imgs/hello.png";
import not1 from "../../imgs/HTML CSS.png";
import not2 from "../../imgs/JavaScript.png";
import not3 from "../../imgs/Bootstrap.png";
import not4 from "../../imgs/React.png";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
function About() {
  return (
    <div className="about-wrap">
      <Helmet>
        <title>About Saidjon</title>
        <meta
          name="description"
          content="Hello, my name is Saidjan. I am from Uzbekistan I am programming
              since 2021 because of my interest in programming."
              
        />
        <link rel="canonical" href="/about" />
      </Helmet>
      <div className="aboutt t1" data-aos="flip-up">
        <h2 className="about-title">About Me</h2>
      </div>
      <div className="me container">
        <div className="me-row">
          <div className="me-box t2" data-aos="fade-right">
            <img src={imgg} alt="" />
          </div>
          <div className="me-box t3" data-aos="fade-right">
            <h2 className="me-title">I'm Saidjon</h2>
            <p className="me-text">
              Hello, my name is Saidjan. I am from Uzbekistan I am programming
              since 2021 because of my interest in programming.
            </p>
            <Link to={"/alll"}>
              <button className="certificate">My Sites</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="cer container">
        <div className="comment-row">
          <h2 className="com-title t1" data-aos="fade-up-right">
            My Certificates
          </h2>
        </div>
        <div className="cer-row">
          <img
            src={not1}
            data-aos="fade-right"
            className="cer-imgs t2"
            alt=""
          />
          <img
            src={not2}
            data-aos="fade-right"
            className="cer-imgs t3"
            alt=""
          />
          <img
            src={not3}
            data-aos="fade-right"
            className="cer-imgs t4"
            alt=""
          />
          <img
            src={not4}
            data-aos="fade-right"
            className="cer-imgs t5"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default About;
