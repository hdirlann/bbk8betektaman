import { motion } from "framer-motion";
import { Landmark } from "lucide-react";

export default function History() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-lg font-medium uppercase tracking-widest text-green-600">
            Sejarah Desa
          </p>

          <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Perjalanan Desa Betektaman
          </h2>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-green-700" />
        </motion.div>

        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img
              src="/images/profile/history.jpg"
              alt="Sejarah Desa Betektaman"
              className="h-[450px] w-full rounded-3xl object-cover shadow-xl"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100">
              <Landmark className="text-green-700" size={32} />
            </div>

            <h3 className="mb-6 text-3xl font-bold text-gray-900">
              Sejarah Singkat Desa
            </h3>

            <p className="mb-6 leading-8 text-gray-600">
              Desa Betektaman merupakan salah satu desa di Kecamatan
              Gading, Kabupaten Probolinggo. Sejak dahulu masyarakat
              menggantungkan kehidupan pada sektor pertanian dan
              perkebunan yang menjadi sumber utama perekonomian desa.
            </p>

            <p className="mb-6 leading-8 text-gray-600">
              Seiring perkembangan zaman, Desa Betektaman terus
              berkembang melalui pembangunan infrastruktur, peningkatan
              kualitas pelayanan masyarakat, serta pengembangan potensi
              desa di berbagai bidang.
            </p>

            <p className="leading-8 text-gray-600">
              Hingga saat ini Desa Betektaman terus berkomitmen menjadi
              desa yang maju, mandiri, dan sejahtera dengan tetap
              menjaga nilai budaya, gotong royong, dan kearifan lokal.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}