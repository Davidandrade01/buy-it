import React from 'react'
import Link from 'next/link';
import { Menu } from "@headlessui/react";
import{IoIosArrowDown}from "react-icons/io";

export default function DpdSales() {
  return (
    <Menu as='div' className="relative inline-block">
    <Menu.Button className='flex items-center'>
        <span className='m-2  text-red-600 '><b>SALES</b></span>
        <IoIosArrowDown className=' text-red-600'/>
    </Menu.Button>

    <Menu.Items className='headless-items-container '>
        <Menu.Item className='headless-item'>
        <p>Lighting</p>
        </Menu.Item>
        <Menu.Item className='headless-item'>
        <p>Decoration</p>
        </Menu.Item>
        <Menu.Item className='headless-item'>
        <p> Fragrances</p>
        </Menu.Item>
    </Menu.Items>
    
    </Menu>
  )
}
