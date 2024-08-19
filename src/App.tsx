import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";

const App = () => {
  return (
    <>
      <Navigation />
      main
      <Outlet />
    </>
  );
};

export default App;
