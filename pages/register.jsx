import { useState, useEffect } from 'react'
import { useAuthentication } from '../hooks/useAuthentication'
import{FiEye,FiEyeOff} from 'react-icons/fi'
import styles  from  '../styles/register.module.css'

export default function Register() {

      const[displayName, setDisplayName]=useState("")
      const[email, setEmail]=useState("")
      const[password, setPassword]=useState("")
      const[confirmPassword, setConfirmPassword]=useState("")
      const [error, setError]=useState("")
      const[hidepass,setHidepass]=useState(false)

      const{createUser,error:authError,loading}=useAuthentication()
      
 const showpass=()=>{
      setHidepass(prevState=>!prevState)
      
 }
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
 
 <form onSubmit={handleSubmit} className={styles.register_container} >
      


 <div className={styles.inputs}>
      <input type="displayName" id="displayName" class="floating-input peer" placeholder=" " 
       value={displayName}
       onChange={(e)=>setDisplayName(e.target.value)}  
        
      />
        
      <label for="Name" className="floating-label">Name</label>
</div>

<div className={styles.inputs}>
      <input type="email" id="email" class="floating-input peer" placeholder=" " 
       value={email}
       onChange={(e)=>setEmail(e.target.value)} 
            
      />
      
      <label for="email" className="floating-label">Email address *</label>
</div>

<div className={styles.inputs}>
      <input type={hidepass ?"text":"password"}  name="password" id="password" class="floating-input peer" 
      placeholder="  " 
      value={password}
       onChange={(e)=>setPassword(e.target.value)} 
          
      />
       <label for="password" className="floating-label" > Password * </label>
       <button onClick={showpass}>
       {
            hidepass ? <FiEye/>  : <FiEyeOff/>
       }
       </button>
</div>

<div className={styles.inputs}>
      <input type={hidepass ? "text": "password"} name="confirm Password" id="confirm Passwordassword" class="floating-input peer" 
      placeholder=" " 
      value={confirmPassword}
       onChange={(e)=>setConfirmPassword(e.target.value)}   
      />
       <label for="Confirm Password" className="floating-label"> Confirm Password *</label>
       <button onClick={showpass}>
       
       {
           hidepass ? <FiEye/>: <FiEyeOff/> 
       }
      
       </button>
</div>

  <div className="mb-4 ">
        <button  type='submit' className='cta-btn'>Register</button> 

      
          
  </div>
{error && <p class='text-red-500'>{error}</p>} 

  
  
      </form>

</>
  )
}
