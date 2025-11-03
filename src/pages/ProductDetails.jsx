import React from 'react'
import { Link, useParams } from 'react-router-dom'
import products from "../data/product"

const ProductDetails = () => {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));

    if (!product) {

        return (
            <div className='text-center py-10'>
                <h2 className='text-2xl font-semibold text-red-500'>Product not found</h2>
                <Link to="/"> Go Back Home</Link>
            </div>
        )
    }



    return (
        <main className='max-w-5xl mx-auto p-6'>
            <div className='grid md:grid-cols-2 gap-8'>
                <img src={product.image} alt={product.name} className="w-full h-[400px] object-cover rounded-lg shadow-md" />



                <div>
                    <h1 className='text-3xl  font-bold mb-4'>{product.name}</h1>
                    <p className='text-2xl font-semibold text-orange-600 mb-4'>₦{product.price.toLocaleString()}</p>
                    <p className='text-gray-700 mb-6'>{product.description}</p>

                    <button className='bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg'>Add to cart</button>

                    <Link to="/" className='ml-4 text-blue-600 hover:underline inline-block'>
                        ← Back to shop
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default ProductDetails