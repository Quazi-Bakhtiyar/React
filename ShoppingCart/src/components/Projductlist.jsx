import React,{useEffect, useState} from 'react'
import Navbar from './Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from '../features/ShopCart/productSlice'
import {addToCart}  from '../features/ShopCart/cartSlice'

function Projductlist() {
  const {items: products, status} = useSelector((state)=>state.products)
  const dispatch = useDispatch()

  useEffect(()=>{
    if(status === 'idle'){
      dispatch(fetchProducts())
    }
  },[status])

  if(status==='Loading') return <p> Loading. Plaese wait</p>
  if(status==='Failed') return <p> failed. Plaese try again.</p>

  return (
    <>
      <Navbar/>
        <div>
        </div>
      <div className="product-list">

        {products.map((product)=>(
          <div key = {product.id} className="product-card">
          <img src={product.image} alt="image" />
          <h2>{product.title.length>20? `${product.title.slice(0,20)}`: product.title}</h2>
          <p>$ {product.price}</p>
          <button onClick={() => dispatch(addToCart(product))}>
            Add To Cart
            
          </button>
          </div>
        ))}
      </div>
    </>
    
  )
}

export default Projductlist