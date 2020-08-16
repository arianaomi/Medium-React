import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

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
    <div key={index}>
      <div>
        <Card>
          <CardImg src={img} alt="Card image cap" />
          <CardBody>
            <CardTitle>{title}</CardTitle>
            <CardSubtitle>{subtitle}</CardSubtitle>
            <CardText>{author}</CardText>
          </CardBody>
        </Card>
      </div>
    </div>
  ));
  return <>{UICards}</>;
}
export default CCards;
