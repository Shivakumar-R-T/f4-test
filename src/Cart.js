import React from 'react'
import './Cart.css'
import { Link } from 'react-router-dom'
import Top from './Top/Top'
import { useSelector, useDispatch } from 'react-redux'
import Productdetals from './Components/Productdetals'
import SideBar from './Components/SideBar/SideBar'
import Header from './Components/Header/Header'




const Cart = () => {
  const store = useSelector(state => state)



  let newStore = [];
  newStore = [{ store }][0].store;

  let val = [];
  val.push(newStore);




  return (
    <div className='Container'>

      <Top />
      <div className='header'>
        <Header label="My Cart" />
      </div>
      <div className='cart'>
        <div>
          <Productdetals products={val[0].upData} label={"Remove from The Cart"} />
        </div>
        <SideBar />
      </div>
    </div>
  )
}

export default Cart