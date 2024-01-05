import React from "react";
import { NavLink } from "react-router-dom";
import { useMovieContext } from "../context/MovieContext";

const Categories = () => {
  const { setMovies, allMovies } = useMovieContext();

  const handleDOMBoxClick = () => {
    setMovies(allMovies);
  };

  return (
    <div className="flex justify-center flex-col items-center sm:flex-row gap-4 p-6 cursor-pointer bg-[ rgba(34, 54, 71, 0.997)] text-[#080808] dark:text-[#acaaaa]">
      <NavLink
        className="p-3 border border-red-600 rounded-full hover:bg-red-600 hover:text-white transition-all"
        to="/"
        onClick={handleDOMBoxClick}
      >
        MOVİES
      </NavLink>
      <NavLink
        className="p-3 border border-red-600 rounded-full hover:bg-red-600 hover:text-white transition-all"
        to="/topmovie"
      >
        TOP-MOVİES
      </NavLink>
      <NavLink
        className="p-3 border border-red-600 rounded-full hover:bg-red-600 hover:text-white transition-all"
        to="/tv"
      >
        TV SERİES
      </NavLink>
      <NavLink
        className="p-3 border border-red-600 rounded-full hover:bg-red-600 hover:text-white transition-all"
        to="/toptv"
      >
        TOP-TV SERİES
      </NavLink>
      <NavLink
        className="p-3 border border-red-600 rounded-full hover:bg-red-600 hover:text-white transition-all"
        to="/popular"
      >
        POPULAR
      </NavLink>
    </div>
  );
};

export default Categories;
