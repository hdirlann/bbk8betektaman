import { Search } from "lucide-react";

export default function SearchNews() {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative mx-auto max-w-xl">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />

          <input
            type="text"
            placeholder="Cari berita..."
            className="w-full rounded-full border border-gray-300 py-3 pl-12 pr-4 outline-none focus:border-green-700"
          />
        </div>
      </div>
    </section>
  );
}