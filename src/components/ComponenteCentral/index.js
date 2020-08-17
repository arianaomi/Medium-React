import React, { useState, useEffect } from 'react'
import './centralCards.css'

function CCards({ title, subtitle, author, img, hour }) {
  return (
    <div className='card-container'>
      <img className='cardImg' src={img} alt='Card image cap' />
      <div className='left'>
        <h3 className='title__item'>{title}</h3>
        <span className=''>{author} </span>
        <p className='ellipsis'>
          <span className='description'>Aug 17,2020 7 min · read ★</span>
        </p>
      </div>
    </div>
  )
}
export default CCards
