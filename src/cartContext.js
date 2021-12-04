import { createContext, useState } from "react";
export const CartContext = createContext();

export const { Provider} = CartContext;

export const CustomComponent=({children})=>{
    const [cart,setCart]=useState([]);
    const cartCopiado = [...cart]
    console.log(cartCopiado.length)
    const cartObject = cartCopiado[0]   
    console.log("Estoeselcartmapeadoweon")
    console.log(cartObject)
    console.log(cartObject)
    console.log(cart.length)
    console.log("Esto es el cart modificado", cart.product)
    const objectPiola= cartCopiado[0]
    console.log(objectPiola)

/* Agregar Productos */
const addToCart=(product, cantidad)=>{
    console.log("Productos comprados")
    console.log(product, cantidad)
    console.log("Producto ID:",product.id)
    setCart([...cart,{cantidad,product}])
}
/* Remover Productos */
const removeFromCart=(ItemId)=>{

    setCart([...cart.filter(product => product.id !== ItemId)]);
console.log("Productos eliminados")
console.log(ItemId)
}

//Chequear si el producto existe [CORREGIR]
const isInCart = (product) =>{
const existe = cart.filter(item => item.Producto.id === product.id)
return existe;
}

/* Acumulador */
const totalItems = () => {
    return cart.reduce((acumulador, product) => acumulador = acumulador + product.cantidad, 0)
}
console.log(totalItems())

/* Vaciar carrito */
    const clear=()=>{
        setCart([])
        console.log("Carrito vaciado")
        console.log(clear)
    }




const valorDelContexto = {
    cart:cart,
    addToCart:addToCart,
    removeFromCart:removeFromCart,
    clear:clear,
    isInCart:isInCart

}
    return(


        <Provider value={valorDelContexto}>
        {children}

        </Provider>
    )


}

export default CustomComponent;