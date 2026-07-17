import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const news = [
  {
    id: 1,
    title: "Musyawarah Desa Tahun 2025",
    image: "/images/news/news1.jpg",
    date: "15 Januari 2025",
    description:
      "Pemerintah Desa Betektaman mengadakan musyawarah desa untuk membahas program pembangunan.",
  },
  {
    id: 2,
    title: "Gotong Royong Bersih Desa",
    image: "/images/news/news2.jpg",
    date: "20 Februari 2025",
    description:
      "Warga Desa Betektaman bersama pemerintah desa melaksanakan kerja bakti membersihkan lingkungan.",
  },
  {
    id: 3,
    title: "Pelatihan UMKM Desa",
    image: "/images/news/news3.jpg",
    date: "10 Maret 2025",
    description:
      "Pelatihan kewirausahaan bagi masyarakat untuk meningkatkan kualitas produk UMKM desa.",
  },
];

export default function LatestNews() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-green-700">
            Berita Terbaru
          </p>

          <h2 className="mt-3 text-4xl font-bold text-gray-800">
            Informasi & Kegiatan Desa
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {news.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-3xl bg-white shadow transition hover:-translate-y-2 hover:shadow-xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">
                <p className="text-sm text-green-700">{item.date}</p>

                <h3 className="mt-2 text-xl font-bold">{item.title}</h3>

                <p className="mt-3 text-gray-600">
                  {item.description}
                </p>

                <Link
                  to={`/news/${item.id}`}
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-green-700 hover:text-green-800"
                >
                  Baca Selengkapnya
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}