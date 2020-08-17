import React, { useEffect, useState } from 'react'
import CardGeneral from '../../components/CardGeneral'
import { Container, Row, Col } from 'reactstrap'
import MenuSub from '../../components/MenuSub'
import './Home.css'

function Home() {
  const [cardsHome, setCardsHome] = useState([])

  useEffect(() => {
    fetch('https://reactsessions-ac545.firebaseio.com/equipocuatro.json')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        let parsedCards = []
        for (let key in data) {
          let card = data[key]

          card['key'] = key
          parsedCards.push(card)
        }
        console.log('parsed', parsedCards)
        if (parsedCards) {
          setCardsHome(parsedCards)
        }
      })
  }, [])

  let UICardGeneral = cardsHome.map(
    ({ title, subtitle, author, hour, content, popular, img }, index) => (
      <CardGeneral
        key={index}
        title={title}
        subtitle={subtitle}
        author={author}
        content={content}
        img={img}
      />
    )
  )
  console.log(UICardGeneral)
  // let UICardGeneral = cardsHome.map(
  //   ({ title, subtitle, author, hour, content, popular, img }, index) => (
  //     <CardGeneral key={index} title={title} subtitle={subtitle} title={img} />
  //   )
  // )

  return (
    <Container className='hi'>
      <Row>
        <Col>
          <MenuSub />
        </Col>
      </Row>
      <Row>
        <Col xs='12' md='5'>
          {UICardGeneral}
        </Col>
      </Row>
    </Container>
  )
}

export default Home
