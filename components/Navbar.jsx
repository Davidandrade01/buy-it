import { useContext } from "react";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsPerson,BsSearch} from "react-icons/bs";
import { CartContext } from "../Contexts/cartContext";
import { useAuthValue } from "../contexts/AuthContext";

import Dropdprofile from "./dropdprofile";
import Image from "next/image";
import Dropdtech from "./dropdtech";
import Dropdcollections from "./dropdcollections";
import Dropdman from "./dropdman";
import DropdWomen from "./DropdWomen";
import DpdSales from "./DpdSales";



export default function Navbar() {
	const { productCart } = useContext(CartContext);
	const {user}=useAuthValue()
	


	return (
		<div className="relative mb-36">
			<header className="fixed top-0 left-0 right-0 bg-white">
				<nav className="flex h-32 justify-between shadow-md items-center px-4  ">
					<Link href="/" >
					
					<img className="my-12"   src="images/logobuyit.png" alt="logo-buyit" />
						
					</Link>

					<div className="flex-col">
						<div className="flex mb-2 items-center">
							<input className="w-64 ml-8" type="text" placeholder="Hi, what are you looking for today?"   />
							<BsSearch/>
						</div>
						<div className="w-96 border-b-2 mb-4 border-black"></div>
						<div className="flex gap-10">
							<Dropdtech/>
							<Dropdcollections/>
							<Dropdman/>
							<DropdWomen/>
							<DpdSales/>
							
							
							
						</div>
					</div>
					
					<div className="flex justify-between">

					{!user &&(
						<><Link className="p-2" href="/login">
							<BsPerson />
						</Link></>
					)}
					{user &&(
						<Dropdprofile/>
					)}
		
			
						<Link className="p-2" href="/cart">
							<AiOutlineShoppingCart />
						</Link>


            <div
								style={{
									background: "#ffffff",
									color: "#000",
									width: "32px",
									height: "32px",
									borderRadius: "50%",
								}}
							>
								{productCart.length}
							</div>

							
					</div>
				</nav>
			</header>
		</div>
	);
}
