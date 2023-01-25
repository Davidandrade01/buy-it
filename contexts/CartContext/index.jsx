import React from 'react'
import { createContext, useState } from "react";
import { getItem, setItem } from '../../services/LocalStorageproducts';

export const CartContext=createContext({})

export default function CartProvider({children}) {
    const[productCart,setProductCart]=useState(getItem('carrinho') ||[])

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
       setItem('carrinho ', copyProductCart)

        console.log(copyProductCart)
        
    }

    function removeCart(id){
        const copyProductCart=[...productCart]
        const item=copyProductCart.find((product)=>product.id ===id)

        if(item && item.qtd>=1){
            item.qtd=item.qtd-1
            setProductCart(copyProductCart)
           
        }
        else{
            const arrayfiltered=copyProductCart.filter((product)=>product.id !== id)
            setProductCart(arrayfiltered)
            
            
        }
        setItem('carrinho ', copyProductCart)
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
