import React,{useState,useEffect} from 'react'
import Button from './Button/Button';
import SubHead from './SubHead/SubHead';
import Image from './Image/Image';
import  './Productdetals.css'
import { Add_Cart_Item, Remove_Cart_Item } from '../Stores/actions';

import {useSelector,useDispatch} from 'react-redux'





const Productdetals = ({products,label}) => {
    // {console.log("products" ,products)}
    const [isbtnDisabled,setisbtnDisabled]=useState(false)
    const store=useSelector(state=>state);
   
   
    const handleEnable=(value)=>{
        let disable=false
        store.upData.map((item)=>{
            if(item.id==value)
            {
                disable=true;
            }
        })
        return !disable;
        
    }

    const cartstore=useSelector(state=>state);
    const dispatch=useDispatch();


    const hanldeCart=(data)=>{
        setisbtnDisabled(true);
        console.log("PressedData",data.id)
        if( label==="Add to Cart"&&handleEnable){
            dispatch({
                type:Add_Cart_Item,
                payload:data
            })
            console.log("store", cartstore)

        }
        else if(label==="Remove from The Cart")
           {
            console.log("Remove from The Cart")
            dispatch({
                type:Remove_Cart_Item,
                payload:data.id
            })
           }



       
       
              
    }
   

  return (
    <div className='item-container'>
         <div className='items'>
            {/* {console.log("products in prpo", products)} */}
        {products?.map((item,idx)=>

        {
          
            return (  <div className='item'key={idx}> 
                {
                  
                    <div  key={item.id}>  
                        
                   
                    <Image src={item.images[0]}/>
                    <SubHead  subHead='Title' label={item?.title}/>
                    <SubHead subHead='Price' label={item?.price}/>
                    <div className='btn'>
                    <Button disabled={false} label={label} onClick={()=>{hanldeCart(item)}}/>
                    </div>
                   
                       
                    </div>
                 
                    
                   
                }
            </div>)
           
        
        })}

       
        </div>

    </div>
  )
}

export default Productdetals