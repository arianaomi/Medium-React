import React, { useEffect, useState } from 'react'
import CardGeneral from '../../components/CardGeneral'
import { Container, Row, Col } from 'reactstrap'
import './Home.css'
import NavbarSticky from '../../components/NavBar'
import ComponenteCentral from '../../components/CentralComponent'
import { getPosts } from '../../server'

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

  console.log('cent', cardsCenter)
  console.log('home', cardsHome)
  /*Scroll */
  const handleScroll = event => {
    console.log('hi')
    // const { scrollTop, clientHeight, scrollHeight } = event.currentTarget
    // console.log('Height', scrollHeight)
    // console.log('Top', scrollTop)
    // console.log(clientHeight)
  }

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

  return (
    <>
      <Container
        className='hi'
        onScroll={() => {
          console.log('hi')
        }}
      >
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
