import React from 'react'
import Image from 'next/image'

export default function Inicial() {
    const newLocal = ''
  return (
    <>
    <div className=' -ml-14 flex items-center justify-between ' 
    style={{borderBottom:"2px solid black", width:"100%"}}>
      
        <Image src='/images/hero.png' width={826} height={451}alt="Girl on sofa"
            
        />

        <div>
        <div className=' items-center flex-col mr-28 text-bunner justify-center  ' >
            <p><b>Fashion </b></p>
            <p>that connects </p>
            <p><b>Technology</b> </p>
            <p>that transforms</p>
          
        </div>

        <button style={{border:"1px solid black", marginTop:"44px"}}
         className='text-button py-2 px-4' >
            <b>See New Collection</b>  
        </button>
      
        </div>

    </div>
  
    <div className='flex flex-col items-center'>
        <p className='text-bunner'>Where <b>technology</b> meets <b>confort</b></p>
    <div className="flex mb-4 justify-evenly">
    <Image className='"w-1/3' src='/images/Card chamadas.png' width={324} height={324} alt='sdsd' />
    <Image className='"w-1/3' src='/images/Card chamadas 2.png' width={324} height={324} alt='sdsd' />
    <Image className='"w-1/3' src='/images/Card chamadas 3.png' width={324} height={324} alt='sdsd' />
    </div>
    </div>

    </>
  )
}
