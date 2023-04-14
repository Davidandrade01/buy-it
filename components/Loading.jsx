import React from 'react'
import { useState, useEffect } from 'react'
import MoonLoader from "react-spinners/MoonLoader";
import styles from '../styles/loading.module.css'

export default function Loading({loading }) {
   



  return (
    
           <div className={styles.loading_container}>
               <MoonLoader  color="#000" loading={loading} 
                 size={35}
                 aria-label="Loading Spinner" data-testid="loader"
                     />
           </div>
    
  )
}
