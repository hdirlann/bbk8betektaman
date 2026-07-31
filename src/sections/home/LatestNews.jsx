import { useEffect, useState } from "react";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { getLatestNews } from "../../services/newsService";

export default function LatestNews() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        const data = await getLatestNews(3);
        setNews(data);
      } catch (error) {
        console.error("Gagal mengambil berita:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchNews();
  }, []);

  if (loading) {
    return (
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-gray-500">Memuat berita...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-green-700">
            Berita Terbaru
          </p>

          <h2 className="mt-3 text-4xl font-bold text-gray-800">
            Informasi & Kegiatan Desa
          </h2>

          <p className="mt-4 text-gray-500">
            Ikuti informasi terbaru mengenai kegiatan dan perkembangan Desa
            Betektaman.
          </p>
        </div>

        {/* Empty State */}
        {news.length === 0 ? (
          <div className="rounded-3xl bg-white p-16 text-center shadow">

            <h3 className="text-2xl font-semibold text-gray-800">
              Belum Ada Berita
            </h3>

            <p className="mt-3 text-gray-500">
              Berita terbaru akan muncul di sini setelah admin menambahkan
              berita.
            </p>

          </div>
        ) : (

          <div className="grid gap-8 md:grid-cols-3">

            {news.map((item) => (

              <article
                key={item.id}
                className="group relative overflow-hidden rounded-3xl bg-white shadow transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                {/* Featured */}
                {item.featured && (
                  <div className="absolute left-4 top-4 z-10 flex items-center gap-1 rounded-full bg-yellow-400 px-3 py-1 text-xs font-semibold text-white shadow">

                    <Star
                      size={14}
                      className="fill-white"
                    />

                    Berita Utama

                  </div>
                )}

                {/* Image */}
                <img
                  src={
                    item.image ||
                    "https://placehold.co/600x400?text=No+Image"
                  }
                  alt={item.title}
                  className="h-56 w-full object-cover transition duration-300 group-hover:scale-105"
                />

                {/* Content */}
                <div className="p-6">

                  <p className="text-sm text-green-700">
                    {new Date(item.created_at).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>

                  <h3 className="mt-3 line-clamp-2 text-xl font-bold text-gray-800">
                    {item.title}
                  </h3>

                  <p className="mt-3 line-clamp-3 text-gray-600">
                    {item.content
                      ? item.content.length > 120
                        ? item.content.substring(0, 120) + "..."
                        : item.content
                      : "Belum ada isi berita."}
                  </p>

                  <Link
                    to={`/news/${item.id}`}
                    className="mt-6 inline-flex items-center gap-2 font-semibold text-green-700 transition hover:text-green-800"
                  >
                    Baca Selengkapnya

                    <ArrowRight size={18} />
                  </Link>

                </div>

              </article>

            ))}

          </div>

        )}

        {/* Button */}
        <div className="mt-12 text-center">

          <Link
            to="/news"
            className="inline-flex items-center rounded-xl bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800"
          >
            Lihat Semua Berita
          </Link>

        </div>

      </div>
    </section>
  );
}