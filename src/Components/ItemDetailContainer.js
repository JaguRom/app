
import { useState, useEffect } from "react"
import itemsJson from "./items.json"
import ItemDetail from "./ItemDetail"
const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([])
    useEffect(() => {
        promesa
            .then(detalle => {
                setTimeout(() => {
                    getItem(detalle)
                }, 2000)
            })
            .catch(() => {
                console.log("error")
            })
    }, [])
    const getItem = (detalle) => {
        setProducto(detalle)
    }
    const promesa = new Promise((resolve) => {
        resolve(itemsJson)
    })
    return (
        <div>
            {producto.map(prod => {
                return <ItemDetail item={prod}/>
            })}
        </div>

    )
}

export default ItemDetailContainer



