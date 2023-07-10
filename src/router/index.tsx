import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import Welcome from "@/pages/Welcome";
import About from "@/pages/About";

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
    ],
  },
]);

export default router;
