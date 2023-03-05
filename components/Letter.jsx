import React from 'react'

export default function Letter() {
  return (
    <>
    <div className='w-full h-40 flex flex-col justify-center items-center mb-4' 
    style={{border:"1px solid black"}}>
    <div className='flex flex-col items-center mb-6'>
    <p className='text-medium'><b>GET UPDATES</b> </p>
    <p className='text-base' style={{color:"#484848"}}>AND WIN 10% OFF YOUR FIRST ORDER </p>
    </div>

      <div className='flex  items-end ml-28  '>
          <input type="email" className='w-96 text-center mr-8 ' style={{borderBottom:"1px solid black"}} 
          placeholder="Your email here"
           />
          <button className='cta-btn  '
          style={{border:"1px solid black"}}
          >
          SUBMITION</button>
      </div>
    </div>
    </>
  )
}
