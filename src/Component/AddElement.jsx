import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import img3 from "../../imgs/radius.png";

function AddElement() {
  const [text, setText] = useState();
  const [name, setName] = useState();
  const [place, setPlace] = useState();
  const [email, setEmail] = useState();
  const history = useNavigate();
  const sendMovies = (e) => {
    e.preventDefault();
    const newmovies = {
      text,
      name,
      place,
      email,
    };
    fetch(`https://5b4fe1198f106fc2.mokky.dev/comment`, {
      method: "POST",
      body: JSON.stringify(newmovies),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    }).then(() => {
      history("/");
    });
  };
  return (
    <>
      <div className="container mt">
        <div className="new">
          <h2 className="new-title">Create New Element</h2>
          <div className="img-card">
            <div className="com-card">
              <p className="com-text">{text}</p>
              <div className="com-row">
                <img src={img3} alt="" />
                <div className="com-row-div">
                  <h2 className="com-name">{name}</h2>
                  <p className="com-location">{place}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="new-bottom">
            <div className="new-right">
              <form onSubmit={sendMovies}>
                <div className="add-row">
                  <input
                  className="inputt"
                    type="text"
                    required
                    placeholder="Your Name"
                    name=""
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id=""
                  />
                  <input
                    type="text"
                    className="inputt"
                    required
                    value={place}
                    onChange={(e) => setPlace(e.target.value)}
                    placeholder="Where are you from"
                    name=""
                    id=""
                  />
                </div>
                <input
                  type="email"
                  className="inputt"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name=""
                  id=""
                />
                <textarea
                placeholder="Your Message"
                  className="inputt"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                ></textarea>
                <button className="input-btn bttnn">Create Element</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddElement;
