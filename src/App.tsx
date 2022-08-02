import React, { Suspense } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import OrderSummary from "./pages/OrderSummary/OrderSummary";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Products from "./pages/Products/Products";
import FeaturedProducts from "./components/FeaturedProducts/FeaturedProducts";
import NewProducts from "./components/NewProducts/NewProducts";
import Users from "./pages/Users/Users";
import UserDetails from "./components/UserDetails/UserDetails";
import AuthProvider from "./auth/Auth/AuthProvider";
import Profile from "./pages/Profile/Profile";
import Login from "./components/Login/Login";
import RequireAuth from "./auth/RequireAuth/RequireAuth";
const LazyAbout = React.lazy(() => import("./pages/About/About"));

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="about"
            element={
              <Suspense fallback="Loading...">
                <LazyAbout />
              </Suspense>
            }
          />
          <Route path="order-summary" element={<OrderSummary />} />
          <Route path="products" element={<Products />}>
            <Route index element={<FeaturedProducts />} />
            <Route path="new" element={<NewProducts />} />
            <Route path="featured" element={<FeaturedProducts />} />
          </Route>
          <Route path="users" element={<Users />}>
            <Route path=":userId" element={<UserDetails />} />
          </Route>
          <Route
            path="profile"
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
