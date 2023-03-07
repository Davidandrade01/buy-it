import React, { useEffect } from 'react'
import styles from '../styles/animation.module.css'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../Contexts/cartContext'


export default function Detailmodal({setShowDetailModal, product}) {

     
  
  
  return (
    <div  onMouseLeave={()=>setShowDetailModal(false)} style={{border:"1px solid black",width:"600px",height:"600px", 
    backgroundColor:"blueviolet",  }}>
            
          
            <h1>{product.title}</h1>
            
            
    </div>
  )
}
