import React, { useState } from 'react'
//Custom components
import CardForm from './Components/CardForm'
import MenuSub from '../../components/MenuSub'

function Form() {
  const [cards, setCards] = useState([])

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
        alert('Publicado')
      })
  }
  return (
    <>
      <MenuSub />
      <CardForm callback={handleForm} />
    </>
  )
}
export default Form
