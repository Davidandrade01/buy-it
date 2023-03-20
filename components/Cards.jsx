/* eslint-disable @next/next/no-img-element */

import React, { useEffect } from 'react'
import {AiFillStar} from 'react-icons/ai'
import Link from 'next/link'
import { useContext } from 'react'
import { CartContext } from '../Contexts/cartContext'
import Image from 'next/image'
import {MdOutlineFavoriteBorder} from "react-icons/md";
import { useState } from 'react'
import Detailmodal from './Detailmodal'





export default function Cards({product,onCardClick}) {

 const[favcolor,setFavcolor]=useState(false)
 

 const {addToCart}=useContext(CartContext)
 const Api="https://fakestoreapi.com/products"

 const discount=(((product.discountPercentage)/100) *(product.price)).toFixed(2)
 const Valuewithdiscount=((product.price)-discount)

 const changefavcolor=()=>{
  setFavcolor(!favcolor)
 }







 
 
  return (
    <>
    <div style={{width:"324px",height:"451px", margin:"12px"}}>
 
      
      
        <div style={{width:"324px", height:"301px", border:"1px solid black",cursor:"pointer"}}
        className='flex justify-center items-center mb-2 hover:opacity-80 relative '>
             <MdOutlineFavoriteBorder   onClick={changefavcolor} size={24} style={{fill :favcolor ? "#D51451":"#000000"}}
      className='absolute top-2 right-2'  
    />
          <div  onClick={() => onCardClick ? onCardClick(product) : null}
            key={product.id}>

          <div style={{width:"200px", height:"200px"}}>
          {product.images &&
            <Image src={ product.images[1]} height={400} width={400}  
            alt={product.title} className="max-w-fit max-h-full " />
          }

          {product.image &&
            <Image src={ product.image} height={400} width={400}  
            alt={product.title} className="max-w-fit max-h-full " />
          }
            
          </div>
          </div>
        </div>
      
      <div className='text-left'>
          <p style={{fontSize:"12px", marginBotton:"8px"}}>{product.category}</p>
          <p style={{fontSize:"16px", marginBotton:"8px"}} className='limit-ch'>{product.title}</p>
          
          
          {product.discountPercentage > 0  &&
          <div>
          <span style={{fontSize:"16px", marginBotton:"8px", textDecoration:" line-through",marginRight:"8px",color:"#9B9A9A" }}>
          €{product.price}</span>

          <span style={{color:"#dc2626"}}>€{Valuewithdiscount}</span>
          </div>
            
            
          }

          {! product.discountPercentage &&
          
            <p style={{color:"#9B9A9A",fontSize:"12px", marginBotton:"8px"}}> € {product.price}</p>
          
          }
          
          
      </div>
      <button onClick={()=>addToCart(product)}
         style={{border:"1px solid black", marginTop:"8px"}}
         className='cta-btn' >
            <b>ADD TO CART</b>  
        </button>
    </div>
         
         
         
         
       
         
    </>
  )
}
