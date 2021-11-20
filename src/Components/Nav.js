import { NavLink } from "react-router-dom"
import { useContext } from "react";
import { CartContext} from "../cartContext"


const Nav = () => {
    const {cart} = useContext(CartContext);
    /* console.log(CartContext); */
    return (
        <div>
            <nav id="navId">
            <NavLink to="/category/potions">Potions</NavLink>
            {/* <Link to="#">Categoría 1</Link> */}
            <NavLink to="/category/artifacts">Artifacts</NavLink>
            {/* <Link to="#">Categoría 2</Link>*/}
            </nav>
        </div>
    )
}

export default Nav