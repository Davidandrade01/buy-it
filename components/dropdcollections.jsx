import React from 'react'
import Link from 'next/link';
import { Menu } from "@headlessui/react";
import{IoIosArrowDown}from "react-icons/io";

export default function Dropdcollections() {
  return (
    <Menu as='div' className="relative inline-block">
    <Menu.Button className='flex items-center'>
        <span className='m-2 text-button'><b>COLLECTIONS</b> </span>
        <IoIosArrowDown/>
    </Menu.Button>

    <Menu.Items className='headless-items-container '>
        <Menu.Item className='headless-item'>
            <Link href='/menu?search=sunglasses'>Sunglasses</Link>
        </Menu.Item>
        <Menu.Item className='headless-item'>
        <Link href='/menu?search=womens-dresses'>Dresses</Link>
        </Menu.Item>
        <Menu.Item className='headless-item'>
        <Link href='/menu?search=womens-shoes'>W. Shoes</Link>
        </Menu.Item>
    </Menu.Items>
    
    </Menu>
  )
}
