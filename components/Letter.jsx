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

      <form action="https://buy-it.us13.list-manage.com/subscribe/post?u=d1dea8f3f6c2acfced4fefe92&amp;id=982e1bf08d&amp;f_id=0026e7e2f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_self"
      className='flex  items-end ml-28  '>
          <input type="email" name="EMAIL" class="required email" id="mce-EMAIL" required
           className='w-96 text-center mr-8 ' style={{borderBottom:"1px solid black"}} 
          placeholder="Your email here"
           />
          
            
          <input className='cta-btn cursor-pointer  '
              style={{border:"1px solid black"}} type="submit" value="SUBSCRIBE HERE"/>
          
         
      </form>
    </div>
    </>
  )
}






