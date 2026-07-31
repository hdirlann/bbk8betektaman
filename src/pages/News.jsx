import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import NewsHero from "../sections/news/NewsHero";
import FeaturedNews from "../sections/news/FeaturedNews";
import SearchNews from "../sections/news/SearchNews";
import NewsGrid from "../sections/news/NewsGrid";

export default function News() {
  return (
    <>
      <Navbar />

      <main>
        <NewsHero />
        <FeaturedNews />
        <SearchNews />
        <NewsGrid />
      </main>

      <Footer />
    </>
  );
}