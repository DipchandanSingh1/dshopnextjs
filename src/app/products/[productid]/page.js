import React from 'react'

const product = async({params}) => {

const pid=await params.productid;

  return (
    <div>productid{pid} </div>
  )
}

export default product