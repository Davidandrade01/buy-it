import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Cards from '../components/Cards';

export  async  function getStaticProps() {

    const api1="https://dummyjson.com/products/1"
    const api2="https://fakestoreapi.com/products/3"
    const api3="https://fakestoreapi.com/products/2"
    const api4="https://fakestoreapi.com/products/17"
    const api5="https://fakestoreapi.com/products/4"
    const api6="https://fakestoreapi.com/products/15"
 

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
    //console.log(items)
   
    return{
        props:{
            item1,item2,item3,item4,item5,item6
        }
    }


}

    export default function slides({item1,item2,item3,item4,item5,item6}){
        
    return (

        <div className="carousel-wrapper  " centerMode={true}>
        <Carousel  centerMode={true} centerSlidePercentage={30}>
            <div    >

                {<Cards product={item1}/>}
            
            </div>
           
            <div>
            
                {<Cards product={item2}/>}
            
            </div>
             <div>
            
                {<Cards product={item2}/>}
            
            </div>
            <div>
            
            {<Cards product={item2}/>}
        
        </div>
        <div>
            
            {<Cards product={item2}/>}
        
        </div>
           
        </Carousel>

    
    </div>
            


         



        
    );
}



