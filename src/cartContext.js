import { createContext, useState } from "react";
export const CartContext = createContext();

const { Provider} = CartContext;

const CustomComponent=({children})=>{
    const [cart,setCart]=useState([]);
    return(


        <Provider value={cart}>
        {children}

        </Provider>
    )


}

export default CustomComponent;