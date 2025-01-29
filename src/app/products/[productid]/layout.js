import React from 'react'


export async function generateMetadata({params}){
    const id=await params.productid
    return{
        title:`product by id ${id}`
    }
} 
const ProductLayout = () => {
  return (
    <div>ProductLayout</div>
  )
}
 
export default ProductLayout