import React, { useContext } from 'react'
import { StoreContext } from '../../Context/Contex'
import './PlaceOrder.css'

const PlaceOrder = () => {
  const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <form className='placeOrder'>
    <div className='placeOrder-left'>
      <p className='title'>Delivery Information</p>
      <div className='multi-fields'>
        <input type='text' placeholder='First-Name'></input>
        <input type='text' placeholder='Last-Name'></input>
      </div>
    
    <input type='email' placeholder='E-mail Address' />
    <input type='text' placeholder='Street'/>
    <div className='multi-fields'>
        <input type='text' placeholder='City'></input>
        <input type='text' placeholder='District'></input>
      </div>
      <div className='multi-fields'>
        <input type='text' placeholder='Zip Code'></input>
        <input type='text' placeholder='Country'></input>
      </div>
      <input type='text' placeholder='Phone Number' />
      </div>
    <div className='placeOrder-right'>
    <div className='cart-total'>
        <h2>Cart Totals</h2>
        <div className='cart-total-details'>
        <p>Sub Total</p>
        <p>${getTotalCartAmount()}</p>
        </div>
        <hr/>
        <div className='cart-total-details'>
        <p>Delivery Fee</p>
        <p>{2}</p>
        </div>
        <hr/>
        <div className='cart-total-details'>
        <b>Total</b>
        <b>${getTotalCartAmount()+2}</b>
        </div>
        
      </div>
      <button >Proceed to Payment</button>
    
    </div>
      
    </form>
  )
}

export default PlaceOrder
