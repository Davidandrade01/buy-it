import React from 'react'
import { BsPerson,BsSearch,BsTruck} from "react-icons/bs";
import { useState } from 'react';
import useDebounce from '../hooks/useDebounce';


export default function SearchBar({value, onChange}) {
  
  //Bounce api
	const[displayvalue, setDisplayValue]=useState(value)
  const debouncedChange=useDebounce(onChange,500)

  function handleChange(e){
    setDisplayValue(e.target.value) 
    debouncedChange(e.target.value)


    
  }

  return (
    <>
     	<div  className="flex mb-3  place-content-center items-center mt-0"  style={{borderBottom: " 1px solid black",}}   >
         <input type="search" value={displayvalue} onChange={handleChange}    className="w-64 ml-8"  placeholder="Hi, what are you looking for today?"   />
	<BsSearch/>
	
	</div>

     
      
    </>
  )
}
