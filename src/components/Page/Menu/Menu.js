import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  return (
    <div className="container py-5">
      <div className="d-flex gap-5 justify-content-center mb-4 menu">
        <NavLink
          className={({ isActive }) => (isActive ? "activeStyle" : undefined)}
          to="/breakfast"
        >
          Breakfast
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "activeStyle" : undefined)}
          to="/lunch"
        >
          Lunch
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "activeStyle" : undefined)}
          to="/dinner"
        >
          Dinner
        </NavLink>
      </div>

      <Outlet />
    </div>
  );
};

export default Menu;
