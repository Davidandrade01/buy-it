import  { useContext, useState } from 'react'
import styles from "../styles/modal.module.css"
import Image from 'next/image'

//Icons
import {GrFormClose} from 'react-icons/gr'
import {AiOutlineRight} from 'react-icons/ai'
import {MdOutlineFavoriteBorder} from "react-icons/md"
import {CiTrash} from 'react-icons/ci'


//Context and hooks
import { CartContext } from "../Contexts/cartContext";




export default function Modal({setOpenmodal, product}) {

  const {productCart, addToCart, removeCart, clearCart,Amount,individualqtd}=useContext(CartContext)

  const[favcolor,setFavcolor]=useState(false)
  const changefavcolor=()=>{
    setFavcolor(!favcolor)
   }

   
  return (
    <div className={styles.container}>
      <div className={styles.overlay}>
          <div className={styles.content}>
          <div className={styles.btn_exit}>< GrFormClose size={24} onClick={()=>setOpenmodal(false)}/></div>
          
          <div className={styles.bread_crumbs}>
            <span>DETAILS</span> 
            <AiOutlineRight/>
            <span>{product.category}</span> 
          </div>

          <div className={styles.container_product}>
            <div className={styles.product_detail}>

            <div className={styles.favorites} > <MdOutlineFavoriteBorder   
            onClick={changefavcolor} size={24} style={{fill :favcolor ? "#D51451":"#000000"}}/></div>

            <div style={{width:"200px", height:"200px"}}>
          {product.images &&
            <Image src={ product.images[1]} height={400} width={400}  
            alt={product.title} className="max-w-fit max-h-full " />
          }

          {product.image &&
            <Image src={ product.image} height={400} width={400}  
            alt={product.title} className="max-w-fit max-h-full " />
          }
            
          </div>
            </div>
            
            <div className={styles.product_info}>
                <section style={{marginBottom:"12px"}}>
                  <p style={{marginBottom:"4px",color:"#9B9A9A"}}>New Colletion</p>
                  <p style={{marginBottom:"4px"}}>{product.title}</p>
                  <p>€ {product.price}</p>
                </section>
                <section style={{marginBottom:"12px"}}>
                <p style={{marginBottom:"4px",color:"#9B9A9A"}}>Description:</p>
                  <p  className='capitalize mb-1'>{product.category}</p>
                  
                  <div className={styles.product_description}>
                   <p className="capitalize">{product.description}</p>
                  </div>
                </section>
                

                <div className={styles.adj_qtdy}>
              <section className={styles.qty}>
              
              <div className=' items-center ml-1 flex'>
              <span style={{color:"#484848", marginRight:"8px"}}>Qty.</span>
                <button onClick={()=>addToCart(product)} className={styles.add_sub}>+</button>


                {productCart.map((element)=>(<div key={element.id}className={styles.individual_qty}>
                  
                  {element.qtd}  
                </div>))}

                <button onClick={()=>removeCart(product)}  className={styles.add_sub}>-</button>
              </div>

              
                <button className={styles.btn_discard}> 
                 <CiTrash size={20}/>  Discard
                 </button>
              

              
              </section>
              
            </div>
            <button style={{border:"1px solid black"}} className='cta-btn w-full '>See My Bag</button>
           </div>

          
          </div>


     
      
          
          </div>

        </div>
    </div>
    
  )
}
