import { useEffect, useState } from "react";
import ProductCard from "../../components/product/ProductCard";
import { getAllProducts } from "../../services/productService";

export default function ProductGrid() {

  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function fetchProducts() {

      try {

        const data = await getAllProducts();

        const filtered = data.filter(
          item => !item.featured
        );

        setProducts(filtered);

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);

      }

    }

    fetchProducts();

  }, []);

  if (loading) {
    return (
      <section className="py-20 text-center">
        Memuat produk...
      </section>
    );
  }

  return (

    <section className="bg-gray-50 py-20">

      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {products.map(product => (

            <ProductCard
              key={product.id}
              product={product}
            />

          ))}

        </div>

      </div>

    </section>

  );

}