import React, { useEffect, useState } from "react";
import CardView from "../Components/CardView";
import { useParams } from "react-router-dom";
import axios from "axios";

const SearchResults = () => {
  const [dataArr, setDataArr] = useState([]);
  const [error, setError] = useState("");
  const { startDate, endDate } = useParams();

  const fetchData = async () => {
    try {
      const res = await axios.get("https://api.nasa.gov/planetary/apod", {
        params: {
          api_key: "zhjPr1rcBT0GQpheh6Bsec2BtZkmTafDMkJ9AhGM",
          start_date: startDate,
          end_date: endDate,
        },
      });
      setDataArr(res.data);
      setError(null);
    } catch (e) {
      console.log(e);
      setError("Error in Fetching APOD data");
    }
  };

  useEffect(() => {
    fetchData();
  }, [startDate, endDate]);

  return (
    <div>
      <h1>Search Results between {startDate}  to  {endDate}</h1>
      <div className="flex flex-wrap">
        {Array.isArray(dataArr) &&
          dataArr.map((apod) => <CardView key={apod.date} apodData={apod} />)}
      </div>
    </div>
  );
};

export default SearchResults;
