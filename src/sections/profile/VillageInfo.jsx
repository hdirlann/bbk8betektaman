import { motion } from "framer-motion";
import {
  Users,
  Map,
  Sprout,
  Landmark,
} from "lucide-react";

const infos = [
  {
    icon: Users,
    title: "Penduduk",
    value: "2.454 Jiwa",
  },
  {
    icon: Map,
    title: "Luas Wilayah",
    value: "324 Ha",
  },
  {
    icon: Sprout,
    title: "Tipologi",
    value: "Persawahan",
  },
  {
    icon: Landmark,
    title: "Klasifikasi",
    value: "Swakarya",
  },
];

export default function VillageInfo() {
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
            Informasi Desa
          </p>

          <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Sekilas Desa Betektaman
          </h2>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-green-700"></div>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {infos.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="rounded-3xl bg-white p-8 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100">
                  <Icon
                    size={32}
                    className="text-green-700"
                  />
                </div>

                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-lg text-gray-600">
                  {item.value}
                </p>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}