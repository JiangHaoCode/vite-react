import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App></App>
      {/*<Routes>*/}
      {/*  <Route path="/" element={<App />}>*/}
      {/*    <Route path={"/about"} element={<About />}></Route>*/}
      {/*  </Route>*/}

      {/*  <Route path="expenses" element={<Expenses />} />*/}
      {/*  <Route path="invoices" element={<Invoices />} />*/}
      {/*</Routes>*/}
    </BrowserRouter>
  </React.StrictMode>
);
