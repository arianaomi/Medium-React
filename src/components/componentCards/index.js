import React, { Component, useEffect, useState } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function CardLeft() {
  const [cardLeft, setCardLeft] = useState([]);
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
          setCardLeft(parsedCards);
        }
      });
  });
  const UICards = cardLeft.map(
    ({ title, text, img, author, blog, date, time }, index) => (
      <div>
        <Card>
          <CardImg top width="100%" src={img} alt="Card image cap" />
          <CardBody>
            <CardTitle>{title}</CardTitle>
            <CardText>{text}</CardText>
            <p>{author}</p>
            <p>{blog}</p>
            <p>{date}</p>
            <p>{time}</p>
          </CardBody>
        </Card>
      </div>
    )
  );
  return <>{UICards}</>;
}

export default CardLeft;
