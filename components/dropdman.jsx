import React from 'react'
import Link from 'next/link';
import { Menu } from "@headlessui/react";
import{IoIosArrowDown}from "react-icons/io";

export default function Dropdman() {
  return (
    <Menu as='div' className="relative inline-block">
    <Menu.Button className='flex items-center'>
        <span className='m-2 text-button'><b>MAN</b></span>
        <IoIosArrowDown/>
    </Menu.Button>

    <Menu.Items className='headless-items-container '>
        <Menu.Item className='headless-item'>
            <Link href='/menu?search=mens-shirts'>M. Shirts</Link>
        </Menu.Item>

        <Menu.Item className='headless-item'>

        <Link href='/menu?search=mens-shoes'>M. Shoes</Link>

        </Menu.Item>

        <Menu.Item className='headless-item'>

        <Link href='/menu?search=mens-watches'>M. Watches</Link>

        </Menu.Item>
    </Menu.Items>
    
    </Menu>
  )
}
