import "./Admission.css"
import { Navbar } from "../../components/Navbar/Navbar"

export const Admission = () => {
    return (
        <>
            <div className="navbar-container">
                <Navbar />
            </div>
            <h2>Admission</h2>
            <h4>Admission Timeline</h4>
            <ol>
                <li>Understanding Admission requirements</li>
                <li>Submit application online</li>
                <li>Upload supporting documents</li>
                <li>Make application fee payment</li>
                <li>Check application status </li>
            </ol>
        </>
    )
}

