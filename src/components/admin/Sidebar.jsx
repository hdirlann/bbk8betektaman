import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Newspaper,
  Package,
  LogOut,
} from "lucide-react";

import { signOut } from "../../services/authService";

export default function Sidebar() {
  const navigate = useNavigate();

  const menu = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      path: "/admin",
    },
    {
      title: "Berita",
      icon: Newspaper,
      path: "/admin/news",
    },
    {
      title: "Produk",
      icon: Package,
      path: "/admin/products",
    },
  ];

  const handleLogout = async () => {
    try {
      await signOut();
      navigate("/admin/login", { replace: true });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <aside className="flex h-screen w-64 flex-col bg-green-800 text-white shadow-xl">
      {/* Logo */}
      <div className="border-b border-green-700 px-6 py-6">
        <h1 className="text-2xl font-bold">
          Admin Desa
        </h1>

        <p className="mt-1 text-sm text-green-200">
          Betektaman
        </p>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-3 py-6">
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/admin"}
              className={({ isActive }) =>
                `mb-2 flex items-center gap-3 rounded-xl px-4 py-3 font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-white text-green-800 shadow-md"
                    : "hover:bg-green-700"
                }`
              }
            >
              <Icon size={20} />
              <span>{item.title}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="border-t border-green-700 p-4">
        <button
          onClick={handleLogout}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-500 px-4 py-3 font-medium transition hover:bg-red-600"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
}