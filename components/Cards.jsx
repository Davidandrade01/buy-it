/* eslint-disable @next/next/no-img-element */

import React from 'react'
import {AiFillStar} from 'react-icons/ai'
import Link from 'next/link'
import { useContext } from 'react'
import { CartContext } from '../Contexts/cartContext'
import Image from 'next/image'
import {MdOutlineFavoriteBorder} from "react-icons/md";


export default function Cards({product}) {

 
  const {productCart, addToCart}=useContext(CartContext)
  const discount=(((product.discountPercentage)/100) *(product.price)).toFixed(2)
  const Valuewithdiscount=((product.price)-discount)
 
  return (
    
    <div style={{width:"324px",height:"451px", margin:"28px"}}>
      <Link href={`/product/${product.id}`}>
      
        <div style={{width:"324px", height:"301px", border:"1px solid black",}}
        className='flex justify-center items-center mb-2 hover:opacity-80 relative'>
        <div className='absolute top-2 right-2'><MdOutlineFavoriteBorder size={24}/></div>
          <Image src={ product.thumbnail || product.image   } height={200} width={200}  alt={product.title} />
        </div>
      </Link>
      <div>
          <p style={{fontSize:"12px", marginBotton:"8px"}}>{product.category}</p>
          <p style={{fontSize:"16px", marginBotton:"8px"}}>{product.title}</p>
          
          {product.discountPercentage > 0  &&
          <div>
          <span style={{fontSize:"16px", marginBotton:"8px", textDecoration:" line-through",marginRight:"8px",color:"#9B9A9A" }}>
          €{product.price}</span>

          <span style={{color:"#dc2626"}}>€{Valuewithdiscount}</span>
          </div>
            
            
          }

          {! product.discountPercentage &&
          
            <p style={{color:"#9B9A9A",fontSize:"12px", marginBotton:"8px"}}>{product.price}</p>
          
          }
          
          
      </div>
      <button style={{border:"1px solid black", marginTop:"8px"}}
         className='text-button py-2 px-4  hover:bg-black hover:text-white' >
            <b>ADD TO CART</b>  
        </button>
    </div>

   
  )
}
