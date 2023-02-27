import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Inicial() {
   
  return (
    <>
    <div className=' mb-7 -ml-14 flex items-center justify-between ' 
    style={{ width:"100%"}}>
      
        <Image src='/images/hero.png' width={670} height={50}alt="Girl on sofa"
            
        />

        <div>
        <div className=' items-center flex-col mr-28 text-bunner justify-center  ' >
            <p><b>Fashion </b></p>
            <p>that connects </p>
            <p><b>Technology</b> </p>
            <p>that transforms</p>
          
        </div>
        
        <button style={{border:"1px solid black", marginTop:"44px"}}
         className='text-button py-2 px-4  hover:bg-black hover:text-white' >
            <b>SEE NEW COLLECTION</b>  
        </button>
      
        </div>

    </div>

   
    <div className=' mb-7 flex flex-col '>
        <div className='text-center'>
          <p className='text-bunner mb-7'>Where <b>technology</b> meets <b>confort</b></p>
        </div>

    <div className="flex justify-evenly">

      <Link href='/cart' className='flex flex-col items-center'>

      <div className=' bg-black'>
      <Image className=' hover:opacity-80'  src='/images/Card chamadas.png'
      width={324} height={324} alt=' pc' />
      </div>
      <button style={{border:"1px solid black", marginTop:"44px"}}
          className='text-button py-2 px-4  hover:bg-black hover:text-white' >
          <b>TECH FOR ALL</b>    
      </button>
      </Link>
    
      <Link href='/cart' className='flex flex-col items-center'>

      <div className=' bg-black'>
      <Image className=' hover:opacity-80'  src='/images/Card chamadas 2.png'
      width={324} height={324} alt='man with pc' />
      </div>
      <button style={{border:"1px solid black", marginTop:"44px"}}
      className='text-button py-2 px-4  hover:bg-black hover:text-white' >
      <b>MEN´S COLLECTION</b>    
      </button>
      
      </Link>

        <Link href='/cart' className='flex flex-col items-center'>

      <div className=' bg-black'>
      <Image className=' hover:opacity-80'  src='/images/Card chamadas 3.png'
      width={324} height={324} alt='gilr with pc' />
      </div>
      <button style={{border:"1px solid black", marginTop:"44px"}}
      className='text-button py-2 px-4  hover:bg-black hover:text-white' >
      <b>WOMAN COLLECTION</b>    
      </button>
      
      </Link>
          
    </div>
    </div>

   <div style={{width:"100%", height:"300px", backgroundColor:"#f39c94", }} >
   <div className='flex items-center justify-evenly '>
     <Image src='/images/gilrs acessories.png'width={324} height={324} alt='man with pc' />
     <div>
      <p className='text-5xl'><b>50% OFF IN ALL</b></p>
      <p className='text-5xl mb-8'><b>WOMEN'S ACESSORIES</b></p>

      <Link href='/cart' >
      <button style={{border:"1px solid black"}}
      className='text-button py-2 px-4 bg-black text-white hover:bg-white hover:text-black' >
      <b>BUY NOW WITH 50% OFF </b>    
      </button>
      </Link>
      
     </div>
   </div>
  </div>
 
    </>
  )

  
}
