import React, { useEffect } from "react";
// import Typed from "typed.js";
// import imgHome from "../../imgs/neg.png";
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

  return (
    <div className="wrap">
      <div className="home">
        <div className="home-bg">
          <div className="container home-rows">
            <h2 className="home-title">
              <span className="ml tl">
                <span className="home-span1">Welcome</span>
                <span className="home-span2">to</span>
              </span>
              <span className="ml mll">
                <span className="home-span3">Saidjon's</span>
                <span className="home-span4">site</span>
              </span>
            </h2>
            <div className="icon-box">
              <div className="icons-box">
                <i class="bx bxl-telegram icon-home"></i>
                <i class="bx bxl-instagram icon-home"></i>
                <i class="bx bxl-github icon-home"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Homme homee-bg">
        <div className="container">
          <div className="home-row2">
            <div className="home-card t1" data-aos="fade-down">
              <h2 className="home-card-title">100%</h2>
              <div className="arroww"></div>
              <p className="home-card-text">HTML</p>
            </div>
            <div className="home-card t2" data-aos="fade-down">
              <h2 className="home-card-title">100%</h2>
              <div className="arroww"></div>
              <p className="home-card-text">CSS</p>
            </div>
            <div className="home-card t3" data-aos="fade-down">
              <h2 className="home-card-title">87%</h2>
              <div className="arroww"></div>
              <p className="home-card-text">JavaScript</p>
            </div>
            <div className="home-card t4 bn" data-aos="fade-down">
              <h2 className="home-card-title">76%</h2>
              <div className="arroww"></div>
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
