import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleAPOD from "../Components/SingleAPOD";
import SearchResults from "../Components/SearchResults";
import { Link, useParams } from "react-router-dom";

const APOD = () => {
  const { startDate, endDate } = useParams(); // Get startDate and endDate from URL params

  const [data, setData] = useState(null);
  const [dataArr, setDataArr] = useState([]);
  const [error, setError] = useState("");
  const [searchType, setSearchType] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  useEffect(() => {
    if (startDate && endDate) {
      setSearchType("dateRange");
    } else {
      getTodayAPOD();
    }
  }, [startDate, endDate]);

  const getTodayAPOD = async () => {
    try {
      const res = await axios.get("https://api.nasa.gov/planetary/apod", {
        params: {
          api_key: "zhjPr1rcBT0GQpheh6Bsec2BtZkmTafDMkJ9AhGM",
        },
      });

      setData(res.data);
      setError(null);
    } catch (e) {
      console.log(e);
      setError("Error in Fetching APOD data 1");
    }
  };

  const handleSearch = () => {
    setSearchType("dateRange");
    setDataArr([]); // Clear previous search results
  };

  if (error) {
    return <div>Error : {error}</div>;
  }

  return (
    <div>
      <div className="centerx">
        <label htmlFor="start_date">Start Date:</label>
        <input
          type="date"
          id="start_date"
          value={start}
          onChange={(e) => setStart(e.target.value)}
        />
        <br />
        <label htmlFor="end_date">End Date:</label>
        <input
          type="date"
          id="end_date"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
        />
        <br />
        <Link
          to={`/apod/${start}/${end}`}
          className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
        >
          <button onClick={handleSearch}>Search</button>
        </Link>
      </div>

      {searchType === "" && (
        <div className="text-white p-6">
          <h1>ASTRONOMY PIC OF TODAY</h1>
          {data && <SingleAPOD apodData={data} />}
        </div>
      )}

      {searchType === "dateRange" && <SearchResults dataArr={dataArr} />}
    </div>
  );
};

export default APOD;
