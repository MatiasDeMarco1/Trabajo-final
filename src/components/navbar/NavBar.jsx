import "./style.css"
import CartWidget from "../CartWidget/CartWidget"
import {Link} from "react-router-dom"

const NavBar = () => {
    return (
        <header >
            <nav className="navBar">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/010/994/345/small/adidas-logo-white-symbol-with-name-clothes-design-icon-abstract-football-illustration-with-black-background-free-vector.jpg" alt="logo" className="logo" />
                <ul>
                    <li>
                        <Link to="/" key={"Home"}>Inicio</Link>
                    </li>
                    <li>
                        <Link to="/category/Botines">Botines</Link>
                    </li>
                    <li>
                        <Link to="/category/Camisetas" >Camisetas</Link>
                    </li>
                    <li>
                        <Link to="/category/Salida">Salida</Link>
                    </li>
                    <li>
                        <Link to="/category/Running">Running</Link>
                    </li>
                    <li>
                        <Link to="/category/Pantalones">Pantalones</Link>
                    </li>
                </ul>
                <CartWidget/>
            </nav>
        </header>
    )
}
export default NavBar 