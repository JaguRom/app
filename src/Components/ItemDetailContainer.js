
import { useState, useEffect } from "react"
import itemsJson from "./items.json"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    setTimeout(()=>{
        setProductos(
            itemsJson.filter(productos => productos.id === parseInt(id))
        )
  },2000);
},[id]);

if (productos.length === 0) {
return <p>Cargando...</p>;
}
else {
  return (
    console.log(productos),
    <div>
      <ItemDetail productos={productos} />
    </div>
  )
}
}

    export default ItemDetailContainer
   