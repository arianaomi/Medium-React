import React from 'react'
import moment from 'moment'

//CSS
import './CardGeneral.css'

function CardGeneral({ screen, title, subtitle, author, hour, img }) {
  let date = moment.utc(hour).format('lll')

  return (
    <>
      <div className={`Card ${screen}`}>
        <div className='contentCard'>
          <h5>BASED ON YOUR READING HISTORY</h5>
          <h1 className='title'>{title}</h1>
          <p className='subtitle'>{subtitle}</p>
          <div className='sectionExtra'>
            <div className='infoExtra'>
              <p>{author}</p>
              <p className='date'>{date} · read ★</p>
            </div>
            <div>
              <svg
                width='20'
                height='20'
                viewBox='0 0 16 16'
                className='bi bi-bookmark'
                fill='currentColor'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M8 12l5 3V3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12l5-3zm-4 1.234l4-2.4 4 2.4V3a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10.234z'
                />
              </svg>
              <svg
                width='20'
                height='20'
                viewBox='0 0 16 16'
                className='bi bi-three-dots'
                fill='currentColor'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z'
                />
              </svg>
            </div>
          </div>
        </div>
        <div>
          <img className='imgCard' src={img} />
        </div>
      </div>
    </>
  )
}

export default CardGeneral
