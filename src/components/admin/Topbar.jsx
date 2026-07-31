import { Bell, UserCircle } from "lucide-react";

export default function Topbar() {
  return (
    <header className="flex h-20 items-center justify-between bg-white px-8 shadow">

      <div>

        <h2 className="text-2xl font-bold text-gray-800">
          Dashboard
        </h2>

        <p className="text-gray-500">
          Selamat datang kembali 👋
        </p>

      </div>

      <div className="flex items-center gap-6">

        <Bell className="cursor-pointer text-gray-600" />

        <div className="flex items-center gap-2">

          <UserCircle
            size={40}
            className="text-green-700"
          />

          <div>

            <p className="font-semibold">
              Admin
            </p>

            <p className="text-sm text-gray-500">
              Administrator
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}