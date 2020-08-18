import React, { useState, useEffect } from 'react'
import { getPosts } from '../../server'
import CardGeneral from '../../components/CardGeneral'
import MenuSub from '../../components/MenuSub'

const PostPopular = () => {
  const [cardsPopular, setCardsPopular] = useState([])

  useEffect(() => {
    getPosts().then(data => {
      let parsedCards = []
      for (let key in data) {
        let card = data[key]
        card['key'] = key
        parsedCards.push(card)
      }
      if (parsedCards) {
        setCardsPopular(parsedCards)
      }
    })
  }, [])

  let popularArr = cardsPopular.filter(({ popular }) => popular === true)

  let UICardsPopular = popularArr.map(
    ({ title, subtitle, author, hour, content, popular, img, key }) => (
      <CardGeneral
        screen='popular'
        key={key}
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
      <div onScroll={() => console.log('hi')}>
        <div className='menuSub'>
          <MenuSub />
        </div>
        <div>{UICardsPopular}</div>
      </div>
    </>
  )
}

export default PostPopular
