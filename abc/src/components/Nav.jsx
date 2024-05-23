import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="justify-center flex gap-x-10">
      <NavLink
    style={(e) => ({ fontWeight: e.isActive ? "900" : "400" })}
    className={(e) => (e.isActive ? "text-red-500" : "")}
    to="/">
    Home
    </NavLink>
    <NavLink
    style={(e) => ({ fontWeight: e.isActive ? "900" : "400" })}
    className={(e) => (e.isActive ? "text-red-500" : "")}
    to="/Users">
                Users
    </NavLink>
<NavLink
    style={(e) => ({ fontWeight: e.isActive ? "900" : "400" })}
    className={(e) => (e.isActive ? "text-red-500" : "")}
    to="/About">
                    About

    </NavLink>

            
        </nav>
    );
};

export default Nav;
