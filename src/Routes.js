import { Routes, Route } from "react-router-dom";

import ProductsPage from "./pages/ProductsPage/index";
import ProductPage from "./pages/ProductPage/index";
import CheckoutPage from "./pages/CheckoutPage";
import HomePage from "./pages/HomePage/index";
import ErrorPage from "./pages/ErrorPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
export default Router;
