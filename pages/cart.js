import Head from 'next/head'
import { useContext } from 'react'
import { DataContext } from '../Store/GlobalState'


const Cart = () => {
 const { state, dispatch } = useContext(DataContext)
 const { cart } = state

 if (cart.length === 0)
  return (<div><br></br>
   <h2 className="text-center">Cart is empty!</h2>
   <br></br>
   <img className="img-responsive w-100" src="/emptycart.png" alt="not empty" style={{ boxShadow: "10px 10px 15px 15px rgba(0,0,0,0.2" }} />
  </div>)


 return (
  <div className="cart-bg">
   <Head>
    <title>Cart Page</title>
   </Head>
    Carrt
  </div>
 )
}
export default Cart