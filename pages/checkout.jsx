import React from 'react'
import CheckoutWizard from '../components/shipping'

export default function ShippingScreen  () {
  return (
    <>
      <CheckoutWizard activeStep={1}/>
      <form className="mx-auto max-w-screen-md" >
      
 <h1 className="mb-4 text-xl"><b>Shipping</b></h1>

 <label className='m-80'><input type="checkbox"  /> Delivery to me</label>
<div class="relative z-0 w-full mb-6 group">
      <input type="text" id="Name" class="floating-input peer" placeholder=" "
       />   
      <label for="Full Name" className="floating-label">
      
      Full Name</label>
</div>


  <div class="relative z-0 w-full mb-6 group">
        <input type="text" id="Zipcode" class="floating-input peer" placeholder=" "
         />
        <label for="Zip code" className="floating-label">
  
       Zip Code</label>
  </div>
  
<div class="relative z-0 w-full mb-6 group">
      <input type="text" id="Adress" class="floating-input peer" placeholder=" "
       />   
      <label for="Adress" className="floating-label">
      
     Adress</label>
</div>

<div class="relative z-0 w-44 mb-6 group">
      <input type="text" id="number" class="floating-input peer" placeholder=" "
       />   
      <label for="number" className="floating-label">
      
     Nº</label>
</div>

<div class="relative z-0 w-full mb-6 group">
      <input type="text" id="complement" class="floating-input peer" placeholder=" "
       />   
      <label for="complement" className="floating-label">
      
     Complement</label>
</div>

<div className='flex justify-between'>
  <div class="relative z-0 w-full mb-6 group">
        <input type="text" id="city" class="floating-input peer" placeholder=" "
         />
        <label for="city" className="floating-label">
  
       City </label>
  </div>
  
  <div class="relative z-0 w-full mb-6 group">
        <input type="text" id="city" class="floating-input peer" placeholder=" "
         />
        <label for="country" className="floating-label">
  
       Country</label>
  </div>
</div>

</form>
    </>
  )
}
