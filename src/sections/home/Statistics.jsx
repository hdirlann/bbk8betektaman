import {
  Users,
  House,
  MapPinned,
  Building2,
} from "lucide-react";

const statistics = [
  {
    icon: Users,
    value: "2.454",
    label: "Penduduk",
    description: "Total Jiwa",
  },
  {
    icon: House,
    value: "865",
    label: "Kepala Keluarga",
    description: "KK",
  },
  {
    icon: MapPinned,
    value: "324",
    label: "Luas Wilayah",
    description: "Hektar",
  },
  {
    icon: Building2,
    value: "4 RW",
    label: "Administrasi",
    description: "11 RT",
  },
];

export default function Statistics() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="font-semibold uppercase tracking-widest text-green-700">
            Statistik Desa
          </p>

          <h2 className="mt-2 text-4xl font-bold text-gray-800">
            Data Singkat Desa Betektaman
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Ringkasan data kependudukan dan wilayah Desa Betektaman
            berdasarkan Data Pokok Desa Tahun 2025.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {statistics.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-green-600 hover:shadow-xl"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 transition group-hover:bg-green-700">
                  <Icon
                    size={32}
                    className="text-green-700 transition group-hover:text-white"
                  />
                </div>

                <h3 className="text-4xl font-bold text-green-700">
                  {item.value}
                </h3>

                <p className="mt-2 text-lg font-semibold text-gray-800">
                  {item.label}
                </p>

                <p className="mt-1 text-gray-500">
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