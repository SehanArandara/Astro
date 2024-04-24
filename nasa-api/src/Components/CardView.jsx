// CardView.js

import React from "react";
import { Link } from "react-router-dom";

const CardView = ({ apodData }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
      <img src={apodData.url} alt={apodData.title} className="w-full" />
      <p>{apodData.title}</p>
      <Link to={`/apod/${apodData.date}`} className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
        View
      </Link>
    </div>
  );
};

export default CardView;
