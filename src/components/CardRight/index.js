import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import "./cardright.css";

class CardRight extends Component {
  render() {
    return (
      <div>
        <Card>
          <CardImg
            className="cardRightImg"
            top
            src="https://cdn-images-1.medium.com/focal/378/167/34/26/1*pAuK1yGof1wOsjx2RLHu0g.jpeg"
            alt="Card image cap"
          />
          <CardBody className="cardRight">
            <CardTitle className="cardTitle">
              Usando el Hook de efecto
            </CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
            <p className="datos">
              <span className="">author </span>
              <span className="description">Aug 17,2020 7 min · read ★</span>
            </p>
            <div className="iconos">
              <svg
                className="disappear-desk"
                width="20"
                height="20"
                viewBox="0 0 16 16"
                className="bi bi-bookmark"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              ></svg>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default CardRight;
