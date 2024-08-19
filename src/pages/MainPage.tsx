import MainBoard from "@/components/Main/MainBoard";
import MainViewAll from "@/components/Main/MainViewAll";
import Navigation from "@/components/Navigation/Navigation";
import React from "react";

const MainPage = () => {
  return (
    <>
      <Navigation />

      <MainBoard />
      <MainViewAll />
    </>
  );
};

export default MainPage;
