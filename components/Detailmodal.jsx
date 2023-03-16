import React, { useEffect } from 'react'

import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../Contexts/cartContext'
import styles from "../styles/modal.module.css"


export default function Detailmodal({setShowDetailModal, product}) {

     
  
  
  return (
    <div className={styles.background}>
      <div  className={styles.modal}  onMouseLeave={()=>setShowDetailModal(false)} style={{border:"1px solid black",width:"600px",height:"600px",
      backgroundColor:"blueviolet"   }}>
      
      
              <h1>{product.title}</h1>
      
      
      </div>
      </div>
  )
}
