import React from 'react'
import { Card, Button } from 'react-bootstrap'

import './CardGeneral.css'

function CardGeneral({
  key,
  title,
  subtitle,
  author,
  hour,
  content,
  popular,
  img,
}) {
  console.log(title, subtitle, author, hour, content, popular, img)
  return (
    <div className='Card'>
      <div className='contentCard'>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <div>
          <p>author</p>
        </div>
      </div>
      <div>
        <img className='imgCard' src={img} />
      </div>
    </div>
    // <Card>
    //   <Card.Img variant='right' src={img} />
    //   <Card.Body>
    //     <Card.Title>{title}</Card.Title>
    //     <Card.Text>lorem </Card.Text>
    //     <Button variant='primary'>ver mas</Button>
    //   </Card.Body>
    // </Card>
  )
}

export default CardGeneral
