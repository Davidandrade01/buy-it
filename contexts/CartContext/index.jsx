import React from 'react'
import { createContext, useState } from "react";
import { getItem, setItem } from '../../services/LocalStorageproducts';

export const CartContext=createContext({})

export default function CartProvider({children}) {
    const[productCart,setProductCart]=useState(getItem('basket') ||[])

    function addToCart (id){
        const copyProductCart=[...productCart]

        const BasketArr=copyProductCart.find((product)=>product.id === id)
        
        if(!BasketArr){
            copyProductCart.push({id,qtd:1})
            
            

        }
       else{
        BasketArr.qtd=BasketArr.qtd+1
       }

       setProductCart(copyProductCart)
       setItem('basket ', copyProductCart)

        console.log(copyProductCart)
        
    }

    function removeCart(id){
        const copyProductCart=[...productCart]
        const BasketArr=copyProductCart.find((product)=>product.id ===id)

        if(BasketArr && BasketArr.qtd>=1){
            BasketArr.qtd=BasketArr.qtd-1
            setProductCart(copyProductCart)
           
        }
        else{
            const arrayfiltered=copyProductCart.filter((product)=>product.id !== id)
            setProductCart(arrayfiltered)
            
            
        }
        setItem('basket ', copyProductCart)
        console.log(copyProductCart)
    }   

    function clearCart(){
        setProductCart([])
       
    }
   

  return (
    <CartContext.Provider value={{productCart,addToCart,removeCart,clearCart}}>
    {children}
    </CartContext.Provider>
  )
  
    
  
}
