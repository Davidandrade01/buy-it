import React from 'react'
import Link from 'next/link'



export default function Login() {


  
  return (
    <>
 
 <form   className="mx-auto max-w-screen-md" >
      
 <h1 className="mb-4 text-xl"><b>Login</b></h1>
<div class="relative z-0 w-full mb-6 group">
      <input type="email" id="email" class="floating-input peer" placeholder=" " />
       
    
     
     
      <label for="email" className="floating-label">
      
      Email address</label>
</div>

<div class="relative z-0 mb-6 group">
      <input type="password " name="password" id="password" class="floating-input peer" placeholder=" " />
      
      
    
      <label for="password" className="floating-label">
      Password
      
      </label>
</div>
  <div className="mb-4 ">
        <button  type='submit' className='primary-button'>Login</button>  
          
  </div>
  <div className="mb-4 ">
          <span>Don&apos;t have an account? </span>
          <Link href='/register' className='  text-blue-500 hover:text-blue-700'>Create here!</Link>
        </div>
      </form>

</>
  )
}
