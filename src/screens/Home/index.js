import React, { useEffect, useState } from "react";
import CardGeneral from "../../components/CardGeneral";
import CardLeft from "../../components/CardLeft";
import CardRight from "../../components/CardRight";
import { Container, Row, Col } from "reactstrap";
import MenuSub from "../../components/MenuSub";
import "./Home.css";
import NavbarSticky from "../../components/NavBar";

import "./Home.css";

import CentralComponent from "../../components/CentralComponent";
import { getPosts } from "../../server";
import { Link } from "react-router-dom";

function Home() {
  const [cardsHome, setCardsHome] = useState([]);
  const [cardsCenter, setCardsCenter] = useState([]);

  useEffect(() => {
    getPosts().then((data) => {
      let parsedCards = [];
      let parsedCardsCentral = [];
      let reverseArr = [];
      for (let key in data) {
        let card = data[key];

        card["key"] = key;
        parsedCards.push(card);
      }
      if (parsedCards) {
        setCardsHome(parsedCards);
      }
      reverseArr = parsedCards;
      parsedCardsCentral = reverseArr.reverse().slice(1, 4);
      if (parsedCardsCentral) {
        setCardsCenter(parsedCardsCentral);
      }
    });
  }, []);

  /*Scroll */
  const handleScroll = (event) => {
    console.log("hi");
  };

  let UICardGeneral = cardsHome.map(
    ({ title, subtitle, author, hour, content, popular, img, key }) => (
      <Link className="anchor" to={`/${key}`}>
        <CardGeneral
          key={key}
          title={title}
          subtitle={subtitle}
          author={author}
          content={content}
          img={img}
        />
      </Link>
    )
  );

  let UICardCenter = cardsCenter.map(
    ({ title, subtitle, author, hour, content, popular, img, key }) => (
      <Link to={`/${key}`} className="anchor">
        <CentralComponent
          key={key}
          title={title}
          subtitle={subtitle}
          author={author}
          content={content}
          img={img}
        />
      </Link>
    )
  );

  return (
    <Container className="hi">
      <Row>
        <Col>
          <NavbarSticky />
        </Col>
      </Row>
      <Row>
        <Col md="4">
          <CardLeft />
        </Col>
        <Col md="4">
          <CentralComponent />
        </Col>
        <Col md="4">
          <CardRight />
        </Col>
      </Row>
      <Row>
        <Col xs="12" md="8">
          {UICardGeneral}
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
