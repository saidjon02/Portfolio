import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Iframe from "react-iframe";
function Contact() {
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [email, setEmail] = useState();
  const [message, setMess] = useState();
  const history = useNavigate();
  const senddMovies = (e) => {
    e.preventDefault();
    const newmovies = {
      name,
      surname,
      email,
      message,
    };
    fetch(`https://5b4fe1198f106fc2.mokky.dev/talk`, {
      method: "POST",
      body: JSON.stringify(newmovies),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    }).then(() => {
      history("/");
    });
  };
  const send = () => {
    Swal.fire({
      title: "Success",
      text: "Thank you for your attention",
      icon: "success",
    });
  };
  return (
    <div className="wrap3 mar Contact container">
      <div className="comment-row">
        <h2 className="com-title t1" data-aos="fade-right">
          Talk me
        </h2>
        <Link to={"/talk"}>
          <button className="com-btn t2" data-aos="fade-right">
            See My Messages
          </button>
        </Link>
      </div>
      <div className="contact-row">
        <div className="con-left t1"  data-aos="fade-right">
          <form onSubmit={senddMovies}>
            <div className="input-row">
              <input
                className="inputt mapss"
                type="text"
                required
                placeholder="Your Name"
                name=""
                value={name}
                onChange={(e) => setName(e.target.value)}
                id=""
              />
              <input
                className="inputt mapss"
                type="text"
                required
                placeholder="Your Surname"
                name=""
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                id=""
              />
            </div>
            <input
              className="inputt mapss"
              type="email"
              required
              placeholder="Your Email"
              name=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id=""
            />
            <textarea
              value={message}
              onChange={(e) => setMess(e.target.value)}
              className="inputt mapss"
              type="text"
              required
              placeholder="Message"
              name=""
              id=""
            ></textarea>
            <button className="input-btn bttnn" onClick={send}>
              Send
            </button>
          </form>
        </div>
        <div className="con-ldeft t2"  data-aos="fade-right">
          <Iframe
            url="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d752.7502572157955!2d71.22107534079987!3d41.00335067918097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDAwJzEyLjIiTiA3McKwMTMnMTcuNSJF!5e0!3m2!1sen!2s!4v1715507132623!5m2!1sen!2s"
            width="100%"
            height="450"
            style="border: 0"
            title="maps"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></Iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
