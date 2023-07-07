import { createBrowserRouter } from "react-router-dom";
import App from "@/App.tsx";
import Welcome from "@/pages/Welcome.tsx";
import About from "@/pages/About.tsx";

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
