import React, { useState, useEffect } from 'react'
import moment from 'moment'
//components
import MenuSub from '../../components/MenuSub'
//css
import './Post.css'
import logo from '../../logo-white.png'

//Services
import { getPost } from '../../server'

//DRF
import { useParams } from 'react-router-dom'

const PostById = () => {
  const { id } = useParams()
  const [post, setPost] = useState({})
  useEffect(() => {
    getPost(id).then(data => {
      setPost(data)
    })
  }, [id])

  const { title, author, content, img, hour, subtitle } = post
  let date = moment.utc(hour).format('lll')
  return (
    <>
      <div>
        <MenuSub />
      </div>
      <div className='containerPost'>
        <div className='title__containerPost'>
          <h1 className='title__textPost'>{title} </h1>
          <p className='subtitle-p'>{subtitle}</p>
        </div>

        <div className='datas__containerPost'>
          <div className='imgProf'>
            <img
              className='imgProfilePost'
              src=' https://miro.medium.com/fit/c/96/96/1*gYzstxJPP21JUOIXHOX4Nw.jpeg'
            />
          </div>
          <div className='datLogos'>
            <div>
              <span>
                {author} <button className='btn-follow'>follow</button>
              </span>
              <p className='date__Post'>
                <small>{date} read ★</small>
              </p>
            </div>
            <div className='iconos-id'>
              <img src='https://img.icons8.com/android/18/000000/twitter.png' />
              <img src='https://img.icons8.com/small/18/000000/facebook.png' />

              <svg
                width='1em'
                height='1em'
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
                width='1em'
                height='1em'
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
          <img className='imgCardPost' src={img} />
        </div>
        <div className='text__containerPost'>
          <p className='paragraphPost'>{content}</p>
        </div>
      </div>
      <footer>
        <div className='foot'>
          <div>
            <h4> Discover Medium</h4>
            <p>
              Welcome to a place where words matter. On Medium, smart voices and
              original ideas take center stage - with no ads in sight. Watch
            </p>
          </div>
          <div>
            <h4>Make Medium yours Follow</h4>
            <p>
              all the topics you care about, and we’ll Make Medium yours Follow
              all the topics you care about, and we’ll deliver the best stories
              for you to your homepage and inbox. Explore
            </p>
          </div>
          <div>
            <h4> Discover Medium</h4>
            <p>
              Welcome to a place where words matter. On Medium, smart voices and
              original ideas take center stage - with no ads in sight. Watch
            </p>
          </div>
        </div>
        <div>
          <img src={logo} />
        </div>
      </footer>
    </>
  )
}

export default PostById
