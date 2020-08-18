import React, { useState, useEffect } from "react";
import { getPosts } from "../../server";
import CardGeneral from "../../components/CardGeneral";
import { Link } from "react-router-dom";

const PostPopular = () => {
  const [cardsPopular, setCardsPopular] = useState([]);

  useEffect(() => {
    getPosts().then((data) => {
      let parsedCards = [];
      for (let key in data) {
        let card = data[key];
        card["key"] = key;
        parsedCards.push(card);
      }
      if (parsedCards) {
        setCardsPopular(parsedCards);
      }
    });
  }, []);

  let popularArr = cardsPopular.filter(({ popular }) => popular === true);

  let UICardsPopular = popularArr.map(
    ({ title, subtitle, author, hour, content, popular, img, key }) => (
      <Link className="anchor" to={`/${key}`}>
        <CardGeneral
          screen="popular"
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
    <>
      <div onScroll={() => console.log("hi")}>
        <div>
          <h3>Contenedor 1</h3>
        </div>
        <div>{UICardsPopular}</div>
      </div>
    </>
  );
};

export default PostPopular;
