import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../auth/Auth/AuthProvider";

const Navbar = () => {
  const auth = useAuth();

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      {auth && !auth.user && <NavLink to="/login">Login</NavLink>}
    </nav>
  );
};

export default Navbar;
