import React, { useState } from 'react'
//Components
import Input from '../../../../components/Input'
//CSS

function CardForm({ callback }) {
  const [title, setTitle] = useState('')
  const [subtitle, setSubtitle] = useState('')
  const [author, setAuthor] = useState('')
  const [hour, setHour] = useState(0)
  const [content, setContent] = useState('')
  const [img, setImg] = useState('')
  const [popular, setPopular] = useState(false)

  const handleInputChange = (name, value) => {
    if (name === 'title') {
      setTitle(value)
    } else if (name === 'subtitle') {
      setSubtitle(value)
    } else if (name === 'author') {
      setAuthor(value)
    } else if (name === 'content') {
      setContent(value)
    } else if (name === 'img') {
      setImg(value)
    } else {
      setPopular(popular ? false : true)
    }
    const date = Date.now
    setHour(date)
  }

  const handleSubmit = event => {
    event.preventDefault()

    callback(title, subtitle, author, hour, content, popular, img)

    setTitle('')
    setSubtitle('')
    setAuthor('')
    setContent('')
    setImg('')
    setPopular(false)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <Input value={title} name='title' callback={handleInputChange} />
        <label>Subtitle</label>
        <Input value={subtitle} name='subtitle' callback={handleInputChange} />
        <label>Author</label>
        <Input value={author} name='author' callback={handleInputChange} />
        <label>Content</label>
        <Input value={content} name='content' callback={handleInputChange} />
        <label>Image</label>
        <Input value={img} name='img' callback={handleInputChange} />
        <label>Is Popular?</label>
        <Input
          type='checkbox'
          value={popular}
          callback={handleInputChange}
          name='popular'
        />
        <button>Publish</button>
      </form>
    </div>
  )
}

export default CardForm
