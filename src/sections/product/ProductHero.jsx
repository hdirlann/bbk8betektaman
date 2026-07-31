export default function ProductHero() {
  return (
    <section
      className="relative flex h-[420px] items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/products/hero-product.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/55"></div>

      <div className="relative z-10 px-6 text-center text-white">

        <h1 className="text-5xl font-bold">
          Produk Unggulan Desa
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8">
          Temukan berbagai produk unggulan hasil UMKM dan potensi lokal
          Desa Betektaman yang berkualitas dan siap dipasarkan.
        </p>

      </div>
    </section>
  );
}