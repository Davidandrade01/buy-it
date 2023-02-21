import React from 'react'
import Link from 'next/link';
import { Menu } from "@headlessui/react";
import{IoIosArrowDown}from "react-icons/io";

export default function Dropdcollections() {
  return (
    <Menu as='div' className="relative inline-block">
    <Menu.Button className='flex items-center'>
        <span className='m-2'><b>COLLECTIONS</b> </span>
        <IoIosArrowDown/>
    </Menu.Button>

    <Menu.Items className='headless-items-container '>
        <Menu.Item className='headless-item'>
            <p>Sunglasses</p>
        </Menu.Item>
        <Menu.Item className='headless-item'>
        <p>Dresses</p>
        </Menu.Item>
        <Menu.Item className='headless-item'>
        <p>W. Shoes</p>
        </Menu.Item>
    </Menu.Items>
    
    </Menu>
  )
}
