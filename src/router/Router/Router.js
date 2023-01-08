import { createBrowserRouter } from "react-router-dom";
import Home from "../../page/Home/Home/Home";
import Main from "../../page/layout/Main";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home></Home> },
    ],
  },
]);