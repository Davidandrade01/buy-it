import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'



//Icons
import {FaStar} from 'react-icons/fa'
import {GrFormClose} from 'react-icons/gr'
import {CiTrash} from 'react-icons/ci'
import {SlBag}from 'react-icons/sl'

//Context
import { useContext } from 'react'
import { CartContext } from '../Contexts/cartContext'

import styles from '../styles/bag.module.css'
 
export default function Bag({open,close}) {
 
  
    const{productCart,removeCart,clearCart,Amount,individualqtd}=useContext(CartContext)
    
    if(!open) return false
  
  return (
    <>
    
      <div  className={styles.bag_container}>
        
        {
        productCart.length==0?
        (
          <>
          <div className='m-2 mb-4 flex items-center justify-end cursor-pointer '>
          <GrFormClose onClick={close} size={20}   />
          </div>
          
            <div className={styles.bag_box}>
            
                <>
                    <Image src="/images/Empty bag.png" width={200} height={200} alt="go Shopping" />
                    Ups.. Empty Cart! 
                    <Link href='/'> <b>Let´s find something cool !</b> </Link>
                </>
            </div>
            </>
        ):
        (
            <>
            <div className='m-2 mb-4 flex items-center justify-between cursor-pointer '> <div className='flex gap-1 items-center'> <SlBag/><b> Bag ({productCart.length})</b></div>
            <GrFormClose onClick={close} size={20}   />
            </div>
            {productCart.map((product)=>(
         
            <div key={product.id} className=' flex flex-col mb-5'>
               
               
                <div className='flex m-2 justify-between'>
                  <div style={{width:"96px", height:"110px", backgroundColor:"#f6f6f6",display:"flex",
                  justifyContent:"center", alignItems:"center"}}>
                  {product.obj.thumbnail&&
                  <Image src={product.obj.images[1]} width={80} height={80} alt={product.title} />
                  }
                  {product.obj.image&&
                  <Image src={product.obj.image} width={80} height={80} alt={product.title} />
                  }
                  </div> 
                  <div className='limit-ch w-36 ml-3'>
                    <p className='mb-2'>{product.obj.title}</p>
                    <p className='mb-2'>{product.obj.category}</p>
                    <p>Qty: ({product.qtd})</p>

                    <div>
                      {product.obj.rating.rate ?
                        <div className=' flex items-center '>
                    <FaStar color='#b8860b' className='mr-2'/> 
                      <span>{product.obj.rating.rate}</span>
                    
                    </div>
                        :
                        <div className=' flex items-center'>
                    <FaStar color='#b8860b' className='mr-2'/> 
                       <span>{product.obj.rating }</span>
                       
                    </div>

                      }
                    </div>
                   

                  </div> 
                  
                    <div className='flex flex-col gap-2 mr-4'>
                      <p> € <b>{product.obj.price}</b> </p>
                      <button onClick={()=>removeCart(product.obj)} className='flex items-end' style={{color:"#FF0505"}}>
                        <CiTrash cursor='pointer' color='#FF0505' size={20} /> 
                        <span className='text-xs cursor-pointer'>Discard</span>   
                      </button>                  
                    </div>
                      

                </div>
                
                <hr className='m-4' />
            
            </div>
            ))}
            <div className='flex justify-end gap-36 mr-4 mb-8'>
              <div>
                <div>Subtotal</div>
                <div style={{color:"#484848", fontSize:"12px"}}>Delivery</div>
              </div> 
              <div>
                <div>€ {Amount}</div>
                {
                  Amount>50?
                  (
                    <div style={{color:"#484848", fontSize:"12px"}} >Free</div>
                  ):(
                    <div style={{color:"#484848", fontSize:"12px"}} >€ 15.00</div>
                  )
                }
                
              </div>  
                     
            </div>
            <div className='flex justify-evenly mb-3'>
                <button style={{border:"1px solid black",width:"176px",}} 
                className="cta-btn"  ><b>BUY MORE</b></button>

                <Link href='/checkout'>
                  <button style={{border:"1px solid black",width:"176px"}}
                  className="btn" ><b>CHECK OUT</b></button>
                </Link>
            </div> 
            <div style={{textAlign:"center", color:"#484848", fontSize:"12px",marginBottom:"16px"}}
            >Tax included</div>
            
            </>
        )
        }
     </div>
    </>
  )
}
