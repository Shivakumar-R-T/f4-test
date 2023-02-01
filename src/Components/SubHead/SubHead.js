import React from 'react'

const SubHead = ({subHead,label}) => {
  return (
    <div>
         {
            <h5>{subHead} :{label} </h5>
         }
    </div>
  )
}

export default SubHead