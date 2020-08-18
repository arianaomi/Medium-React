import React, { useState, useEffect } from 'react'
//Custom components
import CardForm from './Components/CardForm'

function Cards() {
  const [cards, setCards] = useState([])

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

        if (parsedCards) {
          setCards(parsedCards)
        }
      })
  }, [])

  const handleForm = (title, subtitle, author, hour, content, popular, img) => {
    fetch('https://reactsessions-ac545.firebaseio.com/equipocuatro.json', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({
        title,
        subtitle,
        author,
        hour,
        content,
        popular,
        img,
      }),
    })
      .then(response => response.json)
      .then(({ key }) => {
        const newUsers = [
          ...cards,
          { title, subtitle, author, hour, content, popular, img, key: key },
        ]
        setCards(newUsers)
      })
  }

  const UICards = cards.map(
    ({ title, subtitle, author, hour, content, popular }, index) => (
      <li key={index}>
        {title} {subtitle}
      </li>
    )
  )
  return (
    <>
      <CardForm callback={handleForm} />
    </>
  )
}
export default Cards
