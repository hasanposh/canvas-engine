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
import CategoryData from "../pages/CategoryData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch("https://art-and-craft-store-server-one.vercel.app/artAndCraft"),
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
        loader: () => fetch("https://art-and-craft-store-server-one.vercel.app/artAndCraft"),
      },

      {
        path: "/artAndCraft",
        element: <AllArtAndCraftItems />,
        loader: () => fetch("https://art-and-craft-store-server-one.vercel.app/artAndCraft"),
      },
      {
        path: "/artAndCraft/craftDetails/:id",
        element: (
          <PrivateRoutes>
            <CraftDetails />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://art-and-craft-store-server-one.vercel.app/artAndCraft/craftDetails/${params.id}`),
      },
      {
        path: "/artAndCraft/:id",
        element: (
          <PrivateRoutes>
            <UpdateCraftItem />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://art-and-craft-store-server-one.vercel.app/artAndCraft/${params.id}`),
      },
      {
        path: "/addCraftItem",
        element: (
          <PrivateRoutes>
            <AddCraftItem />
          </PrivateRoutes>
        ),
      },
      {
        path: "/categories/:subCategory",
        element: (
          <PrivateRoutes>
            <CategoryData />
          </PrivateRoutes>
        ),
        loader: ({ params }) => fetch(`https://art-and-craft-store-server-one.vercel.app/artAndCraft/categories/${params.subCategory}`)
      },
    ],
  },
]);

export default router;
