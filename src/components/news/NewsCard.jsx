import { CalendarDays, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function NewsCard({ news }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-xl">
      <img
        src={news.image}
        alt={news.title}
        className="h-56 w-full object-cover"
      />

      <div className="p-6">
        <div className="mb-3 flex items-center gap-2 text-sm text-gray-500">
          <CalendarDays size={16} />
          <span>{news.date}</span>
        </div>

        <h3 className="text-xl font-bold text-gray-800">
          {news.title}
        </h3>

        <p className="mt-3 text-gray-600">
          {news.description}
        </p>

        <Link
          to={`/news/${news.id}`}
          className="mt-6 inline-flex items-center gap-2 font-semibold text-green-700 hover:text-green-800"
        >
          Baca Selengkapnya
          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}