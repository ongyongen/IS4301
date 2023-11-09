import { Link } from "react-router-dom"
import "./Navbar.css"

export const Navbar = () => {
    return (
        <div className="navbar">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/academics">Academics</Link>
            <Link className="nav-link" to="/admission">Admission</Link>
        </div>
    )
}