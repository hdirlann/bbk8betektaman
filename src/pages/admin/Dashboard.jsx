export default function Dashboard() {
  return (
    <div>

      <h1 className="mb-8 text-3xl font-bold">
        Dashboard
      </h1>

      <div className="grid gap-6 md:grid-cols-3">

        <div className="rounded-xl bg-white p-6 shadow">

          <h2 className="text-lg font-semibold">
            Total Berita
          </h2>

          <p className="mt-4 text-4xl font-bold text-green-700">
            0
          </p>

        </div>

        <div className="rounded-xl bg-white p-6 shadow">

          <h2 className="text-lg font-semibold">
            Total Produk
          </h2>

          <p className="mt-4 text-4xl font-bold text-green-700">
            0
          </p>

        </div>

        <div className="rounded-xl bg-white p-6 shadow">

          <h2 className="text-lg font-semibold">
            Total Pengunjung
          </h2>

          <p className="mt-4 text-4xl font-bold text-green-700">
            -
          </p>

        </div>

      </div>

    </div>
  );
}