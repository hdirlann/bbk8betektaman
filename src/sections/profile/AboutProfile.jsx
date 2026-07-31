import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutProfile() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-lg font-medium uppercase tracking-widest text-green-600">
            Tentang Desa
          </p>

          <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Mengenal Desa Betektaman
          </h2>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-green-700"></div>
        </motion.div>

        {/* Content */}
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Gambar */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img
              src="/images/profile/about.jpg"
              alt="Desa Betektaman"
              className="h-[450px] w-full rounded-3xl object-cover shadow-xl"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-6 text-3xl font-bold text-gray-900">
              Selamat Datang di Desa Betektaman
            </h3>

            <p className="mb-6 leading-8 text-gray-600">
              Desa Betektaman merupakan salah satu desa yang berada di
              Kecamatan Gading, Kabupaten Probolinggo, Provinsi Jawa Timur.
              Desa ini dikenal memiliki potensi di bidang pertanian,
              perkebunan, serta masyarakat yang menjunjung tinggi nilai
              gotong royong dalam kehidupan sehari-hari.
            </p>

            <p className="mb-8 leading-8 text-gray-600">
              Melalui website ini, masyarakat dapat memperoleh informasi
              mengenai profil desa, potensi wilayah, berita terbaru,
              serta berbagai produk unggulan UMKM yang ada di Desa
              Betektaman.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-green-600" size={22} />
                <span className="text-gray-700">
                  Kecamatan Gading
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-green-600" size={22} />
                <span className="text-gray-700">
                  Kabupaten Probolinggo
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-green-600" size={22} />
                <span className="text-gray-700">
                  Provinsi Jawa Timur
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-green-600" size={22} />
                <span className="text-gray-700">
                  Mengembangkan potensi desa secara berkelanjutan
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}