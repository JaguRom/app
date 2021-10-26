//Importar useState
import { useState } from "react";

//Variable contador
const ItemCount= ({stock}) =>{


const [ contador, setContador ] = useState(0);
    const sumaContador = () => setContador( contador +1 );
    const restaContador = () => setContador( contador -1 );
    const reseteaContador = () => setContador(0);

const onAdd= ()=>{
    if (contador>stock){
    console.log("No hay stock disponible")
    } else{
    console.log ("Su producto ha sido guardado en el carrito")
    }
}

return (
    <>
    <button onClick={sumaContador}>Sumar</button>
    <button onClick={restaContador}>Restar</button>
    <button onClick={reseteaContador}>Reseteo</button>
    <p>{contador}</p>
    <button onClick={onAdd}>Agregar al carrito</button>
    </>
)
}

//Exportar ItemCount
export default ItemCount