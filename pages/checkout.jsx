/* eslint-disable @next/next/no-html-link-for-pages */

import React, { useState } from 'react'
import CheckoutWizard from '../components/shipping'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { CartContext } from '../Contexts/cartContext'
import { useContext } from 'react'
import { setItem,getItem } from '../services/LocalStorageproducts'




export default function ShippingScreen  () {
  const {register,setFocus,handleSubmit,setValue}=useForm()
  const router=useRouter()
  const{Amount}=useContext(CartContext)




  

  const onSubmit=(e)=>{
    router.push('/payment')
    

  }
  
    const onblurzip=async (e)=>{
      e.preventDefault()
      const zip=e.target.value.replace(/[^0-9]/g,'')
      const apiId=  "ptapi63e0e78054fb56.05582833"
      const res = await fetch(` https://api.duminio.com/ptcp/v2/${apiId}/${zip}`)
      .then(  res => res.json()).then( data => {
      
       
       
       setValue('Street', data[0].Morada);
       setValue("city",data[0].Concelho)
       setValue("neighborhood",data[0].Freguesia)
       setValue("district",data[0].Distrito)
       setFocus("number")
      
    })  
 
    
  }
  
  return (
    <>
      
      <CheckoutWizard activeStep={1}/>
      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-screen-md"  >
      
 <h1 className="mb-4 text-xl"><b>Shipping</b></h1>
   
 <label className='m-80'><input type="checkbox"  /> Use my adress</label>

<div className="relative z-0 w-full mb-6 group">
      <input type="text" id="fullname" className="floating-input peer" placeholder=" " required 
      />   
      <label htmlFor="fullname" className="floating-label">
      
      Full Name *</label>
</div>

  <div className="relative z-0 w-full mb-6 group">
        <input onBlur={onblurzip}  type="text" id="Zipcode" className="floating-input peer"
         placeholder=" "  required 
          
         />
        <label htmlFor="Zip code" className="floating-label">
  
       Zip Code *</label>
  </div>
  
<div className="relative z-0 w-full mb-6 group">
      <input {...register("Street" )}  type="text" id="street" className="floating-input peer"
       placeholder=" " required 
       />   
      <label  htmlFor="street" className="floating-label">
      
      Street *</label>
</div>

<div className="relative z-0 w-44 mb-6 group">
      <input {...register("number")}  type="text" id="number" className="floating-input peer"
       placeholder=" " required  
       />   
      <label htmlFor="number" className="floating-label">
      
     Nº *</label>
</div>

<div className="relative z-0 w-full mb-6 group">
      <input  {...register("complemento")} type="text" id="complement" className="floating-input peer" placeholder=" " 
       />   
      <label htmlFor="complemento" className="floating-label">
      
     Complement</label>
</div>  

<div className='flex justify-between'>
  <div className="relative z-0 w-full mb-6 group">
        <input {...register("city")} type="text" id="city" className="floating-input peer" 
        placeholder=" " required 
         />
        <label htmlFor="city" className="floating-label">
  
       City *</label>
  </div>
  
  <div className="relative z-0 w-full mb-6 group">
        <input {...register("neighborhood")} type="text" id="neighborhood" className="floating-input peer"
         placeholder=" " required 
         />
        <label htmlFor="neighborhood" className="floating-label">
  
        Neighborhood*</label>
  </div>
</div>

<div className='flex justify-between'>
  <div className="relative z-0 w-full mb-6 group">
        <input {...register("district")} type="text" id="district" className="floating-input peer" 
        placeholder=" " required  
         />
        <label htmlFor="district " className="floating-label">
  
        District *</label>
  </div>
  
  <div className="relative z-0 w-full mb-6 group">
        <input   type="text" id="country" className="floating-input peer"
         placeholder=" " required  
        
        />
        <label htmlFor="country" className="floating-label">
        
       Country *</label>
  </div>
</div>
  
  <button  type='submit' className=' mt-08 w-3/4 primary-button'>Next</button> 
  

</form>


    
    </>
  )
}
