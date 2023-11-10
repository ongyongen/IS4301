import "./Signin.css"
import { Navbar } from "../../components/Navbar/Navbar"
import { useState } from "react"
import { UserAuth } from "../../context/AuthContext"

const SUCCESSFUL_SIGN_IN = "You are successfully signed in"
const WRONG_PASSWORD = 'Your password is inaccurate';
const USER_NOT_FOUND_MESSAGE = 'You do not have a registered account';
const GENERIC_SIGN_IN_ERROR = 'Invalid credentials. You cannot sign in in';

export const SignIn = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { signIn, signInWithGmailPopup } = UserAuth();

    const SignIn = async (e) => {
        e.preventDefault();
        try {
            await signIn(email, password);
            alert(SUCCESSFUL_SIGN_IN)
        } catch (e) {
            console.log(e.code)
            if (e.code == "auth/invalid-login-credentials") {
                alert(WRONG_PASSWORD)
            } else if (e.code == "auth/invalid-email") {
                alert(USER_NOT_FOUND_MESSAGE)
            } else {
                alert(GENERIC_SIGN_IN_ERROR)
            }
        } finally {
            setEmail("")
            setPassword("")
        }
    }

    const signInViaGoogle = async (e) => {
        e.preventDefault()
        try {
            await signInWithGmailPopup()
            .then(() => {
                alert("You have logged in successfully with your gmail account")
            })
        }
        catch (error) {
            alert(error.response.data.message)
        } 
        finally {
            setEmail("")
            setPassword("")
        }
    }

    return (
        <>
            <div className="navbar-container">
                <Navbar />
            </div>
            <h2>Sign In</h2>
            <form>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div>
                    <button onClick={(e) => SignIn(e)}>Sign In</button>
                    <button onClick={(e) => signInViaGoogle(e)}>Sign In With Google</button>
                </div>
            </form>
        </>
    )
}

