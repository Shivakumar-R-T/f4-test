import React from 'react'
import './Button.css'

const Button = ({label,onClick,disabled}) => {
  return (
    <div>
        <button disabled={disabled} onClick={onClick} > {label}</button>
    </div>
  )
}

export default Button