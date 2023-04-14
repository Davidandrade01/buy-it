import React from 'react'
import Link from 'next/link'
import { useState,useEffect } from 'react'
import { useAuthentication } from '../hooks/useAuthentication'
import { router } from 'next/router'
import{FiEye,FiEyeOff} from 'react-icons/fi'
import styles from '../styles/login.module.css'



export default function Login() {

  
  const[email, setEmail]=useState("")
  const[password, setPassword]=useState("")
  const [error, setError]=useState("")

  const{login,error:authError,loading}=useAuthentication()
  const[hidepass,setHidePass]=useState(false)
  
  const showpass=()=>{
    setHidePass(prevState=>!prevState)
  }

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
 
 <form  onSubmit={handleSubmit}  className={styles.login_container}  >
      
 
<div className={styles.inputs}>
      <input type="email" id="email" class="floating-input peer" placeholder=" "
      value={email} onChange={(e)=>setEmail(e.target.value)} />   
      <label for="email" className="floating-label">
      
      Email address *</label>
</div>

<div className={styles.inputs}>
      <input type={hidepass ? "text":"password"} name="password" id="password" class="floating-input peer" placeholder=" "
      value={password} onChange={(e)=>setPassword(e.target.value)}   />
    
      <label for="password" className="floating-label">
      Password *
      
      </label>
      <button onClick={showpass}>
       {
            hidepass ? <FiEye/>  : <FiEyeOff/>
       }
       </button>
</div>

  <div className="mb-4 ">
        <button  type='submit' className='cta-btn'>Login</button>        
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
