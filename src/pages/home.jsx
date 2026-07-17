import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Hero from "../sections/home/Hero";
import AboutVillage from "../sections/home/AboutVillage";
import Statistics from "../sections/home/Statistics";
import Potentials from "../sections/home/Potentials";
import WhyChooseUs from "../sections/home/WhyChooseUs";
import LatestNews from "../sections/home/LatestNews";
import Gallery from "../sections/home/Gallery";
import Location from "../sections/home/Location";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <AboutVillage />

      <Statistics />

      <Potentials />

      <WhyChooseUs />

      <LatestNews />

      <Gallery />

      <Location />

      <Footer />
    </>
  );
}