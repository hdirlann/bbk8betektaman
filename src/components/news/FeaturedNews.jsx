import news from "../../data/news";
import FeaturedNewsCard from "../../components/news/FeaturedNewsCard";

export default function FeaturedNews() {

  const featured = news.find(item => item.featured);

  if (!featured) return null;

  return (
    <section className="bg-white py-20">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12 text-center">

          <p className="text-sm font-semibold uppercase tracking-[4px] text-green-700">
            Berita Utama
          </p>

          <h2 className="mt-3 text-4xl font-bold text-gray-800">
            Sorotan Terbaru
          </h2>

        </div>

        <FeaturedNewsCard news={featured} />

      </div>

    </section>
  );
}