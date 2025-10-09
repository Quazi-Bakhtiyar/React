import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


function Navbar() {
  const cartTotal = useSelector(state=>(state.cart.items.length))
  return (
    <nav>
      <h1>ShoppingCart</h1>

      <Link to='/'>
      Home 
      </Link>

      <Link to="/cart">Cart ({cartTotal})</Link>
    </nav>
  )
}

export default Navbar