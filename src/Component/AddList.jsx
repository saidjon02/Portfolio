import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import img3 from "../../imgs/radius.png";
import Fetch from "./Fetch";
function AddList() {
  const { id } = useParams();
  const history = useNavigate();
  const { comment } = Fetch(`https://5b4fe1198f106fc2.mokky.dev/comment/` + id);
  const DeleteItem = () => {
    fetch(`https://5b4fe1198f106fc2.mokky.dev/comment/${id}`, {
      method: "DELETE",
    }).then(() => {
      history("/");
    });
  };

  const [login, setLogin] = useState();
  const [pas, setPas] = useState();
  const [hide, setHide] = useState(false);
  const check = () => {
    if (login == "47" && pas == "47") {
      setHide(!hide);
    } else {
      alert("password is false");
      setHide(hide);
    }
  };
  return (
    <div className="wrap2">
      {hide ? (
        <div className="classlist mt">
          <div className="new-title">Your Element</div>
          {comment && (
            <div className="class-list img-card">
              <div className="com-card" key={comment.id}>
                <p className="com-text">{comment.text}</p>
                <div className="com-row">
                  <img src={img3} alt="" />
                  <div className="com-row-div">
                    <h2 className="com-name">{comment.name}</h2>
                    <p className="com-location">{comment.place}</p>
                  </div>
                </div>
              </div>
              <button className="del" onClick={DeleteItem}>
                Delete
              </button>
            </div>
          )}
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
export default AddList;
