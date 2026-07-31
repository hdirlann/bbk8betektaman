import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import ProductHero from "../sections/product/ProductHero";
import FeaturedProduct from "../sections/product/FeaturedProduct";
import SearchProduct from "../sections/product/SearchProduct";
import ProductGrid from "../sections/product/ProductGrid";

export default function Product() {
  return (
    <>
      <Navbar />

      <main>

        <ProductHero />

        <FeaturedProduct />

        <SearchProduct />

        <ProductGrid />

      </main>

      <Footer />
    </>
  );
}