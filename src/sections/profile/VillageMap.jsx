import { motion } from "framer-motion";
import {
  MapPin,
  Building2,
  Map,
} from "lucide-react";

export default function VillageMap() {
  return (
    <section className="bg-gray-50 py-24">
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
            Lokasi Desa
          </p>

          <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Temukan Kami
          </h2>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-green-700"></div>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Desa Betektaman berada di Kecamatan Gading,
            Kabupaten Probolinggo, Provinsi Jawa Timur.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-3xl shadow-xl"
          >
            <iframe
              title="Lokasi Desa Betektaman"
              src="https://www.google.com/maps?q=Desa%20Betektaman%20Gading%20Probolinggo&output=embed"
              className="h-[450px] w-full border-0"
              loading="lazy"
            ></iframe>
          </motion.div>

          {/* Informasi */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center rounded-3xl bg-white p-10 shadow-lg"
          >

            <div className="mb-8 flex items-start gap-4">
              <MapPin className="mt-1 text-green-700" />
              <div>
                <h3 className="font-bold text-gray-900">
                  Alamat
                </h3>
                <p className="mt-2 leading-7 text-gray-600">
                  Desa Betektaman,
                  Kecamatan Gading,
                  Kabupaten Probolinggo,
                  Jawa Timur.
                </p>
              </div>
            </div>

            <div className="mb-8 flex items-start gap-4">
              <Building2 className="mt-1 text-green-700" />
              <div>
                <h3 className="font-bold text-gray-900">
                  Kecamatan
                </h3>
                <p className="mt-2 text-gray-600">
                  Gading
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Map className="mt-1 text-green-700" />
              <div>
                <h3 className="font-bold text-gray-900">
                  Kabupaten
                </h3>
                <p className="mt-2 text-gray-600">
                  Probolinggo
                </p>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}