import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CalendarDays } from "lucide-react";
import { getNewsById } from "../services/newsService";

export default function NewsDetail() {
  const { id } = useParams();

  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        const data = await getNewsById(id);
        setNews(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchNews();
  }, [id]);

  if (loading) {
    return (
      <div className="py-24 text-center">
        Memuat berita...
      </div>
    );
  }

  if (!news) {
    return (
      <div className="py-24 text-center">
        Berita tidak ditemukan.
      </div>
    );
  }

  return (
    <section className="bg-white py-16">

      <div className="mx-auto max-w-5xl px-6">

        <Link
          to="/news"
          className="mb-10 inline-flex items-center gap-2 text-green-700 hover:text-green-900"
        >
          <ArrowLeft size={18} />
          Kembali ke Berita
        </Link>

        <img
          src={news.image}
          alt={news.title}
          className="h-[500px] w-full rounded-3xl object-cover"
        />

        <div className="mt-8 flex items-center gap-2 text-green-700">

          <CalendarDays size={18} />

          <span>
            {new Date(news.created_at).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>

        </div>

        <h1 className="mt-6 text-4xl font-bold text-gray-800">
          {news.title}
        </h1>

        <p className="mt-8 text-lg leading-9 whitespace-pre-line text-gray-700">
          {news.content}
        </p>

      </div>

    </section>
  );
}