import { useState, useEffect } from 'react'
import { useAuthentication } from '../hooks/useAuthentication'

export default function Register() {

      const[displayName, setDisplayName]=useState("")
      const[email, setEmail]=useState("")
      const[password, setPassword]=useState("")
      const[confirmPassword, setConfirmPassword]=useState("")
      const [error, setError]=useState("")

      const{createUser,error:authError,loading}=useAuthentication()
      

  const handleSubmit= async(e)=>{
      e.preventDefault()
      setError("")

      const user={
            displayName,
            email,
            password
      }
      if(password!==confirmPassword){
            setError("Passwords don't match!")
            return
      }

      const res=await createUser(user)

      console.log(res)
  }
  useEffect(()=>{
      if(authError){
setError(authError)
      }
      
  },[authError])

  return (
    <>
 
 <form onSubmit={handleSubmit} className="mx-auto max-w-screen-md" >
      
 <h1 className="mb-4 text-xl"><b>Register</b></h1>

 <div class="relative z-0 w-full mb-6 group">
      <input type="displayName" id="displayName" class="floating-input peer" placeholder=" " 
       value={displayName}
       onChange={(e)=>setDisplayName(e.target.value)}     
      />
      
      <label for="Name" className="floating-label">Name</label>
</div>

<div class="relative z-0 w-full mb-6 group">
      <input type="email" id="email" class="floating-input peer" placeholder=" " 
       value={email}
       onChange={(e)=>setEmail(e.target.value)} 
            
      />
      
      <label for="email" className="floating-label">Email address *</label>
</div>

<div class="relative z-0 mb-6 group">
      <input type="password " name="password" id="password" class="floating-input peer" 
      placeholder=" " 
      value={password}
       onChange={(e)=>setPassword(e.target.value)} 
          
      />
       <label for="password" className="floating-label" > Password *</label>
</div>

<div class="relative z-0 mb-6 group">
      <input type="password " name="confirm Password" id="confirm Passwordassword" class="floating-input peer" 
      placeholder=" " 
      value={confirmPassword}
       onChange={(e)=>setConfirmPassword(e.target.value)}   
      />
       <label for="Confirm Password" className="floating-label"> Confirm Password *</label>
</div>

  <div className="mb-4 ">
        <button  type='submit' className='primary-button'>Register</button> 

      
          
  </div>
{error && <p class='text-red-500'>{error}</p>} 

  
  
      </form>

</>
  )
}
