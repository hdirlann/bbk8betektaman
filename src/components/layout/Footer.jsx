import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { FaInstagram } from "react-icons/fa";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white">

      {/* Main Footer */}
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 md:grid-cols-2 lg:grid-cols-4">

        {/* Desa */}
        <div>

          <h2 className="text-3xl font-bold">
            Desa Betektaman
          </h2>

          <p className="mt-5 leading-8 text-green-100">
            Website resmi Pemerintah Desa
            Betektaman, Kecamatan Gading,
            Kabupaten Probolinggo.
          </p>

        </div>

        {/* Menu */}
        <div>

          <h3 className="mb-5 text-xl font-semibold">
            Menu
          </h3>

          <ul className="space-y-3 text-green-100">

            <li>
              <Link
                to="/"
                className="transition hover:text-white"
              >
                Beranda
              </Link>
            </li>

            <li>
              <Link
                to="/profile"
                className="transition hover:text-white"
              >
                Profil
              </Link>
            </li>

            <li>
              <Link
                to="/products"
                className="transition hover:text-white"
              >
                Produk
              </Link>
            </li>

            <li>
              <Link
                to="/news"
                className="transition hover:text-white"
              >
                Berita
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="transition hover:text-white"
              >
                Kontak
              </Link>
            </li>

          </ul>

        </div>

        {/* Kontak */}
        <div>

          <h3 className="mb-5 text-xl font-semibold">
            Kontak
          </h3>

          <div className="space-y-4 text-green-100">

            <div className="flex items-start gap-3">

              <MapPin
                size={20}
                className="mt-1 flex-shrink-0"
              />

              <span>
                Desa Betektaman,
                Kecamatan Gading,
                Kabupaten Probolinggo
              </span>

            </div>

            <div className="flex items-center gap-3">

              <Phone size={20} />

              <span>+62 851-4131-3336</span>

            </div>

            <div className="flex items-center gap-3">

              <Mail size={20} />

              <span className="break-all">
                bbk8unairbetektaman2@gmail.com
              </span>

            </div>

          </div>

        </div>

        {/* Instagram */}
        <div>

          <h3 className="mb-5 text-xl font-semibold">
            Ikuti Kami
          </h3>

          <a
            href="https://www.instagram.com/pemdes.betektaman?igsh=MWJyOHlxMmljMjh6Zw=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-800 text-xl transition hover:bg-white hover:text-green-900"
          >
            <FaInstagram />
          </a>

          <p className="mt-4 text-sm leading-7 text-green-100">
            Ikuti media sosial kami untuk
            memperoleh informasi terbaru
            mengenai kegiatan dan potensi
            Desa Betektaman.
          </p>

        </div>

      </div>

      {/* Bottom Footer */}

      <div className="border-t border-green-800">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-center text-sm text-green-200 md:flex-row">

          <p>
            © 2026 Pemerintah Desa
            Betektaman. Seluruh hak cipta
            dilindungi.
          </p>

          <p>
            Dikembangkan oleh Tim BBK 8
            Universitas Airlangga.
          </p>

        </div>

      </div>

    </footer>
  );
}