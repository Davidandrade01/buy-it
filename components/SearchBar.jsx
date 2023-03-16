import React from 'react'
import { BsPerson,BsSearch,BsTruck} from "react-icons/bs";

export default function SearchBar({value, onChange}) {
  
  

  function handleChange(e){
    
   onChange(e.target.value)


    
  }

  return (
    <>
     	<div className="flex mb-3  place-content-center items-center mt-0"  style={{borderBottom: " 1px solid black",}}   >
         <input type="search" value={value} onChange={handleChange}    className="w-64 ml-8"  placeholder="Hi, what are you looking for today?"   />
	<BsSearch/>
	
	</div>

     
      
    </>
  )
}
