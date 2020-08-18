import React, { useState, useEffect } from 'react'
import './centralCards.css'

function CCards({ title, subtitle, author, img, hour }) {
  return (
    <div className='card-container'>
      <img className='cardImg' src={img} alt='Card image cap' />
      <div className='left'>
        <h3 className='title__item'>{title}</h3>

        <div className='iconos-author'>
          <p className='ellipsis'>
            <span className=''>{author} </span>
            <span className='description'>Aug 17,2020 7 min · read ★</span>
          </p>
          <div className='iconos'>
            <svg
              className='disappear-desk'
              width='20'
              height='20'
              viewBox='0 0 16 16'
              class='bi bi-bookmark'
              fill='currentColor'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                d='M8 12l5 3V3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12l5-3zm-4 1.234l4-2.4 4 2.4V3a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10.234z'
              />
            </svg>
            <svg
              width='20'
              height='20'
              viewBox='0 0 16 16'
              class='bi bi-three-dots'
              fill='currentColor'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                d='M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z'
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CCards
