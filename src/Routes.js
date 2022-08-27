import { Routes, Route } from "react-router-dom";

import ProductsPage from "./pages/ProductsPage/index";
import ProductPage from "./pages/ProductPage/index";
import HomePage from "./pages/HomePage/index";
import FaqPage from "./pages/FaqPage/index";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/faq" element={<FaqPage />} />
    </Routes>
  );
};
export default Router;
