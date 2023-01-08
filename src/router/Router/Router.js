import { createBrowserRouter } from "react-router-dom";
import Home from "../../page/Home/Home/Home";
import Main from "../../layout/Main";
import ErrorPage from "../../ErrorPage/ErrorPage";
import Login from "../../page/Login/Login";
import Register from "../../page/Register/Register";

export const routes = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },

    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
]);
