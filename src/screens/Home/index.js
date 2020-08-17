import React, { useEffect, useState } from 'react'
import CardGeneral from '../../components/CardGeneral'

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

  return <h1>{UICardGeneral}</h1>
}

export default Home
