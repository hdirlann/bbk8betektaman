export default function ProfileHero() {
  return (
    <section
      className="relative flex h-[420px] items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/profile/hero-profile.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Content */}
      <div className="relative z-10 px-6 text-center text-white">
        <p className="mb-3 uppercase tracking-[0.35em] text-green-300">
          Profil Desa
        </p>

        <h1 className="text-5xl font-bold">
          Betektaman
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8">
          Mengenal lebih dekat Desa Betektaman, Kecamatan Gading,
          Kabupaten Probolinggo, mulai dari sejarah, visi dan misi,
          potensi desa, hingga informasi umum mengenai desa.
        </p>
      </div>
    </section>
  );
}