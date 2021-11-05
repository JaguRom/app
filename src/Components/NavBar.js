import CartWidget from "./CartWidget"
import Nav from "./Nav"
import { NavLink } from "react-router-dom"

const NavBar = () =>{
    return(
        //Esto es un fragment
        <>
        <header id="headerApp">
            <NavLink to="/">
                <h1>Ecommerce App</h1>
            </NavLink>
            
            <Nav/>
            <CartWidget/>
        </header>
        </>
    )
}

//Exportar Header
export default NavBar