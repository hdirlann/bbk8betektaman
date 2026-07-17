import {
  Wheat,
  Users,
  Leaf,
  Landmark,
} from "lucide-react";

const features = [
  {
    icon: Wheat,
    title: "Desa Agraris",
    description:
      "Desa Betektaman memiliki tipologi persawahan dengan lahan pertanian yang menjadi sumber mata pencaharian utama masyarakat.",
  },
  {
    icon: Users,
    title: "Masyarakat Gotong Royong",
    description:
      "Masyarakat aktif dalam kegiatan sosial dan pembangunan desa melalui RT, RW, Karang Taruna, BUMDes, dan organisasi kemasyarakatan.",
  },
  {
    icon: Leaf,
    title: "Lingkungan Asri",
    description:
      "Didukung kawasan hutan dan lahan hijau yang membantu menjaga keseimbangan lingkungan dan kelestarian alam desa.",
  },
  {
    icon: Landmark,
    title: "Pemerintahan Desa",
    description:
      "Pemerintah Desa berkomitmen memberikan pelayanan yang transparan, cepat, dan mendukung pembangunan desa berkelanjutan.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-green-700">
            Keunggulan Desa
          </p>

          <h2 className="mt-3 text-4xl font-bold text-gray-800">
            Mengapa Memilih Desa Betektaman?
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600">
            Desa Betektaman memiliki berbagai potensi yang mendukung
            pembangunan ekonomi, sosial, serta lingkungan sehingga menjadi
            desa yang nyaman untuk ditinggali dan terus berkembang.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group flex gap-6 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-green-600 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-green-100 transition group-hover:bg-green-700">
                  <Icon
                    size={30}
                    className="text-green-700 transition group-hover:text-white"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}