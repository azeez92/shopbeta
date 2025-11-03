import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
      <nav className='bg-blue-800 text-white px-6 py-4 flex justify-between items-center'>
<h1 className='text-2xl font-bold'>shopBeta</h1>

<ul className='hidden md:flex gap-6'>
  <li><Link to="/" className="hover:text-2xl hover:text-yellow-400">Home</Link></li>
  <li><Link to="/shop" className="hover:text-2xl hover:text-yellow-400">Shop</Link></li>
  <li><Link to="/" className="hover:text-2xl hover:text-yellow-400">Cart</Link></li>
</ul>
    </nav>
  )
}

export default Navbar
