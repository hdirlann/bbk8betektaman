import { useEffect, useState } from "react";
import {
  UploadCloud,
  ImageIcon,
  X,
} from "lucide-react";

export default function ProductForm({
  initialData,
  onSubmit,
  loading = false,
  submitLabel = "Simpan Produk",
}) {
  const [form, setForm] = useState({
    name: "",
    category: "",
    description: "",
    content: "",
    producer: "",
    location: "",
    whatsapp: "",
    image: "",
    featured: false,
  });

  const [preview, setPreview] = useState("");

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (!initialData) return;

    setForm({
      name: initialData.name ?? "",
      category: initialData.category ?? "",
      description: initialData.description ?? "",
      content: initialData.content ?? "",
      producer: initialData.producer ?? "",
      location: initialData.location ?? "",
      whatsapp: initialData.whatsapp ?? "",
      image: initialData.image ?? "",
      featured: initialData.featured ?? false,
    });

    if (initialData.image) {
      setPreview(initialData.image);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setForm((prev) => ({
      ...prev,
      image: file,
    }));

    setPreview(URL.createObjectURL(file));
  };

  const removeImage = () => {
    setForm((prev) => ({
      ...prev,
      image: "",
    }));

    setPreview("");

    const input = document.getElementById("image");

    if (input) {
      input.value = "";
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Nama produk wajib diisi.";
    }

    if (!form.category.trim()) {
      newErrors.category = "Kategori wajib diisi.";
    }

    if (!form.description.trim()) {
      newErrors.description =
        "Deskripsi wajib diisi.";
    }

    if (!form.content.trim()) {
      newErrors.content =
        "Isi produk wajib diisi.";
    }

    if (!form.producer.trim()) {
      newErrors.producer =
        "Nama produsen wajib diisi.";
    }

    if (!form.location.trim()) {
      newErrors.location =
        "Lokasi wajib diisi.";
    }

    if (!form.whatsapp.trim()) {
      newErrors.whatsapp =
        "Nomor WhatsApp wajib diisi.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    onSubmit(form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >

      <div>

        <h2 className="text-2xl font-bold text-gray-800">
          Informasi Produk
        </h2>

        <p className="mt-2 text-gray-500">
          Lengkapi informasi produk UMKM Desa Betektaman.
        </p>

      </div>

      {/* Nama Produk */}

      <div>

        <label className="mb-2 block font-medium">
          Nama Produk
        </label>

        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Masukkan nama produk"
          className="w-full rounded-xl border px-4 py-3 focus:border-green-700 focus:outline-none"
        />

        {errors.name && (
          <p className="mt-2 text-sm text-red-500">
            {errors.name}
          </p>
        )}

      </div>

      {/* Kategori */}

      <div>

        <label className="mb-2 block font-medium">
          Kategori
        </label>

        <input
          type="text"
          name="category"
          value={form.category}
          onChange={handleChange}
          placeholder="Contoh : Kopi, Gula Aren"
          className="w-full rounded-xl border px-4 py-3 focus:border-green-700 focus:outline-none"
        />

        {errors.category && (
          <p className="mt-2 text-sm text-red-500">
            {errors.category}
          </p>
        )}

      </div>

      {/* Deskripsi */}

      <div>

        <label className="mb-2 block font-medium">
          Deskripsi Singkat
        </label>

        <textarea
          rows={3}
          name="description"
          value={form.description}
          onChange={handleChange}
          className="w-full rounded-xl border px-4 py-3 focus:border-green-700 focus:outline-none"
          placeholder="Deskripsi singkat produk..."
        />

        {errors.description && (
          <p className="mt-2 text-sm text-red-500">
            {errors.description}
          </p>
        )}

      </div>

      {/* Isi Produk */}

      <div>

        <label className="mb-2 block font-medium">
          Isi Produk
        </label>

        <textarea
          rows={8}
          name="content"
          value={form.content}
          onChange={handleChange}
          className="w-full rounded-xl border px-4 py-3 focus:border-green-700 focus:outline-none"
          placeholder="Jelaskan produk secara lengkap..."
        />

        {errors.content && (
          <p className="mt-2 text-sm text-red-500">
            {errors.content}
          </p>
        )}

      </div>
            {/* Nama Produsen */}

      <div>

        <label className="mb-2 block font-medium">
          Nama Produsen
        </label>

        <input
          type="text"
          name="producer"
          value={form.producer}
          onChange={handleChange}
          placeholder="Masukkan nama UMKM / Produsen"
          className="w-full rounded-xl border px-4 py-3 focus:border-green-700 focus:outline-none"
        />

        {errors.producer && (
          <p className="mt-2 text-sm text-red-500">
            {errors.producer}
          </p>
        )}

      </div>

      {/* Lokasi */}

      <div>

        <label className="mb-2 block font-medium">
          Lokasi
        </label>

        <input
          type="text"
          name="location"
          value={form.location}
          onChange={handleChange}
          placeholder="Contoh : Dusun Krajan RT 01/RW 02"
          className="w-full rounded-xl border px-4 py-3 focus:border-green-700 focus:outline-none"
        />

        {errors.location && (
          <p className="mt-2 text-sm text-red-500">
            {errors.location}
          </p>
        )}

      </div>

      {/* WhatsApp */}

      <div>

        <label className="mb-2 block font-medium">
          Nomor WhatsApp
        </label>

        <input
          type="text"
          name="whatsapp"
          value={form.whatsapp}
          onChange={handleChange}
          placeholder="6281234567890"
          className="w-full rounded-xl border px-4 py-3 focus:border-green-700 focus:outline-none"
        />

        {errors.whatsapp && (
          <p className="mt-2 text-sm text-red-500">
            {errors.whatsapp}
          </p>
        )}

      </div>

      {/* Upload Gambar */}

      <div>

        <label className="mb-3 block font-medium">
          Gambar Produk
        </label>

        <input
          id="image"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />

        <label
          htmlFor="image"
          className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 p-8 transition hover:border-green-700 hover:bg-green-50"
        >

          <UploadCloud
            size={40}
            className="text-green-700"
          />

          <p className="mt-3 font-semibold">
            Pilih Gambar Produk
          </p>

          <span className="text-sm text-gray-500">
            PNG, JPG, JPEG
          </span>

        </label>

      </div>

      {/* Preview */}

      {preview && (

        <div>

          <div className="mb-3 flex items-center justify-between">

            <label className="font-medium">
              Preview Gambar
            </label>

            <button
              type="button"
              onClick={removeImage}
              className="flex items-center gap-2 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600 transition hover:bg-red-100"
            >
              <X size={16} />
              Hapus
            </button>

          </div>

          <img
            src={preview}
            alt="Preview"
            className="h-72 w-full rounded-xl border object-cover"
          />

          {form.image instanceof File && (

            <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">

              <ImageIcon size={18} />

              {form.image.name}

            </div>

          )}

        </div>

      )}

      {/* Featured */}

      <div className="rounded-xl border bg-gray-50 p-4">

        <label className="flex cursor-pointer items-center gap-3">

          <input
            type="checkbox"
            name="featured"
            checked={form.featured}
            onChange={handleChange}
            className="h-5 w-5 accent-green-700"
          />

          <div>

            <p className="font-medium">
              Jadikan Produk Unggulan
            </p>

            <p className="text-sm text-gray-500">
              Produk akan tampil pada bagian Produk Unggulan di halaman utama.
            </p>

          </div>

        </label>

      </div>

      {/* Button */}

      <div className="flex justify-end gap-4 border-t pt-6">

        <button
          type="button"
          onClick={() => {

            setForm({
              name: "",
              category: "",
              description: "",
              content: "",
              producer: "",
              location: "",
              whatsapp: "",
              image: "",
              featured: false,
            });

            setPreview("");

            setErrors({});

            const input =
              document.getElementById("image");

            if (input) {
              input.value = "";
            }

          }}
          className="rounded-lg border border-gray-300 px-6 py-3 hover:bg-gray-100"
        >
          Reset
        </button>

        <button
          type="submit"
          disabled={loading}
          className="rounded-lg bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800 disabled:opacity-50"
        >
          {loading ? "Menyimpan..." : submitLabel}
        </button>

      </div>

    </form>
  );
}