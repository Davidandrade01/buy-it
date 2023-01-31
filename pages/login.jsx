import React from 'react'
import Link from 'next/link'
import { useForm } from "react-hook-form"


export default function Login() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const SubmitFunc=({email,password})=>{
    console.log(email,password)

  }
  return (
    <>
 
 <form  onSubmit={handleSubmit(SubmitFunc)} className="mx-auto max-w-screen-md" >
      
 <h1 className="mb-4 text-xl"><b>Login</b></h1>
<div class="relative z-0 w-full mb-6 group">
      <input type="email" id="email" class="floating-input peer" placeholder=" "  
       {...register ('email',
      {required:'Please, enter a email.',
      pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      message:"This is not a valid email. Try including '@'"
      }
      
      })} />

     {errors.email &&(<div className='text-red-500'>{errors.email.message} </div>)}
     
      <label for="email" className="floating-label">
      
      Email address</label>
</div>

<div class="relative z-0 mb-6 group">
      <input type="password " name="password" id="password" class="floating-input peer" placeholder=" " 
      {...register ('password',
      {required:'Please, enter password',
      minLength:{value:6, message:'Password is more than 5 characters'},
      
      }
      )}
       />
       {errors.password &&(<div className='text-red-500'>{errors.password.message} </div>)}
      <label for="password" className="floating-label">
      Password
      
      </label>
</div>
  <div className="mb-4 ">
        <button  type='submit' className='primary-button'>Login</button>  
          
  </div>
  <div className="mb-4 ">
          <span>Don&apos;t have an account? </span>
          <Link href='/register'>Register</Link>
        </div>
      </form>

</>
  )
}
