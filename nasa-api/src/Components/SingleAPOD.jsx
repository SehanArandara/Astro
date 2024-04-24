import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleAPOD = () => {
  const [apodData, setApodData] = useState(null);
  const { date } = useParams();
  const [dataType, setDataType] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const getSingleAPOD = async () => {
      try {
        const res = await axios.get("https://api.nasa.gov/planetary/apod", {
          params: {
            api_key: "zhjPr1rcBT0GQpheh6Bsec2BtZkmTafDMkJ9AhGM",
            date: date,
          },
        });
        setApodData(res.data);
        setDataType(res.data.media_type);
        setError("");
      } catch (error) {
        console.error("Error fetching APOD data:", error);
        setError("Error fetching APOD data");
      }
    };

    getSingleAPOD();
  }, [date]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!apodData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{apodData.title}</h1>
      {dataType === "image" ? (
        <img
          src={apodData.url}
          alt={apodData.title}
          className="rounded-lg shadow-lg mb-4"
        />
      ) : dataType === "video" ? (
        <iframe
          src={apodData.url}
          title={apodData.title}
          className="rounded-lg shadow-lg mb-4"
          width="560"
          height="315"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      ) : (
        <p>No media</p>
      )}
      <p>{apodData.explanation}</p>
    </div>
  );
};

export default SingleAPOD;
