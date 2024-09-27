import React, { useEffect, useState } from "react";

import axios from "axios";
const Movies = () => {
  const [data, setData] = useState("");
  const [search, setSearch] = useState("");
  const handleSearch = () => {
    if (!search) {
      return null;
    }
    axios({
      method: "GET",
      url: `http://www.omdbapi.com/?t=${search}&&apikey=dd55791f`,
    }).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
    setSearch("");
  };
  return (
    <div className="bg-slate-800">
      <div className="flex justify-center items-center py-8">
        <h2 className="uppercase text-gray-200 font-bold text-3xl">
          movie finder
        </h2>
      </div>
      <div className="flex justify-center items-center py-4">
        <div className="1st">
          <input
            className="p-2 lg:w-[300px] w-full outline-none border-none"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Enter movie title..."
          />
        </div>
        <div>
          <button
            className="bg-red-600 text-gray-100 uppercase text-md outline-none border-none cursor-pointer p-2"
            onClick={handleSearch}
          >
            search
          </button>
        </div>
      </div>
      {/* {Display Contents} */}
      {data && (
        <div className="flex lg:justify-center lg:flex-row flex-col lg:gap-2 gap-6 items-center mx-10 py-10">
          <div className="1st lg:w-1/2 w-full flex justify-center">
            <img
              className="rounded-xl shadow-slate-300 shadow-md"
              src={data.Poster}
              alt="loading..."
            />
          </div>
          <div className="2nd bg-slate-100 p-6 rounded-xl shadow-sm shadow-slate-300">
            <h2 className="lg:text-4xl text-2xl font-bold text-red-600 uppercase py-4">
              {data.Title}
            </h2>
            <p className="text-gray-600 lg:text-xl text-lg">{data.Plot}</p>
            <p className="text-md text-gray-600 py-2">{data.Genre}</p>
            <h3 className="text-md text-gray-600 py-2">{data.Actors}</h3>
            <h4 className="text-md text-red-600 py-2">{data.Director}</h4>
            <h4 className="text-md text-red-600 py-2">{data.Writer}</h4>
            <h4 className="text-md text-red-600 py-2">{data.Year}</h4>
            <h4 className="text-md text-red-600 py-2">{data.imdbRating}</h4>
          </div>
        </div>
      )}
    </div>
  );
};

export default Movies;
