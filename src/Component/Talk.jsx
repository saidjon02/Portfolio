import React from "react";
import Fetch from "./Fetch";
import { Link } from "react-router-dom";

function Talk() {
  const { talk } = Fetch("https://5b4fe1198f106fc2.mokky.dev/talk");
  return (
    <div className="talk mtt container">
      <div className="comment-row">
        <h2 className="talk-title com-title">My Messages </h2>
        <Link to={"/im"}>
          <button className="com-btn">I'm Saidjon</button>
        </Link>
      </div>
      {talk &&
        talk.map((e) => {
          return (
            <div className="talk-card">
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
          );
        })}
    </div>
  );
}

export default Talk;
