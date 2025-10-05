import React from 'react'
import Navbar from './Navbar'

function Projductlist() {
  return (
    <>
      <Navbar/>
      <div className="product-list">
        <div className="product-card">
          <img src="image url" alt="image" />
          <h2>Product Title</h2>
          <p>Price : $300</p>
          <button>Add To Cart</button>
        </div>
      </div>
    </>
    
  )
}

export default Projductlist