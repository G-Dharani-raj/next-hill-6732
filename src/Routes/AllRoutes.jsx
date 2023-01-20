import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLoginCard from "../Cards/AdminLoginCard";
import { Admin } from "../Components/Admin";
import AdminAddPage from "../Components/Admin/AdminAddPage";
import HomePage from "../Components/HomePage/HomePage";
import Products from "../Components/ProductPage/Products";
import ProductCard from "../Components/ProductPage/ProductCard";
import SignupCard from "../Cards/SignupCard";
import Checkout from "../Components/Checkout/Checkout";
import Shippings from "../Components/Checkout/Shippings";
import ProductDetails from "../Components/ProductPage/ProductDetails";
import Payment from "../Components/Checkout/Payment";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<h1>123</h1>} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/admin/add" element={<AdminAddPage />} />
      <Route path="/signup" element={<SignupCard />} />
      <Route path="/adminlogin" element={<AdminLoginCard />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/shipping" element={<Shippings />} />
      <Route path="*" element={<h1>123</h1>} />
    </Routes>
  );
};

export default AllRoutes;
