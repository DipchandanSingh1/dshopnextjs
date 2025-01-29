import React from 'react'

const blogspage = async({params}) => {
const slug=await params.slug;
console.log(slug)
  return (
    <div>slug page</div>
  )
}

export default blogspage