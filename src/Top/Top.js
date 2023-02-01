import React from 'react'
import { Link } from 'react-router-dom'
import './Top.css'

const Top = () => {
    return (
        <div className='body'>
            {
                <div className='top'>
                    <div>
                        Shopping Cart
                    </div>
                    <div className='page'>

                        <Link to='/' className='ind'>Home</Link>

                        <Link to='cart' className='ind'>Cart</Link>
                    </div>
                </div>
            }
        </div>
    )
}

export default Top