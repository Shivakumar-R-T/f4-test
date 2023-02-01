import React from 'react'
// import './SideBar.css'
import { useSelector, useDispatch } from 'react-redux'

const SideBar = () => {
    const store = useSelector(state => state);
    {
        console.log("SideBar", store)
    }
    return (
        <div>SideBar
            {
                store.upData?.map((item) => {
                    return (<div className='ind'> <h6>{item?.id}  {item?.title} </h6>
                        <h5>${item?.price}</h5> </div>)
                    
                })

            }
        </div>
    )
}

export default SideBar