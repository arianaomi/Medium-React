import React from "react";
import "./AsideCard.css";

function AsideCard() {
  return (
    <div className="containerCardAside">
      <p className="Number">01</p>
      <div className="TextAside">
        <h3 className="TituloAside">
          Wireless Charging Is a Disaster Waiting to Happen
        </h3>
        <p className="AuthorAside">Eric Ravenscraft in OneZero</p>
        <p className="DateAside">August 03 · 4 min read ★</p>
      </div>
    </div>
  );
}

export default AsideCard;
