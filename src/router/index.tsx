import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import Welcome from "@/pages/Welcome";
import About from "@/pages/About";
import NotFound from "@/pages/404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "index",
        element: <Welcome />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
]);

export default router;
