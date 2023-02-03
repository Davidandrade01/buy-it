import React, { useContext } from "react";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsPerson,BsPersonCheckFill } from "react-icons/bs";
import{FiLogOut} from "react-icons/fi";
import { CartContext } from "../Contexts/cartContext";
import { useAuthentication } from "../hooks/useAuthentication";
import { useAuthValue } from "../contexts/AuthContext";



export default function Navbar() {
	const { productCart } = useContext(CartContext);
	const {user}=useAuthValue()
	const {logout}=useAuthentication()


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
						<><Link className="p-2" href="/login">
						<BsPersonCheckFill/>
						</Link></>
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

							{user &&(<button onClick={logout} ><FiLogOut/></button>)}
					</div>
				</nav>
			</header>
		</div>
	);
}
