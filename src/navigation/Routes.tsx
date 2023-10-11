import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { PATHS } from "./paths";
import Projects from "../screens/Projects";
import Boards from "../screens/Boards";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path={PATHS.ROOT} element={<Navigate to={PATHS.PROJECTS} />} />
      <Route path={PATHS.PROJECTS} element={<Projects />} />
      <Route path={`${PATHS.PROJECTS}/:id`} element={<Boards />} />
    </Routes>
  );
};

export default Router;
