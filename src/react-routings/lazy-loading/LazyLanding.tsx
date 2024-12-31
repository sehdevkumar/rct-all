import { ReactNode } from "react";
import { NavLink, Outlet, Route, Routes, useLocation } from "react-router-dom";

const LazyNav = () => {
  const { pathname } = useLocation();

  return (
    <nav className="bg-gradient-to-r from-indigo-500 to-purple-500 p-4">
      <ul className="flex space-x-4">
        <li>
          <NavLink
            to="/lazy-loading"
            className={
              pathname === "/lazy-loading" ? "bg-gray-800 text-white" : "bg-white text-indigo-500"
            }
          >
            <span className="px-4 py-2 rounded-md">L1</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/lazy-loading/link1"
            className={
              pathname === "/lazy-loading/link1" ? "bg-gray-800 text-white" : "bg-white text-indigo-500"
            }
          >
            <span className="px-4 py-2 rounded-md">L2</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/lazy-loading/link2"
            className={
              pathname === "/lazy-loading/link2" ? "bg-gray-800 text-white" : "bg-white text-indigo-500"
            }
          >
            <span className="px-4 py-2 rounded-md">L3</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/lazy-loading/link3"
            className={
              pathname === "/lazy-loading/link3" ? "bg-gray-800 text-white" : "bg-white text-indigo-500"
            }
          >
            <span className="px-4 py-2 rounded-md">L4</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};


export const LazyLanding = () => {
  return (
    <>
      <LazyNav></LazyNav>
      <Outlet />

    </>
  );
};
