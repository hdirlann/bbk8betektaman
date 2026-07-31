import { motion } from "framer-motion";
import { Wheat, Store, Trees } from "lucide-react";

const potentials = [
  {
    icon: Wheat,
    title: "Pertanian",
    description:
      "Sektor pertanian menjadi mata pencaharian utama masyarakat Desa Betektaman dengan komoditas seperti padi, jagung, dan tanaman pangan lainnya.",
  },
  {
    icon: Store,
    title: "UMKM",
    description:
      "Berbagai pelaku UMKM menghasilkan produk lokal yang memiliki potensi untuk terus dikembangkan dan dipasarkan secara lebih luas.",
  },
  {
    icon: Trees,
    title: "Perkebunan",
    description:
      "Lahan perkebunan menjadi salah satu potensi desa yang mendukung perekonomian masyarakat serta pembangunan desa yang berkelanjutan.",
  },
];

export default function VillagePotential() {
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
            Potensi Desa
          </p>

          <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Potensi Unggulan Betektaman
          </h2>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-green-700"></div>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Desa Betektaman memiliki berbagai potensi yang menjadi kekuatan
            dalam meningkatkan kesejahteraan masyarakat dan pembangunan desa.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {potentials.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-green-600 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100">
                  <Icon
                    className="text-green-700"
                    size={32}
                  />
                </div>

                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="leading-8 text-gray-600">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}