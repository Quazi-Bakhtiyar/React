import React from 'react'
import { useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { removeItem } from '../features/ShopCart/cartSlice'
import { useDispatch } from 'react-redux'
function Cart() {
  const dispatch = useDispatch()
  const { items:cartItems , tempItems , totalPrice} = useSelector(state=>state.cart)

  const navigate = useNavigate()
  const handleRemoveItem = (id) => {
    dispatch(removeItem(id))
  }

  return (

    <div className="wrapper">
      <div className="cart-page-container">
        <div className="cart-container">
          <h2>Your Items :</h2>

          {
            cartItems.map((item)=>(
              <div className="cart-item" key={item.id}>
            <img src={item.image} alt="image" />
            <div className="cart-item-details">
              <h3>{item.title}</h3>
              <p>
                Price: $ {item.price}
              </p>
              <input type="number" min='1' />
              <button>Update</button>
              <button onClick={()=>handleRemoveItem(item.id)}>Remove</button>
            </div>
          </div>
            ))
            }

          <div className="cart-total">
          <p>Total : {totalPrice}</p>
        </div>
        <button className='back-button' onClick={()=> navigate('/')}  >Go Back to Shopping</button>
        </div>
        
      </div>
    </div>
  
  )
}

export default Cart