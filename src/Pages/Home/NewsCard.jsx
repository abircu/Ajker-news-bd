import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { title, image_url, details, _id } = news;
  return (
    <div className="border-2 my-6">
      <div></div>
      <div className=" border-b-2">
        <h1 className=" text-xl font-bold p-5">{title}</h1>
        <img className="py-4" src={image_url} alt="" />
        {details.length > 200 ? (
          <p>
            {details.slice(0, 200)}
            <Link
              to={`/news/${_id}`}
              className=" text-fuchsia-500 font-semibold ml-3"
              state={{ news: news }}
            >
              Read More...
            </Link>
          </p>
        ) : (
          <p>{details}</p>
        )}
      </div>
      <div>
        <p>{news.total_view}</p>
      </div>
    </div>
  );
};

export default NewsCard;
