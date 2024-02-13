import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "../common/layout";
import { NotFoundPage } from "../pages/not-found";
import { LandingPage } from "../pages/landing";
import { NewProjectPage } from "../pages/new-project";

export const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    errorElement: null,
    path: "/",
    children: [
      {
        element: <LandingPage />,
        path: "/",
      },
      {
        element: <NewProjectPage />,
        path: "/new-project",
      },
    ],
  },
  {
    element: <NotFoundPage />,
    path: "*",
  },
]);
