import { BrowserRouter, Routes, Route } from "react-router-dom";

// =========================
// Public Pages
// =========================
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import News from "../pages/News";
import NewsDetail from "../pages/NewsDetail";
import Product from "../pages/Product";
import ProductDetail from "../pages/ProductDetail";

// =========================
// Admin Pages
// =========================
import Login from "../pages/admin/Login";
import Dashboard from "../pages/admin/Dashboard";

// =========================
// News Admin
// =========================
import NewsList from "../pages/admin/news/NewsList";
import NewsCreate from "../pages/admin/news/NewsCreate";
import NewsEdit from "../pages/admin/news/NewsEdit";

// =========================
// Product Admin
// =========================
import ProductList from "../pages/admin/products/ProductList";
import ProductCreate from "../pages/admin/products/ProductCreate";
import ProductEdit from "../pages/admin/products/ProductEdit";

// =========================
// Admin Components
// =========================
import AdminLayout from "../components/admin/AdminLayout";
import ProtectedRoute from "../components/admin/ProtectedRoute";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* =========================
            PUBLIC
        ========================= */}

        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<NewsDetail />} />

        <Route path="/products" element={<Product />} />
        <Route path="/products/:id" element={<ProductDetail />} />

        {/* =========================
            LOGIN ADMIN
        ========================= */}

        <Route path="/admin/login" element={<Login />} />

        {/* =========================
            ADMIN
        ========================= */}

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          {/* Dashboard */}
          <Route index element={<Dashboard />} />

          {/* Berita */}
          <Route path="news" element={<NewsList />} />
          <Route path="news/create" element={<NewsCreate />} />
          <Route path="news/edit/:id" element={<NewsEdit />} />

          {/* Produk */}
          <Route path="products" element={<ProductList />} />
          <Route path="products/create" element={<ProductCreate />} />
          <Route path="products/edit/:id" element={<ProductEdit />} />
        </Route>

        {/* =========================
            404
        ========================= */}

        <Route
          path="*"
          element={
            <div className="flex min-h-screen items-center justify-center">
              <h1 className="text-2xl font-bold text-gray-700">
                404 | Halaman Tidak Ditemukan
              </h1>
            </div>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}