import React from 'react'

function Cart() {
  return (

    <div className="wrapper">
      <div className="cart-page-container">
        <div className="cart-container">
          <h2>Your Items :</h2>
          <div className="cart-item">
            <img src="image url" alt="image" />
            <div className="cart-item-details">
              <h3>Image Title</h3>
              <p>
                Price: $500
              </p>
              <input type="number" min='1' />
              <button>Update</button>
              <button>Remove</button>
            </div>
          </div>
          <div className="cart-total">
          <p>Total : $200</p>
        </div>
        <button className='back-button'>Go Back to Shopping</button>
        </div>
        
      </div>
    </div>
  
  )
}

export default Cart