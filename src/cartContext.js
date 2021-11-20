import { createContext, useState } from "react";
export const CartContext = createContext();

export const { Provider} = CartContext;

export const CustomComponent=({children})=>{
    const [cart,setCart]=useState([]);
    console.log("Productos en el carrito")
    console.log(cart);

/* Agregar Productos */
const addToCart=(product, cantidad)=>{
    console.log("Productos comprados")
    console.log(product, cantidad)
    setCart([...cart,{cantidad,product}])
}
/* Remover Productos */
const removeFromCart=(ItemId)=>{
    setCart([...cart.filter(product => product.id !== ItemId)]);
console.log("Productos eliminados")

    console.log(removeFromCart)
}

//Chequear si el producto existe [CORREGIR]
const isInCart = (product) =>{
const existe = cart.filter(item => item.Producto.id === product.id)
return existe;
}


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