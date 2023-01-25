
import React, { useState } from 'react'
import { getItem } from '../services/LocalStorageproducts'

export default function Cart() {
  const [productCart,setData]=useState(getItem('carrinho') || [])
  return (
    <>
  <div> Shopping cart</div>
    <div>
      {
        productCart.length=== 0 ?
      (<div>Cart is empty!</div>)
      :
      (<div>
          ok!!
      </div>)
      }
    </div>
    </>
    
  )
}
