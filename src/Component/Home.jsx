import React, { useEffect } from "react";
import Typed from "typed.js";
import img2 from "../../imgs/Man.png";
import img3 from "../../imgs/radius.png";
import i from "../../imgs/iii.png";
import site1 from "../../imgs/site1.png";
import site2 from "../../imgs/site2.png";
import site3 from "../../imgs/site3.png";
import Fetch from "./Fetch";
import { Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import Contact from "./Contact";

import "aos/dist/aos.css";

function Home() {
  const { comment } = Fetch("https://5b4fe1198f106fc2.mokky.dev/comment");

  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [" Programmer", " Designer", "Developer"],
      typeSpeed: 120,
      backDelay: 700,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="wrap">
      <div className="Homme ">
        <div className="home container">
          <div className="home-row">
            <div className="home-left">
              <h2 className="home-title t1" data-aos="fade-down">
                H<h2 className="gsp">i</h2> I'm Saidjon
              </h2>
              <h4 className="home-subtitle t2" data-aos="fade-down">
                <span className="text">I'm a </span>
                <span ref={el} />
              </h4>
              <p className="home-text t3" data-aos="fade-down">
                Hello, my name is Saidjon, I am interested in programming. I
                have been in the programming industry since 2021.
              </p>
              <div className="home-btn-row">
                <Link to={"/alll"}>
                  <div className="btnbox t4" data-aos="fade-down">
                    <button className="home-btn1">My sites</button>
                  </div>
                </Link>
                <Link to={"/about"}>
                  <div className="btnbox t6" data-aos="fade-right">
                    <button className="home-btn2">About Me</button>
                  </div>
                </Link>
              </div>
            </div>
            <div className="home-right">
              <img src={img2} className="t7" data-aos="fade-right" alt="" />
            </div>
          </div>
          <div className="home-row2">
            <div className="home-card t1" data-aos="fade-down">
              <h2 className="home-card-title">100%</h2>
              <p className="home-card-text">HTML</p>
            </div>
            <div className="home-card t2" data-aos="fade-down">
              <h2 className="home-card-title">100%</h2>
              <p className="home-card-text">CSS</p>
            </div>
            <div className="home-card t3" data-aos="fade-down">
              <h2 className="home-card-title">87%</h2>
              <p className="home-card-text">JavaScript</p>
            </div>
            <div className="home-card t4 bn" data-aos="fade-down">
              <h2 className="home-card-title">76%</h2>
              <p className="home-card-text">React JS</p>
            </div>
          </div>
        </div>
        <div className="About">
          <div className="about container">
            <div className="comment-row">
              <h2 className="com-title t1" data-aos="fade-up-right">
                Technologies
              </h2>
              <Link to={"/alll"}>
                <button className="com-btn t2" data-aos="fade-up-right">
                  My Sites
                </button>
              </Link>
            </div>
            <div className="about-roww ">
              <div className="card-anim t2" data-aos="fade-right">
                <div className="about-card">
                  <h2 className="about-card-title">HTML</h2>
                  <p className="about-card-text">
                    HTML (HyperText Markup Language) is the most basic building
                    block of the Web. HTML ensures the proper formatting of
                    content (text, images, video) so that your internet browser
                    can display them as intended.
                  </p>
                </div>
              </div>
              <div className="card-anim t3" data-aos="fade-right">
                {" "}
                <div className="about-card">
                  <h2 className="about-card-title">CSS</h2>
                  <p className="about-card-text">
                    Each element is a rectangular box. CSS leverages “the box
                    model” to control layout and design. An HTML element is
                    comprised of its content and the margins, borders, padding
                    surrounding it.
                  </p>
                </div>
              </div>
              <div className="card-anim t2" data-aos="fade-right">
                <div className="about-card">
                  <h2 className="about-card-title">Bootstrap</h2>
                  <p className="about-card-text">
                    Originally created by a designer and a developer at Twitter,
                    Bootstrap has become one of the most popular front-end
                    frameworks and open source projects in the world.
                  </p>
                </div>
              </div>
              <div className="card-anim t3" data-aos="fade-right">
                <div className="about-card">
                  <h2 className="about-card-title">React JS</h2>
                  <p className="about-card-text">
                    React is a JavaScript-based UI development library. Although
                    React is a library, not a language, it is widely used in web
                    development. The library first appeared in May 2013.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bgs">
        <div className="comments container">
          <div className="comment-row">
            <h2 className="com-title t1" data-aos="fade-up-right">
              Comments
            </h2>
            <Link to={"/add"}>
              <button className="com-btn t2" data-aos="fade-up-right">
                Add comment
              </button>
            </Link>
          </div>
          <div className="comment-row2">
            <Swiper
              modules={[Pagination, A11y]}
              spaceBetween={0}
              slidesPerView={3.1}
              pagination={{ clickable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
              breakpoints={{
                992: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 2,
                },
                576: {
                  slidesPerView: 1.1,
                },
                320: {
                  slidesPerView: 1,
                },
              }}
            >
              {comment &&
                comment.map((e) => {
                  return (
                    <SwiperSlide>
                      <Link to={`/liist/${e.id}`}>
                        <div
                          className={`com-card ${e.class}`}
                          data-aos="fade-down"
                          key={e.id}
                        >
                          <p className="com-text">{e.text}</p>
                          <div className="com-row">
                            <img src={img3} alt="" />
                            <div className="com-row-div">
                              <h2 className="com-name">{e.name}</h2>
                              <p className="com-location">{e.place}</p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </div>
        </div>
        <div className="site container">
          <div className="site-row t1" data-aos="flip-up">
            <h2 className="com-title">My Sites</h2>
            <Link to={"/alll"}>
              <button className="com-btn ">See All</button>
            </Link>
          </div>
          <div className="sites">
            <div className="site-row t2" data-aos="fade-down">
              <img src={site1} alt="" />
              <div className="site-box">
                <h2 className="sites-title">Metaversus</h2>
                <p className="sites-text">
                  The main goal of this project is to educate new students who
                  are just getting into web programming, what technologies they
                  should learn, what they will encounter along the way, and what
                  skills and devices they will need.
                </p>
                <Link to={"https://metaversus.netlify.app/"} target="_blank">
                  <button className="com-btn fz">Open</button>
                </Link>
              </div>
            </div>
            <div className="site-row t1" data-aos="fade-down">
              <img src={site2} alt="" />
              <div className="site-box">
                <h2 className="sites-title">Games</h2>
                <p className="sites-text">
                  The main goal of this project is to educate new students who
                  are just getting into web programming, what technologies they
                  should learn, what they will encounter along the way, and what
                  skills and devices they will need.
                </p>
                <Link to={"https://saidjon.netlify.app/"} target="_blank">
                  <button className="com-btn fz">Open</button>
                </Link>
              </div>
            </div>
            <div className="site-row t1" data-aos="fade-down">
              <img src={site3} alt="" />
              <div className="site-box">
                <h2 className="sites-title">Unlock</h2>
                <p className="sites-text">
                  The main goal of this project is to educate new students who
                  are just getting into web programming, what technologies they
                  should learn, what they will encounter along the way, and what
                  skills and devices they will need.
                </p>
                <Link to={"https://unlock-2010.netlify.app/"} target="_blank">
                  <button className="com-btn fz">Open</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Contactt">
        <Contact />
      </div>
    </div>
  );
}
export default Home;
