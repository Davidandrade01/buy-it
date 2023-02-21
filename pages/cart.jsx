
import { useContext } from 'react'
import { CartContext } from '../Contexts/cartContext'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import {CiTrash} from 'react-icons/ci'
import { useRouter } from 'next/router'


export default function Cart() {
	const{productCart,removeCart,clearCart,Amount,individualqtd}=useContext(CartContext)
  
  return (
<div >
      <h1 className='mb-4 text-xl '><b>Shopping Cart</b></h1>
    
    {
        productCart.length==0?
        (
            <div>
                
                    <img src="/images/images-removebg-preview.png" alt="go Shopping" />
                    Ups.. Empty Cart! 
                    <Link href='/'> <b>Let´s find something cool!</b> !</Link>
                
            </div>
        ):
        (
            <div className='grid md:grid-cols-4 md:gap-5'>
             <div className='overflow-x-auto md:col-span-3'>
             <table className='min-w-full'>
             <thead className='border-b'>
             <tr>
                <th className='px-5 text-left'>Item</th>
                <th className='px-5 text-right'>Quantity</th>
                <th className='px-5 text-right'>Price</th>
                <th className='px-5 text-right'>Remove Item</th>
             </tr>
             </thead>
            <tbody>
                {productCart.map((product)=>(<tr key={product.obj.id} className='border-b'>
                    <td> 
                    <Link href={`/product/${product.id}`}   className=' flex items-center'>
                    <Image className='m-12' src={product.obj.thumbnail} width={200} height={200} alt={product.obj.title}></Image>
    
                    {product.obj.title}
                    </Link>
                    </td>

                    <td className='p-6 text-right'>{product.qtd}</td>
                    <td className='p-6 text-right'>€{product.obj.price}</td>
                    <td className='p-5 text-center'>
                        <button onClick={()=>removeCart(product.obj)}> <CiTrash size={20} />  </button>
                    </td>
                    

                </tr>))}
            </tbody>

             </table>
             
             </div>
             <div className='card p-5'>
                <ul>
                    <li>
                        <div className='m-10 pb-3 text-xl' >
                                Subtotal
                                ({individualqtd})
                                
                                :€
                               {Amount}
                        </div>
                    </li>
                    <li>
                       <Link href='/checkout'><button className='primary-button'> Checkout</button></Link>
                    </li>
                </ul>
             
             </div>
             <button className='secundary-button' onClick={clearCart}>Clear Cart</button>

             
    
        

            </div>
            

        )
    }
    
    </div>
  )
}

