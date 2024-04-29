import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Registration from "../pages/Registration";
import MyCraftList from "../pages/MyCraftList";
import AllArtAndCraftItems from "../pages/AllArtAndCraftItems";
import AddCraftItem from "../pages/AddCraftItem";
import PrivateRoutes from "./PrivateRoutes";
import CraftDetails from "../pages/CraftDetails";
import UpdateCraftItem from "../pages/UpdateCraftItem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch("http://localhost:5000/artAndCraft"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },

      {
        path: "/myCraftList",
        element: (
          <PrivateRoutes>
            <MyCraftList />
          </PrivateRoutes>
        ),
        loader: () => fetch("http://localhost:5000/artAndCraft"),
      },

      {
        path: "/artAndCraft",
        element: <AllArtAndCraftItems />,
        loader: () => fetch("http://localhost:5000/artAndCraft"),
      },
      {
        path: "/artAndCraft/craftDetails/:id",
        element: (
          <PrivateRoutes>
            <CraftDetails />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/artAndCraft/craftDetails/${params.id}`),
      },
      {
        path: "/artAndCraft/:id",
        element: (
          <PrivateRoutes>
            <UpdateCraftItem />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/artAndCraft/${params.id}`),
      },
      {
        path: "/addCraftItem",
        element: (
          <PrivateRoutes>
            <AddCraftItem />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
