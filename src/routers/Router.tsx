import { createBrowserRouter } from "react-router-dom";

import MainPage from "@/pages/MainPage";
import LoginPage from "@/pages/LoginPage";
import LibraryPage from "@/pages/LibraryPage";
import TrendPage from "@/pages/TrendPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/library",
    element: <LibraryPage />,
    children: [
      {
        path: "article",
        element: <LibraryPage />,
        children: [
          {
            path: ":topic",
            element: <LibraryPage />,
          },
        ],
      },
      {
        path: "develop",
        element: <LibraryPage />,
        children: [
          {
            path: ":topic",
            element: <LibraryPage />,
          },
        ],
      },
    ],
  },
  {
    path: "/trend",
    element: <TrendPage />,
  },
]);

export default router;
