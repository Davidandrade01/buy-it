import "../styles/globals.css";
import Layout from "../components/Layout";
import CartProvider from "../Contexts/cartContext";
import { AuthProvider } from "../contexts/AuthContext";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect,useState } from "react";
import { useAuthentication } from "../hooks/useAuthentication";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Loading from "../components/Loading";




const ititialOptions={
	"client-id": "AaoSCyZwPo7xJ1s9L4hc8kZtIV6wIwktCrkQlz2nuXp6tkWYenjiLoSW8WGBexxo2_IyrddABaqhO7g0",
	currency:"EUR",
	intent:"capture",

}

function MyApp({ Component, pageProps }) {

	const [user,setUser]=useState(undefined)
	const {auth}=useAuthentication()	
	const[loading, setLoading]=useState(false)
	const loadingUser=user===undefined

	useEffect(()=>{
		onAuthStateChanged(auth,(user)=>{
			setUser(user)
		})
	})

	if(loadingUser){
		return <Loading loading={loading} setLoading={setLoading}/>
	}

	return (
		<AuthProvider value={{user}}>
		
		<CartProvider >
		<PayPalScriptProvider options={ititialOptions}>
		
			<Layout>
				<Component {...pageProps} />
			</Layout>
		
			</PayPalScriptProvider>
			</CartProvider>
		
		</AuthProvider>
	);
}

export default MyApp;
