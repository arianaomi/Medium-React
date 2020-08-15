import React from 'react'

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
