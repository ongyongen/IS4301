import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./pages/Home/Home";
import "./index.css";
import { Academics } from "./pages/Academics/Academics";
import { Admission } from "./pages/Admission/Admission";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/academics",
    element: <Academics />,
  },
  {
    path: "/admission",
    element: <Admission />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

