import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
//Components
import CardGeneral from '../../components/CardGeneral'
import NavbarSticky from '../../components/NavBar'
import CentralComponent from '../../components/CentralComponent'
//Server
import { getPosts } from '../../server'
//CSS
import './Home.css'

function Home() {
  const [cardsHome, setCardsHome] = useState([])
  const [cardsCenter, setCardsCenter] = useState([])

  window.onscroll = function (ev) {
    let diff = document.documentElement.scrollHeight - window.scrollY
    let load = document.body.offsetHeight + 10

    if (diff <= load) {
      getPosts().then(data => {
        let cardsArr = []

        for (const key in data) {
          data[key]['key'] = key
          cardsArr.push(data[key])
        }

        let newArr = cardsHome.concat(cardsArr)
        setCardsCenter(newArr)
      })
    }
  }

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
          screen='home'
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
      <Container onScroll={handleScroll} className='hi'>
        <Row>
          <Col>
            <NavbarSticky />
          </Col>
        </Row>
        <Row className='recentSection'>
          <Col className='middleSection'>{UICardCenter}</Col>
          <p className='see'> SEE EDITOR'S PICKS> </p>
        </Row>
        <Row className='rowGeneral'>
          <Col className='cardGeneral'>{UICardGeneral}</Col>
        </Row>
      </Container>
    </>
  )
}

export default Home
