import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({product}) => {
  return (
    <div className='bg-white shadow-md rounded-xl overflow-hidden hover:scale-110 transition-transform duration-300'>
       <img src={product.image || "https://image.com?text=No+Image"} alt="" className='h-48 w-full object-cover' /> 
       <section className='p-4'>
            <h3 className='text-lg font-semibold text-gray-800'>{product.name }</h3>
           
            <p className='text-gray-600 mb-3'>₦{product.price.toLocaleString()}</p>
            <Link to={`/product/${product.id}`}>
            <button className='mt-3 bg-blue-700 text-white mr-2 px-2 py-2 rounded hover:bg-blue-800'>View Details</button>
            </Link>
              <button className='bg-green inline-block '>Add to cart</button>

       </section>
    </div>
  )
}

export default ProductCard