import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/index";
import ProductPage from "./pages/ProductPage/index";
import FaqPage from "./pages/FaqPage/index";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/faq" element={<FaqPage />} />
    </Routes>
  );
};
export default Router;
