export default function NewsHero() {
  return (
    <section
      className="relative flex h-[400px] items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/news/hero-news.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 px-6 text-center text-white">
        <h1 className="text-5xl font-bold">
          Berita Desa
        </h1>

        <p className="mt-4 text-lg">
          Informasi terbaru mengenai kegiatan dan perkembangan Desa Betektaman.
        </p>
      </div>
    </section>
  );
}