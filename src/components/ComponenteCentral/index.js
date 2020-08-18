import React, { useState, useEffect } from "react";
import "./centralCards.css";

function CCards() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("https://reactsessions-ac545.firebaseio.com/equipocuatro.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        let parsedCards = [];
        let counter = 1;
        for (let key in data) {
          console.log(key);
          console.log(data);
          let card = data[key];
          console.log("card", card);
          card["key"] = key;
          if (counter <= 3) {
            parsedCards.push(card);
            counter++;
          } else {
            console.log("Ya son 3");
          }
        }
        console.log("parsed", parsedCards);
        if (parsedCards) {
          setCards(parsedCards);
        }
      });
  }, []);

  const UICards = cards.map(({ title, subtitle, author, img, hour }, index) => (
    <div key={index}>
      <div className="card-container">
        <img className="imgCard" src={img} alt="Card image cap" />
        <div className="left">
          <h3 className="title__item">{title}</h3>
          <span className="">{author} </span>
          <p className="ellipsis">
            <span className="description">Aug 17,2020 7 min · read ★</span>
          </p>
        </div>
      </div>
    </div>
  ));
  return <>{UICards}</>;
}
export default CCards;
