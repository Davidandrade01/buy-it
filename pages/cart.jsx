import { useContext } from "react";
import { CartContext } from "../Contexts/cartContext";

export default function CartPage() {
  //Usamos o Contexto para consumir no Carrinho
	const { clearCart, productCart } = useContext(CartContext);

  //const contextCarrinho = useContext(CartContext);
  // Para usar os dados ou funções -> contextCarrinho.productCart

	return (
		<div>
			<h1 style={{ color: "#fff" }}>Funciona</h1>
			{productCart.map((produto) => {
				return (
					<div key={produto.obj}>
						<h5>{produto.obj.title}</h5>
						<h6>{produto.obj.price}</h6>
					</div>
				);
			})}
      <button onClick={() => clearCart()}>Clear Cart</button>
		</div>
	);
}
