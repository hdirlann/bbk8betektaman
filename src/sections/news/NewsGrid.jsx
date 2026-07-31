import { useEffect, useState } from "react";
import { getAllNews } from "../../services/newsService";

import NewsCard from "../../components/news/NewsCard";

export default function NewsGrid() {

  const [news, setNews] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function fetchNews() {

      try {

        const data = await getAllNews();

        const filteredNews = data.filter(
          (item) => !item.featured
        );

        setNews(filteredNews);

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);

      }

    }

    fetchNews();

  }, []);

  if (loading) {

    return (
      <section className="py-20 text-center">
        Memuat berita...
      </section>
    );

  }

  return (
    <section className="bg-gray-50 py-20">

      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {news.map((item) => (

            <NewsCard
              key={item.id}
              news={item}
            />

          ))}

        </div>

      </div>

    </section>
  );
}