import React from "react";
import "./main.css";
const Card = (props) => {
  return (
    <div className="card">
      <img src={`https://robohash.org/${props.id}?200x200`} alt="robot" />
      <div>
        <h2>{props.name}</h2>
        <p>{props.mail}</p>
      </div>
    </div>
  );
};
export default Card;
