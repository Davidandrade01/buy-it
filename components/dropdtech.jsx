import React from 'react'
import Link from 'next/link';
import { Menu } from "@headlessui/react";
import{IoIosArrowDown}from "react-icons/io";



export default function Dropdtech() {
  return (
    <Menu as='div' className="relative inline-block">
    <Menu.Button className='flex items-center'>
        <span className='m-2'><b>TECH </b></span>
        <IoIosArrowDown/>
    </Menu.Button>

    <Menu.Items className='headless-items-container '>
        <Menu.Item className='headless-item'>
            <p>Smartphones</p>
        </Menu.Item>
        <Menu.Item className='headless-item'>
        <p>Laptops</p>
        </Menu.Item>
    </Menu.Items>
    
    </Menu>
  )
}
