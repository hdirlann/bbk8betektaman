import {
  Wheat,
  Trees,
  Building2,
  Users,
} from "lucide-react";

const potentials = [
  {
    icon: Wheat,
    title: "Pertanian",
    value: "194 Ha",
    description:
      "Lahan sawah yang menjadi potensi utama Desa Betektaman sebagai desa dengan tipologi persawahan.",
  },
  {
    icon: Trees,
    title: "Kawasan Hutan",
    value: "95 Ha",
    description:
      "Wilayah hutan yang berperan dalam menjaga keseimbangan lingkungan dan sumber daya alam desa.",
  },
  {
    icon: Building2,
    title: "BUMDes",
    value: "1 Unit",
    description:
      "Badan Usaha Milik Desa yang mendukung pengembangan ekonomi dan pemberdayaan masyarakat.",
  },
  {
    icon: Users,
    title: "Lembaga Kemasyarakatan",
    value: "24 Lembaga",
    description:
      "Terdiri dari RT, RW, Karang Taruna, organisasi keagamaan, dan lembaga masyarakat lainnya.",
  },
];

export default function Potentials() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="font-semibold uppercase tracking-widest text-green-700">
            Potensi Desa
          </p>

          <h2 className="mt-2 text-4xl font-bold text-gray-800">
            Potensi Unggulan Desa Betektaman
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-gray-600">
            Desa Betektaman memiliki potensi yang besar di sektor pertanian,
            lingkungan, ekonomi desa, serta kelembagaan masyarakat yang aktif
            dalam mendukung pembangunan desa.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {potentials.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 transition group-hover:bg-green-700">
                  <Icon
                    size={32}
                    className="text-green-700 transition group-hover:text-white"
                  />
                </div>

                <h3 className="text-2xl font-bold text-gray-800">
                  {item.title}
                </h3>

                <span className="mt-2 inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                  {item.value}
                </span>

                <p className="mt-5 leading-7 text-gray-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}