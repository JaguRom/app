import { useContext } from "react"
import { CartContext} from "../cartContext"

const CartWidget = () => {
    const {cart} = useContext(CartContext);
    const {totalItems}=useContext(CartContext);
    console.log("Estoestotalitems",totalItems)
/*     const productosTotales= () => {
        productosTotales = cart.reduce((total,producto) => {
            return total + producto.cantidad
        },0)
    } */
    return (
        <>
        <span className="material-icons">shopping_cart</span>
        {cart.length== 0 ? <span className="count-none">0</span> : <span className="badge badge-pill badge-primary">{cart.length}</span>}
       {/*  {cart.length == 0 ? <span className="count-none">0</span> : <span className="count">{cart.length}</span>} */}
        </>
    )
}

export default CartWidget