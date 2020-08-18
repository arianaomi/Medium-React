import React from 'react'
import Logo from '../../Medium_Black.png'
import MiniLogo from '../../Monogram.png'
import './MenuSub.css'
import { Link } from 'react-router-dom'

function MenuSub() {
  return (
    <nav className='logoeiconos'>
      <div className='logos'>
        <Link to='/'>
          <img className='disappear-mobile' src={Logo} height='22' alt='logo' />
          <img
            className='disappear-desk'
            src={MiniLogo}
            width='35'
            height='35'
            alt='logo'
          />
        </Link>
      </div>

      <div className='iconos'>
        <svg
          width='1em'
          height='1em'
          viewBox='0 0 16 16'
          fill='currentColor'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            d='M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z'
          />
          <path
            fillRule='evenodd'
            d='M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z'
          />
        </svg>

        <svg
          className='disappear-mobile'
          width='1em'
          height='1em'
          viewBox='0 0 16 16'
          fill='currentColor'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            d='M7 13l5 3V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12l5-3zm-4 1.234l4-2.4 4 2.4V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10.234z'
          />
          <path d='M14 14l-1-.6V2a1 1 0 0 0-1-1H4.268A2 2 0 0 1 6 0h6a2 2 0 0 1 2 2v12z' />
        </svg>

        <svg
          className='disappear-mobile'
          width='1em'
          height='1em'
          viewBox='0 0 16 16'
          fill='currentColor'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2z' />
          <path
            fillRule='evenodd'
            d='M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z'
          />
        </svg>
        <a href='#'>
          <svg
            width='1em'
            height='1em'
            viewBox='0 0 16 16'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z' />
            <path
              fillRule='evenodd'
              d='M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z'
            />
          </svg>
        </a>

        <button type='button' className='btn disappear-mobile'>
          New post
        </button>

        <img
          className='user-img '
          src='https://www.contrareplica.mx/uploads/galerias/normal/d51adde6198cd2e5a32ddda82d2ee9b6.jpg'
          width='35'
          height='35'
          alt='logo'
        />
      </div>
    </nav>
  )
}

export default MenuSub
