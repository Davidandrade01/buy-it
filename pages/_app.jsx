import "../styles/globals.css";
import Layout from "../components/Layout";
import CartProvider from "../Contexts/cartContext";
import { AuthProvider } from "../contexts/AuthContext";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect,useState } from "react";
import { useAuthentication } from "../hooks/useAuthentication";



function MyApp({ Component, pageProps }) {
	const [user,setUser]=useState(undefined)
	const {auth}=useAuthentication()	
	const loadingUser=user===undefined

	useEffect(()=>{
		onAuthStateChanged(auth,(user)=>{
			setUser(user)
		})
	})

	if(loadingUser){
		return <p>Charging...</p>
	}

	return (
		<AuthProvider value={{user}}>
		<CartProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</CartProvider>
		</AuthProvider>
	);
}

export default MyApp;
