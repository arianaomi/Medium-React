import React, { useEffect, useState } from 'react'
import CardGeneral from '../../components/CardGeneral'
import { Container, Row, Col } from 'reactstrap'
import './Home.css'
import NavbarSticky from '../../components/NavBar'
import CentralComponent from '../../components/CentralComponent'
import { getPosts } from '../../server'
import { Link } from 'react-router-dom'

function Home() {
  const [cardsHome, setCardsHome] = useState([])
  const [cardsCenter, setCardsCenter] = useState([])

  useEffect(() => {
    getPosts().then(data => {
      let parsedCards = []
      let parsedCardsCentral = []
      let reverseArr = []
      for (let key in data) {
        let card = data[key]

        card['key'] = key
        parsedCards.push(card)
      }
      if (parsedCards) {
        setCardsHome(parsedCards)
      }
      reverseArr = parsedCards
      parsedCardsCentral = reverseArr.reverse().slice(1, 4)
      if (parsedCardsCentral) {
        setCardsCenter(parsedCardsCentral)
      }
    })
  }, [])

  /*Scroll */
  const handleScroll = event => {
    console.log('hi')
  }

  let UICardGeneral = cardsHome.map(
    ({ title, subtitle, author, hour, content, popular, img, key }) => (
      <Link className='anchor' to={`/${key}`}>
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
  )

  let UICardCenter = cardsCenter.map(
    ({ title, subtitle, author, hour, content, popular, img, key }) => (
      <Link to={`/${key}`} className='anchor'>
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
  )

  return (
    <>
      <Container onClick={handleScroll} className='hi'>
        <Row>
          <Col>
            <NavbarSticky />
          </Col>
        </Row>
        <Row>
          <Col>
            {UICardCenter}
            <p className='see'> SEE EDITOR'S PICKS> </p>
          </Col>
        </Row>
        <Row>
          <Col xs='12' md='5'>
            {UICardGeneral}
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home
