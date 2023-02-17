import React from 'react'
import CheckoutWizard from '../components/shipping'

export default function thanks() {
  return (
   <>
    <CheckoutWizard activeStep={3}/>
      
      <div>
        <h2>Thanks for shopping</h2>
        <button> See more </button> 
         
        <button> See my order status</button>
      </div>
      </> 
    )

   
}
