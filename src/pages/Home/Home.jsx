import "./Home.css"
import { Navbar } from "../../components/Navbar/Navbar"

export const Home = () => {
    return (
        <div className="home-layout">
            <div className="navbar-container">
                <Navbar />
            </div>
            <div className="home-content">
                <h2>NUS is a leading research university in Asia</h2>
                <img className="home-logo" src={"../../../public/assets/logo.jpg"}></img>
            </div>
        </div>
    )
}

