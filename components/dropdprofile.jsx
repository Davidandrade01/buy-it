import React from 'react'
import Link from 'next/link';
import { Menu } from "@headlessui/react";
import {BsPersonCheckFill } from "react-icons/bs";
import {MdFavorite} from "react-icons/md";
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
    <Menu.Button className='headless-menu-button'>
         <BsPersonCheckFill/>
        Hi, {user.displayName} <IoIosArrowDown/>
    </Menu.Button>
    <Menu.Items className='headless-items-container'>

    <Menu.Item className='headless-item'>
     <Link href='/cart'>
     <FiSettings/> Setting Account
     </Link>
    </Menu.Item>

    <Menu.Item className='headless-item'>
     <Link href='/cart'>
     <CiShoppingTag/> My Orders
     </Link>
    </Menu.Item>

    <Menu.Item className='headless-item'>
     <Link href='/cart'>
     <MdFavorite/> Favorites
     </Link>
    </Menu.Item>

    <Menu.Item className='headless-item'>
     <Link href='/cart'>
    <FiLogOut onClick={logout}/> Logout
     </Link>
    </Menu.Item>

    </Menu.Items>
    </Menu>
  )
}
