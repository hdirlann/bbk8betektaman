import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Profile from "../pages/Profile";
import News from "../pages/News";
import NewsDetail from "../pages/NewsDetail";
import Product from "../pages/Product";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/products" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}