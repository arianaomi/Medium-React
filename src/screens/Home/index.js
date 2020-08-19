import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
//Components
import CardGeneral from "../../components/CardGeneral";
import NavbarSticky from "../../components/NavBar";
import CentralComponent from "../../components/CentralComponent";
import AsideCard from "../../components/AsideCard";
import MenuSub from "../../components/MenuSub";

//Server
import { getPosts } from "../../server";
//CSS
import "./Home.css";

function Home() {
  const [cardsHome, setCardsHome] = useState([]);
  const [cardsCenter, setCardsCenter] = useState([]);

  window.onscroll = function (ev) {
    let diff = document.documentElement.scrollHeight - window.scrollY;
    let load = document.body.offsetHeight + 10;

    if (diff <= load) {
      getPosts().then((data) => {
        let cardsArr = [];

        for (const key in data) {
          let card = data[key];
          card["key"] = key;
          cardsArr.push(card);
        }

        let newArr = cardsHome.concat(cardsArr);
        setCardsHome(newArr);
      });
    }
  };

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
          screen="home"
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

  let popularArr = cardsHome
    .filter(({ popular }) => popular === true)
    .slice(0, 4);

  let UIAside = popularArr.map(
    ({ title, subtitle, author, hour, content, popular, img, key }, index) => (
      <Link to={`/${key}`} className="anchor">
        <AsideCard
          count={index}
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
    <>
      <Container onScroll={handleScroll} className="hi">
        <MenuSub />
        <NavbarSticky />
        <Row className="recentSection">
          <Col className="middleSection">{UICardCenter}</Col>
          <p className="see"> SEE EDITOR'S PICKS </p>
        </Row>
        <Row className="rowGeneral">
          <Col className="cardGeneral">{UICardGeneral}</Col>
          <Col className="asidecol ">
            <div className="sidebar-item">
              <div className="make-me-sticky">
                <h2>Popular on medium</h2>
                {UIAside}
                <footer className="footerhome">
                  <p className="phome">
                    Help Status Writers Blog Careers Privacy Terms About{" "}
                  </p>
                </footer>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
