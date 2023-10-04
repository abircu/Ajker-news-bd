import React from "react";
import Header from "../../Shared/Header/Header";
import Navbar from "../../Shared/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <h2 className="text-2xl font-bold font-poppins">this is home page</h2>
    </div>
  );
};

export default Home;
