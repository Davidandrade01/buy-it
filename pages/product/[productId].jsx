
import React from 'react'
import styles from '../../styles/productid.module.css'
import Image from 'next/image'
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

  const{productCart,removeCart,clearCart,Amount,individualqtd}=useContext(CartContext)
  return (
    <div className={styles.container}>
    <h1 className={styles.title}><b>{product.title}</b></h1>

    <div className={styles.content}>
      <div clasname={styles.image}>
       <section className={styles.thumb}>
        <Image src={product.thumbnail} width={400} height={400} alt={product.title}/>
       </section>
       <section className={styles.container_dots}>
       <Image className={styles.dots} src={product.images[0]} width={100} height={100} alt={product.title}/>
       <Image  className={styles.dots} src={product.images[1]} width={100} height={100} alt={product.title}/>
       <Image className={styles.dots} src={product.images[2]} width={100} height={100} alt={product.title}/>
      
       </section>
      </div>
        <div className={styles.info}>
        <section>
        <p>New collection</p>
        <p> {product.brand}</p>
        <p>{product.price}</p>
        <p>Description:</p>
        <p>{product.description}</p>
      
        </section>
        </div>
    </div>
      
    </div>
  )
}
