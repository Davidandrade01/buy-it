import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Cards from '../components/Cards'
import Letter from '../components/Letter';


export  async  function getStaticProps() {

  
  const api1="https://fakestoreapi.com/products/1"
  const api2="https://fakestoreapi.com/products/3"
  const api3="https://fakestoreapi.com/products/2"
  const api4="https://fakestoreapi.com/products/17"
  const api5="https://fakestoreapi.com/products/4"
  const api6="https://fakestoreapi.com/products/15"

  const api7='https://dummyjson.com/products/6'
  const api8='https://dummyjson.com/products/9'
  const api9='https://dummyjson.com/products/10'
  const api10='https://dummyjson.com/products/90'
  const api11='https://dummyjson.com/products/62'
  const api12='https://dummyjson.com/products/4'
  
  
  const res1= await fetch(`${api1}`)
  const item1= await res1.json()

  const res2= await fetch(`${api2}`)
  const item2= await res2.json()

  const res3= await fetch(`${api3}`)
  const item3= await res3.json()

  const res4= await fetch(`${api4}`)
  const item4= await res4.json()

  const res5= await fetch(`${api5}`)
  const item5= await res5.json()

  const res6= await fetch(`${api6}`)
  const item6= await res6.json()


  const res7= await fetch(`${api7}`)
  const item7= await res7.json()

  const res8= await fetch(`${api8}`)
  const item8= await res8.json()

  const res9= await fetch(`${api9}`)
  const item9= await res9.json()

  const res10= await fetch(`${api10}`)
  const item10= await res10.json()

  const res11= await fetch(`${api11}`)
  const item11= await res11.json()

  const res12= await fetch(`${api12}`)
  const item12= await res12.json()
  //console.log(items)
 
  return{
      props:{
          item1,item2,item3,item4,item5,item6,
          item7,item8, item9,item10,item11,item12
      }
  }


}


export default function Inicial({item1,item2,item3,
  item4,item5,item6,item7,item8, item9, item10, item11, item12}) {
   
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
         className='btn' >
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
          className='text-button btn' >
          <b>TECH FOR ALL</b>    
      </button>
      </Link>
    
      <Link href='/cart' className='flex flex-col items-center'>

      <div className=' bg-black'>
      <Image className=' hover:opacity-80'  src='/images/Card chamadas 2.png'
      width={324} height={324} alt='man with pc' />
      </div>
      <button style={{border:"1px solid black", marginTop:"44px"}}
      className='text-button btn' >
      <b>MEN´S COLLECTION</b>    
      </button>
      
      </Link>

        <Link href='/cart' className='flex flex-col items-center'>

      <div className=' bg-black'>
      <Image className=' hover:opacity-80'  src='/images/Card chamadas 3.png'
      width={324} height={324} alt='gilr with pc' />
      </div>
      <button style={{border:"1px solid black", marginTop:"44px"}}
      className='text-button btn' >
      <b>WOMAN COLLECTION</b>    
      </button>
      
      </Link>
          
    </div>
    </div>

   <  div style={{width:"100%", height:"300px", backgroundColor:"#f39c94", }} >
   <div className='flex items-center justify-evenly  '>
     <Image src='/images/gilrs acessories.png'width={324} height={324} alt='girl' />
     <div>
      <p className='text-5xl'><b>50% OFF IN ALL</b></p>
      <p className='text-5xl mb-8'><b>WOMENS ACESSORIES</b></p>

      <Link href='/cart' >
      <button style={{border:"1px solid black"}}
      className='cta-btn' >
      <b>BUY NOW WITH 50% OFF </b>    
      </button>
      </Link>
      
     </div>
   </div>
   </div>
   <div className='text-center text-bunner mt-32 mb-8'>
    <p>This week’s <b>highlights</b></p>
   </div>
   <div className="carousel-wrapper   grid  lg:grid-cols-1 gap-4 " >
        <Carousel  centerMode={true} centerSlidePercentage={30} autoPlay swipeable infiniteLoop interval={2500}>
            <div  >

                {<Cards product={item1} />}
            
            </div>
           
            <div>
            
                {<Cards product={item2}/>}
            
            </div>
             <div>
            
                {<Cards product={item3}/>}
            
            </div>
            <div>
            
            {<Cards product={item4}/>}
        
        </div>
        <div>
            
            {<Cards product={item5}/>}
        
        </div>
        <div>
            
            {<Cards product={item6}/>}
        
        </div>
          
        </Carousel>

      
    </div>
  
    <div className='text-center text-bunner mb-7 '>
    <p> <b>TECH </b>for all</p>
   </div>
    
   <div className="carousel-wrapper   grid  lg:grid-cols-1 gap-4 "  >
        <Carousel  centerMode={true} centerSlidePercentage={30} autoPlay   
        infiniteLoop interval={2500} showIndicators showStatus>
            <div >

                {<Cards product={item7}/>}
            
            </div>

            <div  >

          {<Cards product={item8}/>}

            </div>
            <div  >

          {<Cards product={item9}/>}

            </div>
            <div  >

          {<Cards product={item10}/>}

            </div>
            <div  >

          {<Cards product={item11}/>}

            </div>
            <div  >

          {<Cards product={item12}/>}

            </div>

    
    </Carousel>
    </div>

      <Letter/>
    </>
  )

  
}
