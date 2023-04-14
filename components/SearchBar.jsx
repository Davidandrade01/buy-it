import React from 'react'
import { BsPerson,BsSearch,BsTruck} from "react-icons/bs";
import { useState } from 'react';


//styles
import styles from '../styles/searchbar.module.css'
import { useEffect } from 'react';


export default function SearchBar({value, onChange}) {
  
  

function handleChange(e){
onChange(e.target.value)
}
  


  return (
    <>
     	
         <div className={styles.search_container}>
         <input type= "search" className={styles.search_input} value={value} onChange={handleChange} 
         placeholder="Hi, what are you looking for today?"   />
         </div>
	
       
	

     
      
    </>
  )
}
