import '../styles/globals.css'
import Layout from '../components/Layout'
import CartProvider from '../Contexts/cartContext'


function MyApp({ Component, pageProps }) {
  
  return(
      <CartProvider>
        <Layout >
      <Component {...pageProps} />
      </Layout>
      </CartProvider>
      
   
    
  ) 
}

export default MyApp
