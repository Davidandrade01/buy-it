import React from "react";
import { createContext, useState } from "react";
import { getItem, setItem } from "../../services/LocalStorageproducts";

export const CartContext = createContext({});

export default function CartProvider({ children }) {
	
	const[seedetails, setSeedetail]=useState([])
	const [productCart, setProductCart] = useState(getItem("basket") || []);
	const Amount= productCart.reduce((a,c)=>a+c.qtd*c.obj.price,0).toFixed(2)
	const individualqtd=productCart.reduce((a,c)=>a+c.qtd,0)
	
	const qty=productCart.map((element)=>(<div key={element.id}>{element.qty}</div>))

	const[animate,setAnimate]=useState(false)//Animação do status de quantidade

	
	function addToCart(obj) {
		const copyProductCart = [...productCart];
		const BasketArr = copyProductCart.find((product) => product.obj === obj);
		setAnimate(!animate)

		if (!BasketArr) {
			copyProductCart.push({ obj, qtd: 1 });
		} else {
			BasketArr.qtd = BasketArr.qtd + 1;
		}

		setProductCart(copyProductCart);
		setItem("basket ", copyProductCart);

		//console.log("copyProductCart: ", copyProductCart);
	}

	function removeCart(obj) {
		const copyProductCart = [...productCart];
		const BasketArr = copyProductCart.find((product) => product.obj === obj);

		if (BasketArr && BasketArr.qtd > 1) {
			BasketArr.qtd = BasketArr.qtd - 1;
			setProductCart(copyProductCart);
		} else {
			const arrayfiltered = copyProductCart.filter(
				(product) => product.obj !== obj
			);
			setProductCart(arrayfiltered);
		}
		setItem("basket ", copyProductCart);
		//console.log(copyProductCart);
	}

	function clearCart() {
		setProductCart([]);
	}

	return (
		<CartContext.Provider
			value={{productCart, addToCart, removeCart, clearCart,Amount,individualqtd,qty,animate }}
		>
			{children}
		</CartContext.Provider>
	);
}
