import React from "react";
import { NavLink } from "react-router-dom";

const SideBar: React.FC = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white">
    <nav className="w-full h-full flex flex-col justify-center items-center">
      <ul className="space-y-2 w-full text-center">
      <li>
        <NavLink to="/" className="block px-4 py-2 hover:bg-gray-700">
        Home
        </NavLink>
      </li>
      <li>
        <NavLink
        to="/error-boundaries"
        className="block px-4 py-2 hover:bg-gray-700"
        >
        Error Boundaries
        </NavLink>
      </li>
      <li>
        <NavLink
        to="/route-guards"
        className="block px-4 py-2 hover:bg-gray-700"
        >
        Routes Guards
        </NavLink>
      </li>
      <li>
        <NavLink
        to="/lazy-loading"
        className="block px-4 py-2 hover:bg-gray-700"
        >
        Lazy Loading
        </NavLink>
      </li>
      <li>
        <NavLink
        to="/params"
        className="block px-4 py-2 hover:bg-gray-700"
        >
        Params
        </NavLink>
      </li>
      <li>
        <NavLink
        to="/router-hooks"
        className="block px-4 py-2 hover:bg-gray-700"
        >
        Router Hooks
        </NavLink>
      </li>
      <li>
        <NavLink
        to="/nested-routing"
        className="block px-4 py-2 hover:bg-gray-700"
        >
        Nested Routing
        </NavLink>
      </li>
      </ul>
    </nav>
    </div>
  );
};

export default SideBar;
