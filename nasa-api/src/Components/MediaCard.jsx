import React from "react";

const MediaCard = ({ item, image }) => {
  // Destructure the data from the item prop
  const { data } = item || {};
  const { title, photographer, keywords, nasa_id, date_created, description, media_type } = data?.[0] || {};

  
  const [showMore, setShowMore] = React.useState(false);

  
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="flex items-center mx-52 mb-10">
      <div>
        <div className="mb-10 text-3xl">
          <h1>{title}</h1>
        </div>
        <div>
          <img
            className="w-96 h-56 cursor-pointer"
            src={image}
            alt="not loaded"
          />
          {
            !showMore && (
              <button
              className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              onClick={toggleShowMore}
            >
              Show Information
          </button>
            ) 
          }
          
        </div>
        {showMore && (
          <div className="mt-4">
            <div>
              <p>Photographer: {photographer}</p>
            </div>
            <div>
              <p>Keywords: {keywords?.join(", ")}</p>
            </div>
            <div>
              <p>Date Created: {date_created}</p>
            </div>
            <div>
              <p>Description: {description}</p>
            </div>
            <button
              className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              onClick={toggleShowMore}
            >
              Hide Information
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MediaCard;
