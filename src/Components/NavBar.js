import CartWidget from "./CartWidget"
import Nav from "./Nav"

const NavBar = () =>{
    return(
        //Esto es un fragment
        <>
        <header id="headerApp">
            <h1>Ecommerce App</h1>
            <Nav/>
            <CartWidget/>
        </header>
        </>
    )
}

//Exportar Header
export default NavBar