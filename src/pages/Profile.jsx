import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import ProfileHero from "../sections/profile/ProfileHero";
import AboutProfile from "../sections/profile/AboutProfile";
import VillageInfo from "../sections/profile/VillageInfo";
import History from "../sections/profile/History";
import VillagePotential from "../sections/profile/VillagePotential";
import VillageMap from "../sections/profile/VillageMap";

export default function Profile() {
  return (
    <>
      <Navbar />

      <ProfileHero />

      <AboutProfile />

      <VillageInfo />

      <History />

      <VillagePotential />

      <VillageMap />

      <Footer />
    </>
  );
}