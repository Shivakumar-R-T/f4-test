import React from 'react'
import './Image.css'

const Image = ({src}) => {
  return (
    <div className='img-container' alt="imgs">
        {
            <img src={src} />
        }
    </div>
  )
}

export default Image