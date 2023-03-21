
import React from 'react'
import styles from '../../styles/productid.module.css'
import Image from 'next/image'
import { useState } from 'react'
//icones
import {CiTrash} from 'react-icons/ci'

//context
import { CartContext } from '../../Contexts/cartContext'
import { useContext } from 'react'


export const getStaticProps=async(context)=>{

  const {params}=context
  
  const res= await fetch(`https://dummyjson.com/products/${params.productId}`)
  const product= await res.json()

  return{
    props:{product}
  }
}






export const getStaticPaths= async()=>{

    const apiUrl2="https://dummyjson.com/products/"

    const res= await fetch(apiUrl2)
    const data=await res.json()
    const paths= data.products.map((product)=>{
        return{
            params:{productId:`${product.id}`}
        }
    })
    return{
        paths, 
        fallback:false
    }

}




export default function ProductId({product}) {

  const[size, setSize]=useState(100)

  const scale=()=>{
    setSize(200)
  }

  const scaleOut=()=>{
    setSize(100)
  }

  const{productCart,removeCart,addToCart,clearCart,Amount,individualqtd}=useContext(CartContext)
  return (
    <div className={styles.container}>
    <h1  className={styles.title}><b className='text-medium'>{product.title}</b></h1>

    <div className={styles.content}>
      <div clasname={styles.image}>
       <section className={styles.thumb}>
        <Image  src={product.thumbnail} width={400} height={400} alt={product.title}/>
       </section>
       <section className={styles.container_dots}>
       <div onMouseEnter={scale} onMouseLeave={scaleOut}>
         
         <Image  className={styles.dots} src={product.images[0]} width={`${size}`} height={`${size}`} alt={product.title}/>
       </div>

       <div>
         <Image  className={styles.dots} src={product.images[1]} width={100} height={100} alt={product.title}/>
       </div>
       
       <Image   className={styles.dots} src={product.images[2]} width={100} height={100} alt={product.title}/>
       </section>
      </div>
        <div className={styles.info}>
        <section >
        <p style={{color:"#9B9A9A"}} className='text-button'>New collection</p>
        <div className='flex justify-between text-medium mb-6'><span>{product.brand}</span>  <span> €{product.price}</span></div>
        
        <p style={{color:"#9B9A9A"}} className='text-button'>Description:</p>
        <p>{product.description}</p>
        </section>

        <section className={styles.container_qty}>
          <div className={styles.content_qty}>
            <span>Qty:</span>
              <button onClick={()=>addToCart(product)} className={styles.add_sub}>+</button>
              {productCart.map((product)=>(<div key={product.id}className={styles.individual_qty}>
            
                      {product.qtd}
                    </div>))}
                    <button onClick={()=>removeCart(product)}  className={styles.add_sub}>-</button>
            
            
          </div>
                
                  <button className={styles.btn_discard}>
                   <CiTrash size={20}/>  Discard
                   </button>
                
        </section>
        <button style={{border:"1px solid black, "}} className='cta-btn w-full '>See My Bag</button>
        </div>
    </div>
      
    </div>
  )
}
