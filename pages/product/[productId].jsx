/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";
import { IoMdArrowRoundBack } from "react-icons/io";
import { CartContext } from "../../Contexts/cartContext";
import { useContext } from "react";
import { V4 as uuid } from "uuid";

export async function getStaticProps(context) {
	const Api = "https://fakestoreapi.com/products";
	const { params } = context;
	const data = await fetch(
		`https://fakestoreapi.com/products/${params.productId}`
	);
	const product = await data.json();
	return {
		props: { product },
	};
}

export async function getStaticPaths() {
	const res = await fetch("https://fakestoreapi.com/products");
	const data = await res.json();
	const paths = data.map((product) => {
		return { params: { productId: `${product.id}` } };
	});
	return { paths, fallback: false };
}

export default function Details({ product }) {
	const {
		productCart = [],
		addToCart,
		removeCart,
		clearCart,
	} = useContext(CartContext);

	return (
		<div>
			<div className="py-2">
				<button className="secundary-button">
					<Link href="/">
						{" "}
						<IoMdArrowRoundBack /> Products{" "}
					</Link>
				</button>
			</div>

			<div className="grid md:grid-cols-4 md:gap-3  ">
				<div className="md:col-span-2">
					<img src={product.image} alt={product.title} Layout="responsive" />
				</div>

				<div>
					<ul>
						<li>
							<b>
								{" "}
								<h1 className="text-lg text-center ">{product.title}</h1>
							</b>
						</li>
						<li>Category: {product.category}</li>
						<li>
							{" "}
							<AiFillStar />
							{product.rating.rate} of {product.rating.count} Reviews
						</li>
						<li>Descriptions: {product.description}</li>
					</ul>
				</div>
				<div>
					<div className="card p-5">
						<div className="mb-2 flex justify-between">
							<div>
								<b>Price:</b>
							</div>
							<div>€{product.price}</div>
						</div>

						<div className="flex justify-between mb-2">
							<p>
								<b>Calculate a post:</b>
							</p>
							<input type="text" placeholder="zip code" />
						</div>
						<div className="flex justify-between mb-2">
							<span>
								<b>Quantity</b>:
							</span>
							{productCart.map((product) => (
								<>{product.qtd}</>
							))}
						</div>
						<button className="p-2" onClick={() => addToCart(product)}>
							Add
						</button>
						<button className="p-2" onClick={() => removeCart(product)}>
							Sub
						</button>
						<button className="p-2" onClick={clearCart}>
							Clear cart
						</button>

						<button className="primary-button w-full" type="button">
							{" "}
							to cart
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
