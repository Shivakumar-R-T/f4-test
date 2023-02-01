import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Components/Header/Header'
import Item from './Components/Item'
import Productdetals from './Components/Productdetals'
import './Home.css'
import Top from './Top/Top'






const Home = () => {
  return (
    <div>
      <Top />
      
      <div className='header'>
        <Header label="All Items" />
      </div>
      <Item />

    </div>
  )
}

export default Home