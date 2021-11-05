import { NavLink } from "react-router-dom"

const Nav = () => {
    return (
        <div>
            <nav id="navId">
            <NavLink to="/categoria/1">categoria 1</NavLink>
            {/* <Link to="#">Categoría 1</Link> */}
            <NavLink to="/categoria/2">categoria 2</NavLink>
            {/* <Link to="#">Categoría 2</Link>*/}
            </nav>
        </div>
    )
}

export default Nav