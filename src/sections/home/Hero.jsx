import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/hero/)",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-7xl px-6 text-white">
          <p className="mb-3 text-lg font-medium uppercase tracking-widest text-green-300">
            Website Resmi
          </p>

          <h1 className="mb-6 max-w-3xl text-5xl font-bold leading-tight md:text-7xl">
            Desa Betektaman
          </h1>

          <p className="mb-10 max-w-2xl text-lg leading-8 text-gray-200 md:text-xl">
            Selamat datang di Website Resmi Desa Betektaman. Temukan informasi
            mengenai profil desa, berita terbaru, potensi desa, serta produk
            unggulan masyarakat.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/profile"
              className="rounded-xl bg-green-700 px-8 py-4 font-semibold transition hover:bg-green-800"
            >
              Lihat Profil
            </Link>

            <Link
              to="/products"
              className="flex items-center gap-2 rounded-xl border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-black"
            >
              Lihat Produk
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}