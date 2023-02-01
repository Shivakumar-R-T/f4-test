import { Add_Cart_Item,Remove_Cart_Item  } from "./actions";
import React,{useState} from 'react';

import { initialHomeData } from "./reduxStores";

let newdata=[]
// export const upData=[]

export const reducer=(state=initialHomeData,action)=>{

    {console.log(action)}
    switch(action.type)
    {
        case Add_Cart_Item:
            console.log("reducerstate",state)
            //  newdata.concat(state,action.payload);
            newdata.push(action.payload)
            console.log("newdata",{...action.payload})
          const upData=[...newdata]
            console.log("neupwdata",upData)
            console.log("upData[0]",upData[0])
        
          
             return {upData}

        case Remove_Cart_Item:
            console.log("state",state)
            // const newData=state.filter((book)=>book.id!=action.payload.id)

            // return {state,...newData    }

           
            default :
            return state;
    }
}