import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, CircleUser } from "lucide-react";

const menus = [
  { name: "Home", path: "/" },
  { name: "Profil", path: "/profile" },
  { name: "Berita", path: "/news" },
  { name: "Produk", path: "/products" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center px-6">
        {/* Logo */}
        <div className="flex flex-1">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/logo-desa.png"
              alt="Logo Desa"
              className="h-11 w-11 object-contain"
            />

            <div>
              <h1 className="text-xl font-bold text-green-700">
                Desa Betektaman
              </h1>

              <p className="text-xs text-gray-500">
                Kecamatan Gading • Probolinggo
              </p>
            </div>
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden flex-1 items-center justify-center gap-10 md:flex">
          {menus.map((menu) => (
            <li key={menu.path}>
              <NavLink
                to={menu.path}
                className={({ isActive }) =>
                  `font-medium transition ${
                    isActive
                      ? "text-green-700"
                      : "text-gray-700 hover:text-green-700"
                  }`
                }
              >
                {menu.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Icon Admin */}
        <div className="hidden flex-1 justify-end md:flex">
          <Link
            to="/admin/login"
            title="Login Admin"
            className="rounded-full p-2 text-gray-600 transition hover:bg-green-50 hover:text-green-700"
          >
            <CircleUser size={26} />
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="ml-auto md:hidden"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t bg-white md:hidden">
          {menus.map((menu) => (
            <NavLink
              key={menu.path}
              to={menu.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-6 py-4 ${
                  isActive
                    ? "bg-green-50 text-green-700"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              {menu.name}
            </NavLink>
          ))}

          <Link
            to="/admin/login"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 border-t px-6 py-4 text-gray-700 hover:bg-green-50 hover:text-green-700"
          >
            <CircleUser size={22} />
            Login Admin
          </Link>
        </div>
      )}
    </header>
  );
}