import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/layout";
import Home from "./page/home";
import { CarDetail } from "./page/car";
import { Dashboard } from "./page/dashboard";
import { NewCar } from "./page/dashboard/new";
import { Login } from "./page/login";
import { Register } from "./page/register";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {

        path: "/car/:id",
        element: <CarDetail />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />
      },
      {
        path: "/dashboard/new",
        element: <NewCar />
      }
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  }
])

export default router;