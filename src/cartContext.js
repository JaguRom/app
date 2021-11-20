import { createContext, useState } from "react";
export const CartContext = createContext();

export const { Provider} = CartContext;

export const CustomComponent=({children})=>{
    const [cart,setCart]=useState([]);
    console.log("Productos en el carrito")
    console.log(cart);

/*     const agregarProducto = (product, cantidad) => {
        console.log("Agregar producto")
        console.log(cantidad,product)
        setCart([...cart,{cantidad,product}])
    } */
    const borrarProducto = (product) => {} 
    const vaciar = () => {}

const addToCart=(product, cantidad)=>{
    console.log("Productos comprados")
    console.log(product, cantidad)
    setCart([...cart,{cantidad,product}])
}
   
 
const valorDelContexto = {
    cart:cart,
    addToCart:addToCart,
    borrarProducto:borrarProducto,
    vaciar:vaciar,

}
    return(


        <Provider value={valorDelContexto}>
        {children}

        </Provider>
    )


}

export default CustomComponent;