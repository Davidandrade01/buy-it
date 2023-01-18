import React from 'react'
import { createContext, useState } from "react";

export const CartContext=createContext({})

export default function CartProvider({children}) {
    const[productCart,setProductCart]=useState([])

    function addToCart (id){
        const copyProductCart=[...productCart]

        const item=copyProductCart.find((product)=>product.id ===id)
        if(!item){
            copyProductCart.push({id:id,qtd:1})
        }
        else{
            item.qtd=item.qtd+1
        }

       setProductCart(copyProductCart)

        console.log(copyProductCart)
        
    }

    function removeCart(id){
        const copyProductCart=[...productCart]
        const item=copyProductCart.find((product)=>product.id ===id)

        if(item.qtd>1){
            item.qtd=item.qtd-1
            setProductCart(copyProductCart)
        }
        else{
            const arrayfiltered=copyProductCart.filter((product)=>product.id != id)
            setProductCart(arrayfiltered)
        }
        console.log(arrayfiltered)
    }   

  return (
    <CartContext.Provider value={{productCart,addToCart,removeCart}}>
    {children}
    </CartContext.Provider>
  )
  
    
  
}
