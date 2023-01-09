import { createBrowserRouter } from "react-router-dom";
import Home from "../../page/Home/Home/Home";
import Main from "../../layout/Main";
import ErrorPage from "../../ErrorPage/ErrorPage";
import Login from "../../page/Login/Login";
import Register from "../../page/Register/Register";
import CategoryData from "../../page/Home/categoryData/CategoryData";
import NewsDetails from "../../page/Home/NewsDetails/NewsDetails";
import AddNews from "../../page/AddNews/AddNews";
import PublisherRoute from "./PublisherRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/news/addnews", element: <AddNews /> },
      {
        path: "/news/category/:category",
        element: <CategoryData />,
        loader: ({ params }) =>
          fetch(`http://localhost:8000/news/category/${params.category}`),
      },
      {
        path: "/news/:id",
        element: <NewsDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:8000/news/${params.id}`),
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
]);
