import React, { useState } from 'react'
import { getItem } from '../services/LocalStorageproducts';

export default function CartScreen() {
    const [data,setData]=useState(getItem('carrinho') || [])
  return (
    <>
       <div>cart</div>
        <div>
        
            {data.map((product)=> <div key={product.id}>{product.title}</div> )}
            
        </div>
   </>
  )
   
 
}

