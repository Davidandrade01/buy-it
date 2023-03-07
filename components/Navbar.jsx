import { useContext, useState } from "react";
import Link from "next/link";
import Image from "next/image";

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

//Context and hooks
import { CartContext } from "../Contexts/cartContext";
import { useAuthValue } from "../contexts/AuthContext";



export default function Navbar() {


	const { productCart } = useContext(CartContext);
	const {user}=useAuthValue()
	const[showbag,setShowbag]=useState(false)
	


return (
<div className="relative mb-44  " >
<header className="fixed top-0 left-0 right-0 bg-white z-50 " >
<nav className="flex h-32 justify-between shadow-md items-center px-4  "  >
<Link href="/" >
					
<img className="my-12"   src="images/logobuyit.png" alt="logo-buyit" />
						
</Link>
<div className="flex-col items-center justify-center ">
	<div className="flex mb-3  place-content-center items-center mt-0"  style={{borderBottom: " 1px solid black",}}   >
	
	<input className="w-64 ml-8" type="text" placeholder="Hi, what are you looking for today?"   />
	<BsSearch/>
	</div>
	
							
							
	<div className="flex gap-20">
		<Dropdtech/>
		<Dropdcollections/>
		<Dropdman/>
		<DropdWomen/>
		<DpdSales/>
						
	</div>
</div>
					
					<div  className=" mb-4  flex justify-between items-center gap-4">

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
							
							<div className="bg-black text-xs text-white w-4 h-4 rounded-full text-center mb-4 " >
							{productCart.length}
							</div>
						</div>

					</div>
					
				</nav>
				<div style={{ width:"100%", height:"28px",backgroundColor:"black",color:"white",display:"flex",justifyContent:"space-evenly", alignItems:"center"}}>
					<div className="flex items-center text-button">
						  <BsTruck className="mr-4"/> Free Delivery over €50
					</div>
					<div className="flex items-center  text-button">
					<RiPaypalLine className="mr-4"/> Pay with PayPal and get 3% off
					</div>
					<Link href="/newsletter" className="flex items-center text-button">
					
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
