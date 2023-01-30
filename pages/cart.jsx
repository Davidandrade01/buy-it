
import { useContext } from 'react'
import { CartContext } from '../Contexts/cartContext'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import {CiTrash} from 'react-icons/ci'

export default function Cart() {
	const{productCart,removeCart }=useContext(CartContext)
  return (
<div>
      <h1 className='mb-4 text-xl '><b>Shopping Cart</b></h1>
    
    {
        productCart.length==0?
        (
            <div>
                Cart is empty! <Link h href='/'>Go Shopping</Link>
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
                <th className='px-5 text-right'>Action</th>
             </tr>
             </thead>
            <tbody>
                {productCart.map((product)=>(<tr key={product.obj.id} className='border-b'>
                    <td> 
                    <Link href={`/product/${product.id}`}   className=' flex items-center'>
                    <Image className='m-12' src={product.obj.image} width={60} height={60} alt={product.obj.title}></Image>
    
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
            </div>
        )
    }
    </div>
  )
}

