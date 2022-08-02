import React from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";

const Products = () => {
  return (
    <div className="products">
      <input type="search" placeholder="search a product..." />
      <Link to="featured">Featured</Link>
      <Link to="new">New</Link>
      <Outlet />
    </div>
  );
};

export default Products;
