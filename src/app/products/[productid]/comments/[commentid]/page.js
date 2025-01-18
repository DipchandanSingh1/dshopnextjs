import React from 'react'

const comemnt = async({params}) => {
    const pid=await params.productid;
const cid=await params.commentid;
  return (
    <div>productid{pid} commentid:{cid}</div>
  )
}

export default comemnt