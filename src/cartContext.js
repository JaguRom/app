import { createContext, useState } from "react";
export const CartContext = createContext();

const { Provider} = CartContext;

const CustomComponent=({children})=>{
    const [cart,setCart]=useState([]);
const addToCart=(product, cantidad)=>{
    console.log("Productos comprados")
    console.log(product, cantidad);
}

const valorDelContexto = {
    cart:cart,
    addToCart:addToCart,
}
    return(


        <Provider value={valorDelContexto}>
        {children}

        </Provider>
    )


}

export default CustomComponent;