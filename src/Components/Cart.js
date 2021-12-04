import { CartContext} from "../cartContext"
import { useContext,useState } from "react"
import { Link } from "react-router-dom"
import { useHistory } from "react-router"


const Cart = () => {
    const { cart, removeFromCart,} = useContext(CartContext);
    const {push} = useHistory()
    const [toClick,setToClick] = useState(false)
    const finalizarCompra = () => {
        setToClick(true)
        push("/")
        console.log("Compra Finalizada")
    }
    return (
        <main className="comp-Cart">
            {cart.length == 0 ? <div className="container-cartEmpty">
                <div className="details-cartEmpty">
                    <h1>Tu carrito esta vacio</h1>
                    <p>Agrega productos al carrito para poder finalizar tu compra</p>
                </div>
                <div className="button-cartEmpty">
                    <Link to="/"><button>Volver al inicio</button></Link>
                </div>

            </div> :
                <table className="cart-table">
                    <thead className="cart-thead">
                        <tr className="cart-Titles">
                            <th>Producto</th>
                            <th>Nombre del producto</th>
                            <th>Cantidad</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    {cart.map(productos => {
                        const sacarProducto = () => {
                          removeFromCart(productos.id)
                          console.log(productos.product["id"])
                        }
                        return (
                            console.log("Cantidad de productos"),
                            console.log(productos.cantidad),
                            console.log("Prueba de elementos"),
                            console.log(productos.product["price"]),

                            <tbody>
                                <tr key={productos.product["id"]}>
                                    <th><img src={productos.product["img"]} width="100" height="100" alt=""  /></th>
                                    <th>{productos.product["title"]}</th>
                                    <th>{productos.cantidad}</th>
                                    <th>${productos.product["price"] * productos.cantidad}</th>
                                    <th>
                                        <button onClick={sacarProducto} >
                                            <span class="material-icons">
                                                delete
                                            </span>
                                        </button>
                                    </th>
                                </tr>
                            </tbody>
                        )
                    })}
                    <div>
                        <button onClick={finalizarCompra}>Finalizar compra</button>
                    </div>
                </table>
            }
        </main>
    )
}

export default Cart