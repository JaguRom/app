import { useEffect, useState } from "react"
import itemsJson from "./items.json"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer  = () => {

    const {categoryId} = useParams()
    const [productos, setProductos] = useState([])

    useEffect(() => {
        setTimeout(() => {
            if (categoryId){
                const productosFiltrados = itemsJson.filter(producto => producto.category === categoryId)
                setProductos(productosFiltrados)
            }else{
                setProductos(itemsJson)
            }
            }, 2000);}, [categoryId]);

            if(productos.length === 0){
                return <p>Cargando...</p>
            }else{
                return <ItemList productos={productos}/>
            }
        }
export default ItemListContainer