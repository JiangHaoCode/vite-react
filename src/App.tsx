// import React from "react";
import { Route, Routes } from "react-router-dom";
import Welcome from "@/pages/Welcome.tsx";
import About from "@/pages/About.tsx";

const App = () => {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
