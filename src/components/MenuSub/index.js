import React from 'react'
import Logo from '../../Medium_Black.png'
import MiniLogo from '../../Monogram.png'
import './MenuSub.css'

function MenuSub() {
  return (
    <nav className='logoeiconos'>
      <div className='logos'>
        <a href='index.html'>
          <img className='disappear-mobile' src={Logo} height='22' alt='logo' />
          <img
            className='disappear-desk'
            src={MiniLogo}
            width='35'
            height='35'
            alt='logo'
          />
        </a>
      </div>

      <div className='iconos'>
        <svg
          class='bi bi-search'
          width='1em'
          height='1em'
          viewBox='0 0 16 16'
          fill='currentColor'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fill-rule='evenodd'
            d='M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z'
          />
          <path
            fill-rule='evenodd'
            d='M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z'
          />
        </svg>

        <svg
          class='bi bi-bookmarks d-none d-md-flex'
          width='1em'
          height='1em'
          viewBox='0 0 16 16'
          fill='currentColor'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fill-rule='evenodd'
            d='M7 13l5 3V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12l5-3zm-4 1.234l4-2.4 4 2.4V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10.234z'
          />
          <path d='M14 14l-1-.6V2a1 1 0 0 0-1-1H4.268A2 2 0 0 1 6 0h6a2 2 0 0 1 2 2v12z' />
        </svg>

        <svg
          class='bi bi-bell'
          width='1em'
          height='1em'
          viewBox='0 0 16 16'
          fill='currentColor'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2z' />
          <path
            fill-rule='evenodd'
            d='M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z'
          />
        </svg>

        <button type='button' class='btn d-none d-md-flex'>
          Upgrate
        </button>

        <img
          class='rounded-circle ml-3 ml-md-0'
          src='img/img layout/1_ohNqdoV9lKPcxTAUpA2NqQ.png'
          width='35'
          height='35'
          alt='logo'
        />

        <ul class='newPost'>
          <li>
            <a id='btn-newPost' href='#'>
              <svg
                class='bi bi-three-dots-vertical'
                width='1em'
                height='1em'
                viewBox='0 0 16 16'
                fill='currentColor'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z'
                />
              </svg>
            </a>
            <ul class='segundonivel'>
              <li>
                <a
                  href=''
                  id='btn-newPost'
                  onclick="loadContent('newBlog.html',event)"
                >
                  New Post
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default MenuSub
