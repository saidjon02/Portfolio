import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Fetch from "./Fetch";
function Scardlist() {
  const { id } = useParams();
  const history = useNavigate();
  const { talk } = Fetch(`https://5b4fe1198f106fc2.mokky.dev/talk/` + id);
  const DeleteItem = () => {
    fetch(`https://5b4fe1198f106fc2.mokky.dev/talk/${id}`, {
      method: "DELETE",
    }).then(() => {
      history("/talk");
    });
    Swal.fire({
      title: "Success",
      text: "Thank you for your attention",
      icon: "success",
    });
  };
  return (
    <div className="wrap2 container">
      <div className="classlist mt">
        <div className="new-title">Your Comment</div>
        {talk && (
          <div key={talk.id} className="talk-card">
            <div className="talk-left">
              <div className="talk-names">
                <div className="talk-row">
                  <h2 className="talk-name">{talk.name}</h2>
                  <h2 className="talk-surname">{talk.surname}</h2>
                </div>
                <p className="talk-email">{talk.email}</p>
              </div>
              <div className="talk-message">
                <p className="talk-text">{talk.message}</p>
              </div>
            </div>
            <div className="talk-right">
              <button className="dell mttt" onClick={DeleteItem}>
                Delete
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default Scardlist;
