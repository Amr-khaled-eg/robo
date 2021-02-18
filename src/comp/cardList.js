import React from "react";
import Card from "./card.js";
import "./main.css";
const CardList = ({ robots }) => {
  return (
    <div className="flex">
      {robots.map((el, i) => {
        return <Card key={i} name={el.name} mail={el.email} id={el.id} />;
      })}
    </div>
  );
};
export default CardList;
