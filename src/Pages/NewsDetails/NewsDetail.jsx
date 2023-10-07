import React from "react";
import RightSideNav from "../../Shared/RightSideNav/RightSideNav";
import Header from "../../Shared/Header/Header";
import { Link, useLocation, useParams } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";

const NewsDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const { news } = location.state;
  console.log(news);
  console.log(id);
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 md:grid-cols-4 mt-10">
        <div className="grid col-span-3">
          <div className="px-8">
            <img src={news.image_url} />
            <p>{news.details}</p>
            <div className="text-blue-500 text-2xl font-semibold text-center">
              <Link to="/login">Goto Home</Link>
            </div>
          </div>
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
