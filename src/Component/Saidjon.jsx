import React, { useState } from "react";
import Fetch from "./Fetch";
import { Link, useParams } from "react-router-dom";

function Saidjon() {
  const { id } = useParams();
  const { talk } = Fetch("https://5b4fe1198f106fc2.mokky.dev/talk");
  const [login, setLogin] = useState();
  const [pas, setPas] = useState();
  const [hide, setHide] = useState(false);
  const check = () => {
    if (login == "47" && pas == "47") {
      setHide(!hide);
      Swal.fire({
        title: "Welcome Saidjon",
        text: "Password is true",
        icon: "success",
      });
    } else {
      Swal.fire({
        title: "Password is error",
        text: "You are not Saidjon",
        icon: "error",
      });
      setHide(hide);
    }
  };
  return (
    <div className="wrappper">
      {hide ? (
        <div className="Saidjon talk mtt container">
          <div className="comment-row">
            <h2 className="talk-title com-title">Your Messages Saidjon</h2>
          </div>
          {talk &&
            talk.map((e) => {
              return (
                <div key={e.id} className="talk-card">
                  <div className="talk-left">
                    <div className="talk-names">
                      <div className="talk-row">
                        <h2 className="talk-name">{e.name}</h2>
                        <h2 className="talk-surname">{e.surname}</h2>
                      </div>
                      <p className="talk-email">{e.email}</p>
                    </div>
                    <div className="talk-message">
                      <p className="talk-text">{e.message}</p>
                    </div>
                  </div>
                  <div className="talk-right">
                    <Link to={`/linkk/${e.id}`}>
                      <button className="view dell">View Message</button>
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
      ) : (
        <div className="log log-bg">
          <div>
            <div className="log-box container mtt">
              <h2 className="log-title">Log In</h2>
              <input
                type="text"
                name=""
                onChange={(e) => {
                  setLogin(e.target.value);
                }}
                placeholder="Your Login"
                id="log"
                className="log-inp"
              />
              <input
                type="password"
                name=""
                onChange={(e) => {
                  setPas(e.target.value);
                }}
                placeholder="Password"
                id="pas"
                className="log-inp"
              />
              <button onClick={check} type="submit" className="send">
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Saidjon;
