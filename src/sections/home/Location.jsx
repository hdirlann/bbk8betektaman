import { MapPin } from "lucide-react";

export default function Location() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-green-700">
            Lokasi Desa
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Desa Betektaman
          </h2>

          <p className="mt-4 text-gray-600">
            Kecamatan Gading, Kabupaten Probolinggo, Jawa Timur
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl shadow-xl">
          <iframe
            title="Lokasi Desa Betektaman"
            src="https://www.google.com/maps?q=Desa+Betek+Taman+Gading+Probolinggo&output=embed"
            width="100%"
            height="500"
            loading="lazy"
            allowFullScreen
          />
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-green-700">
          <MapPin size={20} />
          <span>Kecamatan Gading, Kabupaten Probolinggo, Jawa Timur</span>
        </div>
      </div>
    </section>
  );
}