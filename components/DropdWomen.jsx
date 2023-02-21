import React from 'react'
import Link from 'next/link';
import { Menu } from "@headlessui/react";
import{IoIosArrowDown}from "react-icons/io";

export default function DropdWomen() {
  return (
    
    <Menu as='div' className="relative inline-block">
    <Menu.Button className='flex items-center'>
        <span className='m-2'><b>WOMAN</b></span>
        <IoIosArrowDown/>
    </Menu.Button>

    <Menu.Items className='headless-items-container '>
        <Menu.Item className='headless-item'>
            <p>Dress</p>
        </Menu.Item>
        <Menu.Item className='headless-item'>
        <p>W. Jewellery</p>
        </Menu.Item>
        <Menu.Item className='headless-item'>
        <p>W. Bag</p>
        </Menu.Item>
    </Menu.Items>
    
    </Menu>
  )
}
