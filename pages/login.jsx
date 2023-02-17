import React from 'react'
import Link from 'next/link'
import { useState,useEffect } from 'react'
import { useAuthentication } from '../hooks/useAuthentication'
import { router } from 'next/router'



export default function Login() {

  
  const[email, setEmail]=useState("")
  const[password, setPassword]=useState("")
  const [error, setError]=useState("")

  const{login,error:authError,loading}=useAuthentication()
  

const handleSubmit= async(e)=>{
  e.preventDefault()
  setError("")

  const user={
        
        email,
        password
  }


  const res=await login(user)

  console.log(res)

  router.push('/')
}
useEffect(()=>{
  console.log(authError)
  if(authError){
    setError(authError)
  }
  
},[authError])
  
  return (
    <>
 
 <form  onSubmit={handleSubmit}  className="mx-auto max-w-screen-md" >
      
 <h1 className="mb-4 text-xl"><b>Login</b></h1>
<div class="relative z-0 w-full mb-6 group">
      <input type="email" id="email" class="floating-input peer" placeholder=" "
      value={email} onChange={(e)=>setEmail(e.target.value)} />   
      <label for="email" className="floating-label">
      
      Email address *</label>
</div>

<div class="relative z-0 mb-6 group">
      <input type="password " name="password" id="password" class="floating-input peer" placeholder=" "
      value={password} onChange={(e)=>setPassword(e.target.value)} />
    
      <label for="password" className="floating-label">
      Password *
      
      </label>
</div>

  <div className="mb-4 ">
        <button  type='submit' className='primary-button'>Login</button>        
  </div>

  <div className="mb-4 ">
          <span>Don&apos;t have an account? </span>
          <Link href='/register' className='  text-blue-500 hover:text-blue-700'>Create here!</Link>
        </div>
        {error && <p class='text-red-500'>{error}</p>} 
      </form>

</>
  )
}
