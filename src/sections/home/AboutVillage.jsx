import { MapPin, Landmark, Users, Trees } from "lucide-react";

export default function AboutVillage() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="font-semibold uppercase tracking-widest text-green-700">
            Tentang Desa
          </p>

          <h2 className="mt-2 text-4xl font-bold text-gray-800">
            Desa Betektaman
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Mengenal lebih dekat Desa Betektaman, potensi, sejarah,
            dan kehidupan masyarakat yang menjadi bagian dari
            pembangunan desa.
          </p>
        </div>

        {/* Content */}
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Image */}
          <div>
            <img
              src="/images/village/about.jpg"
              alt="Desa Betektaman"
              className="h-[500px] w-full rounded-3xl object-cover shadow-xl"
            />
          </div>

          {/* Description */}
          <div>

            <h3 className="mb-6 text-3xl font-bold text-gray-800">
              Selamat Datang di Desa Betektaman
            </h3>

            <p className="mb-8 leading-8 text-gray-600">
              Desa Betektaman merupakan salah satu desa yang memiliki
              potensi di bidang pertanian, UMKM, dan sumber daya alam.
              Melalui website ini masyarakat dapat memperoleh informasi
              mengenai profil desa, berita terbaru, serta produk
              unggulan yang dimiliki.
            </p>

            <div className="space-y-5">

              <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow">

                <Landmark className="text-green-700" />

                <div>
                  <h4 className="font-semibold">
                    Sejarah Desa
                  </h4>

                  <p className="text-sm text-gray-600">
                    Mengenal asal usul dan perkembangan Desa Betektaman.
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow">

                <MapPin className="text-green-700" />

                <div>
                  <h4 className="font-semibold">
                    Letak Geografis
                  </h4>

                  <p className="text-sm text-gray-600">
                    Berlokasi di Kecamatan Gading,
                    Kabupaten Probolinggo.
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow">

                <Users className="text-green-700" />

                <div>
                  <h4 className="font-semibold">
                    Masyarakat
                  </h4>

                  <p className="text-sm text-gray-600">
                    Masyarakat yang aktif, ramah,
                    dan menjunjung tinggi gotong royong.
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow">

                <Trees className="text-green-700" />

                <div>
                  <h4 className="font-semibold">
                    Potensi Desa
                  </h4>

                  <p className="text-sm text-gray-600">
                    Pertanian, UMKM, peternakan,
                    dan potensi wisata lokal.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}