



export default function CartPage() {
 
  if (typeof window === "undefined") return null;
 const resgatar= (localStorage.getItem('basket ')|| [])
 console.log(resgatar+ 'teste')

  return (
    <div>
    

      {resgatar}
     
    </div>
  ) 
}




