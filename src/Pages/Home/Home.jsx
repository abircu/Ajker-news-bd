import React from "react";
import Header from "../../Shared/Header/Header";
import Navbar from "../../Shared/Navbar/Navbar";
import RightSideNav from "../../Shared/RightSideNav/RightSideNav";
import LeftSideNav from "../../Shared/LeftSideNav/LeftSideNav";
import BreakingNews from "./BreakingNews";
import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";

const Home = () => {
  const newsData = useLoaderData();
  console.log(newsData);

  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <div className="grid grid-col-1 md:grid-cols-4 gap-6">
        <div className="grid ">
          <LeftSideNav></LeftSideNav>
        </div>
        {/* news container */}
        <div className=" col-span-2">
          {newsData?.map((aNews) => (
            <NewsCard key={aNews._id} news={aNews}></NewsCard>
          ))}
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
