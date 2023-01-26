import React, { useState } from 'react'
import { getItem } from '../services/LocalStorageproducts'

export default function CartPage() {
    const [data,setData]=useState(getItem('basket')||[])
    
  return (
    <div>
      <div>Cart</div>
      <div>
        {data.map((e)=><li key={e.id}>{e.id}</li>)}
      </div>
        
    </div>
  ) 
}




