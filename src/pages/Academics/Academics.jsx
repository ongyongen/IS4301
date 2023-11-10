import "./Academics.css"
import { Navbar } from "../../components/Navbar/Navbar"

export const Academics = () => {
    return (
        <>
            <div className="navbar-container">
                <Navbar />
            </div>
            <h2>Academics</h2>
            <h4>Modules Taught</h4>
            <table>
                <tr>
                    <th>Module Code</th>
                    <th>Module Title</th>
                </tr>
                <tr>
                    <td>BT1101</td>
                    <td>Introduction to Business Analytics</td>
                </tr>
                <tr>
                    <td>BT2101</td>
                    <td>Econometrics Modelling for Business Analytics</td>
                </tr>
                <tr>
                    <td>BT2102</td>
                    <td>Data Management and Visualisation</td>
                </tr>
                <tr>
                    <td>BT2103</td>
                    <td>Optimization Methods in Business Analytics</td>
                </tr>
            </table>
        </>
    )
}

