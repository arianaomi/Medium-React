import React, { useEffect, useState } from 'react'
import CardGeneral from '../../components/CardGeneral'
import { Container, Row, Col } from 'reactstrap'

import './Home.css'
import NavbarSticky from '../../components/NavBar'
import ComponenteCentral from '../../components/ComponenteCentral'

function Home() {
  const [cardsHome, setCardsHome] = useState([])
  const [cardsCenter, setCardsCenter] = useState([])

  useEffect(() => {
    fetch('https://reactsessions-ac545.firebaseio.com/equipocuatro.json')
      .then(response => response.json())
      .then(data => {
        let parsedCards = []
        let parsedCardsCentral = []
        let reverseArr = []
        let counter = 1
        for (let key in data) {
          let card = data[key]

          card['key'] = key
          parsedCards.push(card)
        }
        if (parsedCards) {
          setCardsHome(parsedCards)
        }
        if (parsedCards) {
          reverseArr = parsedCards.reverse()
          console.log('reversa', reverseArr)
        }
        parsedCardsCentral = reverseArr.slice(1, 4)
        console.log(parsedCardsCentral)
        if (parsedCardsCentral) {
          setCardsCenter(parsedCardsCentral)
        }
      })
  }, [])

  console.log(cardsCenter)

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

  let UICardCenter = cardsCenter.map(
    ({ title, subtitle, author, hour, content, popular, img }, index) => (
      <ComponenteCentral
        key={index}
        title={title}
        subtitle={subtitle}
        author={author}
        content={content}
        img={img}
      />
    )
  )
  var viewportHeight = window.innerHeight
  console.log(viewportHeight)

  window.addEventListener('scroll', event => {
    var scollPosition = window.scrollY
    console.log(scollPosition)
  })

  return (
    <Container className='hi'>
      <Row>
        <Col>
          <NavbarSticky />
        </Col>
      </Row>
      <Row>
        <Col>{UICardCenter}</Col>
        <p className='see'>SEE EDITOR'S PICKS {'>'} </p>
      </Row>
      {UICardGeneral}
      <Row>
        <Col xs='12' md='5'></Col>
      </Row>
    </Container>
  )
}

export default Home
