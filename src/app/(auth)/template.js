'use client'
import React, { useState } from 'react'

export default function template({children}) {
    const [value,setValue]=useState("");
  return (
    <div>
        <input type='text' onChange={(e)=>setValue(e.target.value)} className='text-black'></input>
        <button onClick={()=>{
          alert(value)
        }} >Submit</button>
        {children }</div>
  )
}

