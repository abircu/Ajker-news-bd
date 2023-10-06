import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategory] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);
  return (
    <div>
      <h1 className="text-2xl">All Categories:{categories.length}</h1>
      {categories.map((category) => (
        <Link
          className="block  p-4 xl font-bold text-[#9F9F9F]"
          key={category.id}
          to={`${category.id}`}
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
};

export default LeftSideNav;
