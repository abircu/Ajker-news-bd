import React from "react";
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100">
      <button className="btn btn-secondary text-white">Breaking News</button>
      <Marquee
        pauseOnHover={true}
        speed={100}
        className="text-2xl font-poppins font-medium"
      >
        I can be a React component, multiple React components, or just some
        text.
      </Marquee>
    </div>
  );
};

export default BreakingNews;
