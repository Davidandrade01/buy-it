/* eslint-disable @next/next/no-img-element */

import React from 'react'
import {AiFillStar} from 'react-icons/ai'
import Link from 'next/link'
import { useContext } from 'react'
import { CartContext } from '../Contexts/cartContext'


export default function Cards({product}) {
  const {productCart, addToCart}=useContext(CartContext)
  return (
    
      <div className='card'>


<div className=' flex flex-col items-center justify-center m-4  '>
  


<Link href={`/product/${product.id}`}>
  <img className='h-80 w-80 m-4 ' src={product.thumbnail} alt={product.title}  />
  
  <div className=' overflow-hidden  h-20'>
  <p className='text-center text-xs m-4'>{product.category}</p>
  <p className='font-bold text-sm text-center m-4 '>{product.title}   </p>
  </div>
</Link> 



<div className='flex justify-between text-sm items-center m-4 '>
<span><AiFillStar color='#FFF200'/></span>

<span> {product.rating.rate} {product.rating.count} Reviews</span>
</div>

<div className='flex justify-between gap-10 items-center m-4'> 
<span>€{product.price}</span>
<button className='primary-button' type='button' onClick={() => addToCart(product)}>Add to cart</button>
</div>


</div>

    </div>
  )
}
