import Head from "next/head";
import Cards from "../components/Cards";

export async function getStaticProps() {
	const Api = "https://fakestoreapi.com/products";
	const res = await fetch(`${Api}`);
	const productList = await res.json();

	return {
		props: {
			productList,
		},
	};
}

export default function Home({ productList }) {
	return (
		<>
			<Head></Head>
			<div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
				{productList.map((product) => (
					<Cards key={product.id} product={product} />
				))}
			</div>
		</>
	);
}
