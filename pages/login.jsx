import React from 'react'
import Link from 'next/link'

export default function Login() {
  return (
    <>
 
 <form className="mx-auto max-w-screen-md">
      
 <h1 className="mb-4 text-xl"><b>Login</b></h1>
<div class="relative z-0 w-full mb-6 group">
      <input type="text" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-2/4 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
      
      Email address</label>
</div>

<div class="relative z-0 mb-6 group">
      <input type="email" name="password" id="password" class="block py-2.5 px-0 w-2/4 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
      Password
      
      </label>
</div>

  <div className="mb-4 ">
          <span>Don&apos;t have an account? </span>
          
        </div>
      </form>

</>
  )
}
