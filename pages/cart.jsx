
import { useContext } from 'react'
import { CartContext } from '../Contexts/cartContext'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function Cart() {
	const{productCart}=useContext(CartContext)
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
                <th className='px5 text-left'>Item</th>
                <th className='px5 text-right'>Quantity</th>
                <th className='px5 text-right'>Price</th>
                <th className='px5 text-right'>Action</th>
             </tr>
             </thead>
            <tbody>
                {productCart.map((product)=>(<tr key={product.obj.id} className='border-b'>
                    <td> 
                    <Link href={`/product/${product.id}`}   className=' flex items-center'>
                    <Image src={product.obj.image} width={50} height={50} alt={product.obj.title}></Image>
                    &nbsp
                    {product.obj.title}

                    </Link></td>
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

