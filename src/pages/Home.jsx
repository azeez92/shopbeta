import React from 'react'
import { Button } from "@material-tailwind/react";
import Hero from "../components/hero"
import ProductCard from "../components/ProductCard"
import products from "../data/product"

const Home = () => {
  return (

<main>
  
  <Hero />

<section className="py-12 px-6 md:px-12 bg-gray-50">

  <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center"> Hot Deals </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {products.map((p) =>(

        <ProductCard key={p.id} product={p} />

    ))}
  </div>
</section>


</main>

  )
}

export default Home