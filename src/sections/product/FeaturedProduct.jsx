import { useEffect, useState } from "react";
import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { getAllProducts } from "../../services/productService";

export default function FeaturedProduct() {

  const [featuredProduct, setFeaturedProduct] = useState(null);

  useEffect(() => {

    async function fetchProducts() {

      try {

        const data = await getAllProducts();

        const featured = data.find(
          item => item.featured
        );

        setFeaturedProduct(featured);

      } catch (error) {

        console.error(error);

      }

    }

    fetchProducts();

  }, []);

  if (!featuredProduct) return null;

  return (

    <section className="bg-white py-20">

      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-12 lg:grid-cols-2 items-center">

          <img
            src={featuredProduct.image}
            alt={featuredProduct.name}
            className="h-[450px] w-full rounded-3xl object-cover shadow-xl"
          />

          <div>

            <p className="font-semibold uppercase tracking-[4px] text-green-700">
              Produk Unggulan
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              {featuredProduct.name}
            </h2>

            <div className="mt-5 flex items-center gap-2 text-green-700">

              <MapPin size={18} />

              {featuredProduct.location}

            </div>

            <p className="mt-6 leading-8 text-gray-600">
              {featuredProduct.description}
            </p>

            <Link
              to={`/products/${featuredProduct.id}`}
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-green-700 px-6 py-4 font-semibold text-white hover:bg-green-800"
            >
              Lihat Detail

              <ArrowRight size={18} />

            </Link>

          </div>

        </div>

      </div>

    </section>

  );

}