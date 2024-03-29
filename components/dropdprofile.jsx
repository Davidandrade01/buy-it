import React from 'react'
import Link from 'next/link';
import { Menu } from "@headlessui/react";
import {BsPersonCheckFill,BsPerson  } from "react-icons/bs";
import {MdOutlineFavoriteBorder} from "react-icons/md";
import{FiLogOut,FiSettings} from "react-icons/fi";
import{IoIosArrowDown}from "react-icons/io";
import {CiShoppingTag} from "react-icons/ci";
import { useAuthentication } from '../hooks/useAuthentication';
import { useAuthValue } from "../contexts/AuthContext";

export default function Dropdprofile() {
    const {logout}=useAuthentication()
    const {user}=useAuthValue()
  return (
    
    <Menu as="div" className="relative inline-block">
    <Menu.Button className='mt-0 flex items-center text-button gap-1'>
         <BsPerson  />
        Hi, {user.displayName} <IoIosArrowDown/>
    </Menu.Button>
    <Menu.Items className='headless-items-container'>
 
    <Menu.Item className='headless-item'>
    <Link href='/'> <CiShoppingTag/> My Orders</Link>
    </Menu.Item>
   
    <Menu.Item className='headless-item'>
    <Link href='/'> <MdOutlineFavoriteBorder/>  Favorites  </Link>
    </Menu.Item>

    <Menu.Item className='headless-item'>
    <Link href='#' onClick={logout}><FiLogOut />Logout</Link>
    </Menu.Item>

    </Menu.Items>
    </Menu>
  
  )
}
