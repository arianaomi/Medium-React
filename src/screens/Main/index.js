import React, { useState, useEffect } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import "./centralCards.css";

function CCards() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("https://reactsessions-ac545.firebaseio.com/equipocuatro.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        let parsedCards = [];
        for (let key in data) {
          console.log(key);
          console.log(data);
          let card = data[key];
          console.log("card", card);
          card["key"] = key;
          parsedCards.push(card);
        }
        console.log("parsed", parsedCards);
        if (parsedCards) {
          setCards(parsedCards);
        }
      });
  });

  const UICards = cards.map(({ title, subtitle, author, img }, index) => (
    <div className="container" key={index}>
      <Card className="card-container">
        <CardImg clasName="img-central" top src={img} alt="Card image cap" />
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardText>{author} </CardText>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
        </CardBody>
      </Card>
    </div>
  ));
  return <>{UICards}</>;
}
export default CCards;
