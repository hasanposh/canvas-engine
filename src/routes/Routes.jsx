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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
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
      },
      {
        path: "/allArtAndCraftItems",
        element: <AllArtAndCraftItems />,
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
