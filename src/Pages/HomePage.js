import React from "react";
import AllArticles from "../component/AllArticles/AllArticles";
import RightSideBar from "../component/RightSideBar/RightSideBar";

const HomePage = () => {
  return (
    <div className="flex px-16">
      <AllArticles></AllArticles>
      <RightSideBar></RightSideBar>
    </div>
  );
};

export default HomePage;
