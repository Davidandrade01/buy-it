import React from 'react'

import Navbar from './navbar'
import Head from 'next/head'



export default function Layout({title, children}) {
  return (
    <>
    <Head>
    <title>{title? title + ' - Buy it' : 'Buy it '}</title>
      <meta name='description' content='Ecommerce-things for your life'/>
    </Head>
    <Navbar/>
      <main className="container m-auto mt-4 px-4  ">{children}</main>
    
    </>
  )
}
