import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Phone } from "lucide-react";
import { getProductById } from "../services/productService";

export default function ProductDetail() {

  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function fetchProduct() {

      try {

        const data = await getProductById(id);

        setProduct(data);

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);

      }

    }

    fetchProduct();

  }, [id]);

  if (loading) {

    return (
      <div className="py-24 text-center">
        Memuat produk...
      </div>
    );

  }

  if (!product) {

    return (
      <div className="py-24 text-center">
        Produk tidak ditemukan.
      </div>
    );

  }

  return (

    <section className="bg-white py-16">

      <div className="mx-auto max-w-5xl px-6">

        <Link
          to="/products"
          className="mb-10 inline-flex items-center gap-2 text-green-700 hover:text-green-900"
        >
          <ArrowLeft size={18} />
          Kembali ke Produk
        </Link>

        <img
          src={product.image}
          alt={product.name}
          className="h-[500px] w-full rounded-3xl object-cover"
        />

        <h1 className="mt-8 text-4xl font-bold">
          {product.name}
        </h1>

        <div className="mt-6 flex items-center gap-2 text-green-700">

          <MapPin size={18} />

          {product.location}

        </div>

        <p className="mt-8 whitespace-pre-line text-lg leading-9 text-gray-700">
          {product.content}
        </p>

        {product.whatsapp && (

          <a
            href={`https://wa.me/${product.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-xl bg-green-700 px-6 py-4 font-semibold text-white hover:bg-green-800"
          >
            <Phone size={18} />
            Hubungi Penjual
          </a>

        )}

      </div>

    </section>

  );

}