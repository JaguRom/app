import { NavLink } from "react-router-dom"

const Nav = () => {
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