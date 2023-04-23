import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "@headlessui/react";
import { useRef } from 'react';
//styles
import  styles from "../styles/navbar.module.css"

//ICONS
import { AiOutlineMail } from "react-icons/ai";
import { BsPerson,BsSearch,BsTruck} from "react-icons/bs";
import {MdOutlineFavoriteBorder} from "react-icons/md"
import {RiPaypalLine} from "react-icons/ri"
import {SlBag}from 'react-icons/sl'
//Components
import Dropdprofile from "./dropdprofile";
import Dropdtech from "./dropdtech";
import Dropdcollections from "./dropdcollections";
import Dropdman from "./dropdman";
import DropdWomen from "./DropdWomen";
import DpdSales from "./DpdSales";
import Bag from "./Bag";
import SearchBar from "./SearchBar";
import SearchResults from "./Searchresults";


//Context and hooks
import { CartContext } from "../contexts/CartContext";
import { useAuthValue } from "../contexts/AuthContext";




export default function Navbar() {

	const { productCart,animate } = useContext(CartContext);
	const {user}=useAuthValue()
	const[showbag,setShowbag]=useState(false)
	const[value, setValue]=useState("") //Armazenagem do input
	

	console.log(value)

	


return (
<div className={styles.container}  >
<header className={styles.header}  >
<nav  className="flex h-32 justify-between shadow-md items-center px-4  "  >
<Link href="/" >
<Image src='/images/logobuyit.png' height={200} width={200} alt="logo"/>					

</Link>
<div className={styles.components_box}>
	
	<SearchBar value={value} onChange={(str)=>setValue(str)}/>	

	<SearchResults  value={value} />
		
	<div  className={styles.menudpd_box}>
		
		<Dropdtech/>
		<Dropdcollections/>	
		<Dropdman/>
		<DropdWomen/>
		<DpdSales/>
		
						
	</div>
</div>
					
					<div className={styles.icon_box}  >

					{!user &&(
						<><Link className="p-2" href="/login">
							<BsPerson />
						</Link></>
					)}
					{user &&(
						<Dropdprofile />
					)}
					<Link className=" text-button flex items-center" href="/cart"><MdOutlineFavoriteBorder  /> 
						Favorites</Link>
			
						<div className="p-2 flex items-center" >

							<button onClick={()=>setShowbag(true)}  >
								<SlBag/>
							</button> 
							
							<div className={`${styles.baglength_ball} ${animate ? styles.grow : ''}`} >
							{productCart.length}
							</div>
						</div>

					</div>
					
				</nav>
				<div className={styles.promo_box}>
					<div className={styles.promo_content}>
						  <BsTruck className="mr-4"/> Free Delivery over €50
					</div>
					<div className={styles.promo_content}>
					<RiPaypalLine className="mr-4"/> Pay with PayPal and get 3% off
					</div>
					<Link href="/newsletter"className={styles.promo_content}>
					
							<AiOutlineMail className="mr-4"/> Subscribe to newsletter and get 10% off
					</Link>
					
					</div>
			</header>
			<div>
				<Bag open={showbag} close={()=>setShowbag(false)} />
			</div>
			
		</div>
		
	);
}
