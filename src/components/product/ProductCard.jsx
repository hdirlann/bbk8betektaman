import { ArrowRight, Tag, Building2, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">

      <img
        src={product.image}
        alt={product.name}
        className="h-56 w-full object-cover"
      />

      <div className="p-6">

        <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
          <Tag size={16} />
          {product.category}
        </span>

        <h3 className="mt-4 text-2xl font-bold text-gray-800">
          {product.name}
        </h3>

        <div className="mt-4 space-y-2">

          <p className="flex items-center gap-2 text-gray-600">
            <Building2 size={18} className="text-green-700" />
            {product.producer}
          </p>

          <p className="flex items-center gap-2 text-gray-600">
            <MapPin size={18} className="text-green-700" />
            {product.location}
          </p>

        </div>

        <p className="mt-5 text-gray-600 line-clamp-3">
          {product.description}
        </p>

        <Link
          to={`/products/${product.id}`}
          className="mt-6 inline-flex items-center gap-2 font-semibold text-green-700 hover:text-green-800"
        >
          Lihat Detail
          <ArrowRight size={18} />
        </Link>

      </div>

    </div>
  );
}