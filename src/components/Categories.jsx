import React from "react";
import { NavLink } from "react-router-dom";

const Catagories = () => {
  return (
    <div className="flex justify-center">
      <NavLink to="/catagories/1" className="btn-danger-bordered m-2">
        Action
      </NavLink>
      <NavLink to="/catagories/2" className="btn-danger-bordered m-2">
        Comedy
      </NavLink>
      <NavLink to="/catagories/3" className="btn-danger-bordered m-2">
        Horror
      </NavLink>
      <NavLink to="/catagories/4" className="btn-danger-bordered m-2">
        Romance
      </NavLink>
      <NavLink to="/catagories/5" className="btn-danger-bordered m-2">
        Thriller
      </NavLink>
    </div>
  );
};

export default Catagories;
