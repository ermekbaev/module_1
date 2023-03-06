import React from "react";
import { Route, Routes } from "react-router-dom";
import { AboutPage } from "../pages/AboutPage";
import { TodosPage } from "../pages/TodosPage";

const MainRoutes: React.FC = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <TodosPage />,
      id: 1,
    },
    {
      link: "/about",
      element: <AboutPage />,
      id: 2,
    },
  ];

  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
      </Routes>
    </>
  );
};

export default MainRoutes;
