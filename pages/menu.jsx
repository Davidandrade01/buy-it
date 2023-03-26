import React from 'react'
import Cards from '../components/Cards'

import styles from '../styles/menu.module.css'

export async function getServerSideProps(context){
  const {search}=context.query
  const response= await fetch (`https://dummyjson.com/products/category/${search}`)
  const product=await response.json()

  return{
    props:{
     product ,
    },
  }


}


export default function Menu({product}) {

  
  return (
    <div>
      <section>
        <h1>Products</h1>
      </section>
      
      <ul className={styles.container}>
        {
          product.products.map((product)=><Cards key={product.id} product={product}/> )
        }
      </ul>

    </div>
  )
}
