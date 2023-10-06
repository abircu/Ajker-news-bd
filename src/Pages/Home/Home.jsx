import React from "react";
import Header from "../../Shared/Header/Header";
import Navbar from "../../Shared/Navbar/Navbar";
import RightSideNav from "../../Shared/RightSideNav/RightSideNav";
import LeftSideNav from "../../Shared/LeftSideNav/LeftSideNav";
import BreakingNews from "./BreakingNews";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <div className="grid grid-col-1 md:grid-cols-4 gap-6">
        <div className="grid ">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className=" col-span-2">
          <h2 className="text-3xl">Main content</h2>
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
    // new project
  );
};

export default Home;
