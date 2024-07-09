import "./NavBar"
import CartWidget from "../CartWidget/CartWidget"
import logo from "./assets/BeeBox-logo.jpg"

const NavBar = () => {
    
    return (
            <nav  className="navbar bg-body-tertiary">
                    <img src={logo} width={100} alt="logo" />
                    <form  className="container-fluid justify-content-start">
                        <button  className="btn btn-sm btn-outline-secondary" type="button">Indumentaria</button>
                        <button  className="btn btn-sm btn-outline-secondary" type="button">Equipamiento</button>
                        <button  className="btn btn-sm btn-outline-secondary" type="button">Quienes somos</button>
                    </form>
                    <div className="carro">
                        <CartWidget/>
                    </div>
            </nav>
    )
}

export default NavBar