import React from 'react'
import './AsideCard.css'
import moment from 'moment'

function AsideCard({
  title,
  subtitle,
  author,
  hour,
  count,
  content,
  popular,
  img,
  key,
}) {
  let date = moment.utc(hour).format('lll')
  return (
    <div className='containerCardAside'>
      <p className='Number'>0{count + 1}</p>
      <div className='TextAside'>
        <h3 className='TituloAside'>{title}</h3>
        <p className='AuthorAside'>{author}</p>
        <p className='DateAside'>{date} read ★</p>
      </div>
    </div>
  )
}

export default AsideCard
