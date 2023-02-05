import React, { useContext } from "react";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsPerson,} from "react-icons/bs";
import { CartContext } from "../Contexts/cartContext";
import { useAuthValue } from "../contexts/AuthContext";
import Dropdprofile from "./dropdprofile";




export default function Navbar() {
	const { productCart } = useContext(CartContext);
	const {user}=useAuthValue()
	


	return (
		<div>
			<header>
				<nav className="flex h-12 justify-between shadow-md items-center px-4">
					<Link href="/" className="text-lg font-bold">
						
						Buy it
					</Link>

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
