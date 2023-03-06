import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";

import MainRoutes from "./routes/MainRoutes";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <MainRoutes />
    </>
  );
};

export default App;
