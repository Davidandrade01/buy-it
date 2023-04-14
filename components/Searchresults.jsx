import React from 'react'
import { useEffect, useState } from 'react'
import  styles from '../styles/searchresults.module.css'
import Link from "next/link";
import { useRef } from 'react';
import Loading from './Loading';


export default function SearchResults({value}) {
  const[openresults,setOpenresults]=useState(true)//Abertura e fechamento do modal de buscas
  const[info,setInfo]=useState([])
  const[loading, setLoading]=useState(false)
  
  const listRef = useRef();//Referência para definir a regiao da ul de busca



 function load(){

  setLoading(true)
  
   
    setTimeout(()=>{ 
      
      setLoading(false)
      setOpenresults(false)
      
      
  },3500)
 
  } 
 

 useEffect(() => {
  function outside(event) {
    if (listRef.current && !listRef.current.contains(event.target)) {
      setOpenresults(false);
      listRef.current.blur(); // remove o foco da lista
    }
  }

  document.addEventListener("mousedown", outside);
  return () => {
    document.removeEventListener("mousedown", outside);
  };
},);

  useEffect(()=>{ 
    if(value){
    fetch(`https://dummyjson.com/products/search?q=${value}`)
    .then((res)=>res.json())
    .then(res=>{
      setInfo(res);
      setOpenresults(true)
    })
     
  }
 
  },[value])
  

  if(!openresults) return true
 
return (
  <div  className={styles.results_container} ref={listRef} >
      
      { info.products  &&
         
      info.products.map((product)=>(
        <li className={styles.results_li} key={product.id}>
        <Link href={`product/${product.id}`} onClick={load}   >{product.title}</Link></li>
      ))}

      {loading &&
      <Loading/>
      }
  
  

      
  </div>
    
  
)
}

    
 