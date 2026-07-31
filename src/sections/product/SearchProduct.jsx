import { Search } from "lucide-react";

export default function SearchProduct() {
  return (
    <section className="bg-gray-50 py-10">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-2xl">

          <div className="relative">

            <Search
              className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
              size={22}
            />

            <input
              type="text"
              placeholder="Cari produk..."
              className="w-full rounded-full border border-gray-300 bg-white py-4 pl-14 pr-5 shadow-sm outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-200"
            />

          </div>

        </div>

      </div>
    </section>
  );
}