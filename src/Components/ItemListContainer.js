import { useEffect, useState } from "react"
import itemsJson from "./items.json"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import GetItems from  "./GetItems"

const ItemListContainer  = () => {
        const { id } = useParams();
        console.log("Esto es categoryId")
        console.log(id)
        const [productos, setProductos] = useState([])
        useEffect(() => {
    
            if (id) {
                GetItems(id).then(resultados => {
                    setProductos(resultados)
                })
            }
            else {
                GetItems().then(resultados => {
                    setProductos(resultados)
                })
            }
        }, [id])
    
    
        return (
            <div>
                {productos.length === 0 ? <div className="ring">Cargando<span className="span_ring"></span></div> : <ItemList items={productos} />}
            </div>
        )
    }
    

    /* 
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
        } */
export default ItemListContainer