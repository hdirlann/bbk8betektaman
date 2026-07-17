import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">

        {/* Desa */}
        <div>
          <h3 className="mb-4 text-2xl font-bold">
            Desa Betektaman
          </h3>

          <p className="text-green-100">
            Website resmi Pemerintah Desa Betektaman,
            Kecamatan Gading, Kabupaten Probolinggo.
          </p>
        </div>

        {/* Menu */}
        <div>
          <h4 className="mb-4 font-semibold">Menu</h4>

          <ul className="space-y-2 text-green-100">
            <li>Home</li>
            <li>Profil</li>
            <li>Berita</li>
            <li>Produk</li>
          </ul>
        </div>

        {/* Kontak */}
        <div>
          <h4 className="mb-4 font-semibold">Kontak</h4>

          <div className="space-y-3 text-green-100">
            <p className="flex items-center gap-2">
              <MapPin size={18} />
              Gading, Kabupaten Probolinggo
            </p>

            <p className="flex items-center gap-2">
              <Phone size={18} />
              (0335) xxxx
            </p>

            <p className="flex items-center gap-2">
              <Mail size={18} />
              info@betektaman.desa.id
            </p>
          </div>
        </div>

        {/* Sosial Media */}
        <div>
          <h4 className="mb-4 font-semibold">
            Ikuti Kami
          </h4>

          <div className="flex gap-4 text-2xl">
            <FaFacebookF className="cursor-pointer hover:text-blue-400 transition" />
            <FaInstagram className="cursor-pointer hover:text-pink-400 transition" />
          </div>
        </div>

      </div>

      <div className="border-t border-green-800 py-5 text-center text-sm text-green-200">
        © {new Date().getFullYear()} Pemerintah Desa Betektaman. All Rights Reserved.
      </div>
    </footer>
  );
}