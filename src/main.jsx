import * as ReactDOM from "react-dom/client";
import { Home } from "./pages/Home/Home";
import "./index.css";
import { Academics } from "./pages/Academics/Academics";
import { Admission } from "./pages/Admission/Admission";
import { SignIn } from "./pages/SignIn/Signin";
import { SignUp } from "./pages/SignUp/Signup";
import { AuthContextProvider } from "./context/AuthContext";

import { BrowserRouter, Routes, Route } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  </AuthContextProvider>,
);



