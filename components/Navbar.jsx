import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div>
      <header>
            <nav className='flex h-12 justify-between shadow-md items-center px-4'>
                <Link href='/' className='text-lg font-bold ' > Buy it</Link>

                <div>
                    <Link className='p-2' href='/login'>Login</Link>

                    <Link className='p-2' href='/cart'> Cart</Link>
                </div>
            </nav>
        </header>
    </div>
  )
}
