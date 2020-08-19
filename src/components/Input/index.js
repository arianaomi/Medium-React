import React from 'react'
import './Input.css'

const Input = props => {
  const { name, value, type, callback } = props

  const handlerInput = ({ target: { value, name } }) => {
    callback(name, value)
  }

  return (
    <input
      type={type ? type : 'text'}
      name={name}
      value={value}
      onChange={handlerInput}
    />
  )
}

export default Input
