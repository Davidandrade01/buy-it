
import React from 'react'
import CheckoutWizard from '../components/shipping'
import { useForm } from 'react-hook-form'


export default function ShippingScreen  () {
  const {register,setFocus,handleSubmit,setValue}=useForm()

 

  
  
    const onblurzip=async (e)=>{
      e.preventDefault()
      const zip=e.target.value.replace(/[^0-9]/g,'')
      
      const res = await fetch(`https://json.geoapi.pt/cp/${zip}`)
      .then(  res => res.json()).then( data => {
       console.log(data)
       setValue('Street', data.ruas);
       setValue('city', data.Concelho)
       setValue("district",data.Distrito)
      
       
      
    })  
  }
  
  return (
    <>
    
      <CheckoutWizard activeStep={1}/>
      <form  className="mx-auto max-w-screen-md"  >
      
 <h1 className="mb-4 text-xl"><b>Shipping</b></h1>

 <label className='m-80'><input type="checkbox"  /> Use my adress</label>

<div className="relative z-0 w-full mb-6 group">
      <input type="text" id="fullname" className="floating-input peer" placeholder=" " 
       />   
      <label htmlFor="fullname" className="floating-label">
      
      Full Name *</label>
</div>

  <div className="relative z-0 w-full mb-6 group">
        <input onBlur={onblurzip}  type="text" id="Zipcode" className="floating-input peer" placeholder=" " 
         />
        <label htmlFor="Zip code" className="floating-label">
  
       Zip Code *</label>
  </div>
  
<div className="relative z-0 w-full mb-6 group">
      <input {...register("Street" )}  type="text" id="street" className="floating-input peer" placeholder=" " 
       />   
      <label  htmlFor="street" className="floating-label">
      
      Street *</label>
</div>

<div className="relative z-0 w-44 mb-6 group">
      <input {...register("number")}  type="text" id="number" className="floating-input peer" placeholder=" " 
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
        <input {...register("city")} type="text" id="city" className="floating-input peer" placeholder=" " 
         />
        <label htmlFor="city" className="floating-label">
  
       City *</label>
  </div>
  
  <div className="relative z-0 w-full mb-6 group">
        <input {...register("neighborhood")} type="text" id="neighborhood" className="floating-input peer" placeholder=" " 
         />
        <label htmlFor="neighborhood" className="floating-label">
  
        Neighborhood*</label>
  </div>
</div>

<div className='flex justify-between'>
  <div className="relative z-0 w-full mb-6 group">
        <input {...register("district")} type="text" id="county" className="floating-input peer" placeholder=" " 
         />
        <label htmlFor="district " className="floating-label">
  
        District *</label>
  </div>
  
  <div className="relative z-0 w-full mb-6 group">
        <input   type="text" id="city" className="floating-input peer" placeholder=" " 
         />
        <label htmlFor="country" className="floating-label">
  
       Country *</label>
  </div>
</div>
  <button  type='submit' className=' mt-10 w-3/4 primary-button'>Next</button> 
</form>
    
    
    </>
  )
}
