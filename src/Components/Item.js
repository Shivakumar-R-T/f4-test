import React,{useEffect,useState} from 'react'
import {axiosClient} from '../axiosClient'
import './Item.css'
import { Add_Home_Item } from '../Stores/actions'
import {useSelector,useDispatch} from 'react-redux'
import Productdetals from './Productdetals'



const Item = () => {
    const [datas, setdatas] = useState([{}])
   const homestore=useSelector(state=>state);
   const dispatch=useDispatch();
   
    useEffect(()=>{
        axiosClient.get('products').then((res)=>{
           


            setdatas(res.data)
          
            
        })
       
       
        
    },[])
    
  return (
    <div className='product-container'>
        {

           
            <Productdetals  products={datas?.products} label={"Add to Cart"}/>
           
        }
       
    </div>
  )
}

export default Item