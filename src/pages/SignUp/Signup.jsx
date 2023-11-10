import "./Signup.css"
import { Navbar } from "../../components/Navbar/Navbar"
import { useState } from "react"

import { UserAuth } from "../../context/AuthContext"
import { getAuth, updateProfile } from "firebase/auth"

export const SignUp = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const auth = getAuth();
    const { createUser } = UserAuth() 

    const submitSignupForm = async (e) => {
        e.preventDefault();
        await createUser(email, password);
        await updateProfile(auth.currentUser, {
            displayName: email,
        });

        alert("Your account is created! You can sign in using the credentials now")
        setEmail("")
        setPassword("")
    }

    return (
        <>
            <div className="navbar-container">
                <Navbar />
            </div>
            <h2>Sign Up</h2>
            <form>
                <label htmlFor="email">Email</label>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    type="email"
                />
                <label htmlFor="password">Password</label>
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    type="password"
                />
                <div>
                    <button onClick={(e) => submitSignupForm(e)}>Sign Up</button>
                </div>
            </form>
        </>
    )
}

