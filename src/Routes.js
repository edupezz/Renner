import { Routes, Route } from "react-router-dom";

import ProductsPage from "./pages/ProductsPage/index";
import ProductPage from "./pages/ProductPage/index";
import CheckoutPage from "./pages/CheckoutPage";
import HomePage from "./pages/HomePage/index";
import FaqPage from "./pages/FaqPage/index";

const Router = () => {
  return (
    <Routes>
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/faq" element={<FaqPage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};
export default Router;
