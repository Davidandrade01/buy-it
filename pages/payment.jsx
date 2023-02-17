import React, { useContext } from "react";
import CheckoutWizard from '../components/shipping'
import { PayPalButtons } from '@paypal/react-paypal-js'
import { router } from 'next/router'
import { CartContext } from '../Contexts/cartContext'
import { useAuthValue } from "../contexts/AuthContext";



export default function Payment() {

  const {Amount,clearCart}=useContext(CartContext)
  const {user}=useAuthValue()
 
  console.log(Amount)
  return (
    <>
      <CheckoutWizard activeStep={2}/>
      <h1> Payment</h1>
      <PayPalButtons
        createOrder={(data,actions)=>{
          return actions.order.create({
            purchase_units:[{
              amount:{
                value:Amount,
              }
            }]
          })
        }}
        onApprove={(data,actions)=>{
          
          return actions.order.capture().then(function(datails){
            alert("aproved"+ datails.payer.name.user.displayName)
            clearCart()
            router.push('/thanks')
          })
        }}
      />
      
      

    </>
  )
}
