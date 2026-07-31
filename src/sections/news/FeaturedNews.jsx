import { useEffect, useState } from "react";
import { CalendarDays, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { getAllNews } from "../../services/newsService";

export default function FeaturedNews() {
  const [featuredNews, setFeaturedNews] = useState(null);

  useEffect(() => {
    async function fetchNews() {
      try {
        const data = await getAllNews();

        const featured = data.find(
          (item) => item.featured
        );

        setFeaturedNews(featured);
      } catch (error) {
        console.error(error);
      }
    }

    fetchNews();
  }, []);

  if (!featuredNews) return null;

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[4px] text-green-700">
            Berita Unggulan
          </p>

          <h2 className="mt-3 text-4xl font-bold text-gray-800">
            Informasi Terbaru Desa
          </h2>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">

          <img
            src={featuredNews.image}
            alt={featuredNews.title}
            className="h-[450px] w-full rounded-3xl object-cover shadow-xl"
          />

          <div>

            <div className="flex items-center gap-2 text-green-700">

              <CalendarDays size={18} />

              <span>
                {new Date(
                  featuredNews.created_at
                ).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>

            </div>

            <h2 className="mt-6 text-4xl font-bold">
              {featuredNews.title}
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              {featuredNews.description}
            </p>

            <Link
              to={`/news/${featuredNews.id}`}
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-green-700 px-6 py-4 text-white hover:bg-green-800"
            >
              Baca Selengkapnya

              <ArrowRight size={18} />

            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}