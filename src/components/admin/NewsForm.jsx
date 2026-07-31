import { useEffect, useState } from "react";
import {
  UploadCloud,
  ImageIcon,
  X,
} from "lucide-react";

export default function NewsForm({
  initialData,
  onSubmit,
  loading = false,
  submitLabel = "Simpan Berita",
}) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    content: "",
    image: "",
    featured: false,
  });

  const [preview, setPreview] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (!initialData) return;

    setForm({
      title: initialData.title ?? "",
      description: initialData.description ?? "",
      content: initialData.content ?? "",
      image: initialData.image ?? "",
      featured: initialData.featured ?? false,
    });

    if (
      initialData.image &&
      typeof initialData.image === "string"
    ) {
      setPreview(initialData.image);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value, checked, type } =
      e.target;

    setForm((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : value,
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

    const input =
      document.getElementById("image");

    if (input) input.value = "";
  };

  const validate = () => {
    const newErrors = {};

    if (!form.title.trim()) {
      newErrors.title =
        "Judul berita wajib diisi.";
    }

    if (!form.description.trim()) {
      newErrors.description =
        "Deskripsi wajib diisi.";
    }

    if (!form.content.trim()) {
      newErrors.content =
        "Isi berita wajib diisi.";
    }

    setErrors(newErrors);

    return (
      Object.keys(newErrors).length === 0
    );
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
      <div className="border-b pb-5">
        <h2 className="text-2xl font-bold text-gray-800">
          Informasi Berita
        </h2>

        <p className="mt-2 text-gray-500">
          Lengkapi informasi berita yang akan
          dipublikasikan.
        </p>
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Judul Berita
        </label>

        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Masukkan judul berita..."
          className="w-full rounded-xl border px-4 py-3 focus:border-green-700 focus:outline-none"
        />

        {errors.title && (
          <p className="mt-2 text-sm text-red-500">
            {errors.title}
          </p>
        )}
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Deskripsi Singkat
        </label>

        <textarea
          rows={3}
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Masukkan deskripsi..."
          className="w-full rounded-xl border px-4 py-3 focus:border-green-700 focus:outline-none"
        />

        {errors.description && (
          <p className="mt-2 text-sm text-red-500">
            {errors.description}
          </p>
        )}
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Isi Berita
        </label>

        <textarea
          rows={10}
          name="content"
          value={form.content}
          onChange={handleChange}
          placeholder="Tulis isi berita..."
          className="w-full rounded-xl border px-4 py-3 focus:border-green-700 focus:outline-none"
        />

        {errors.content && (
          <p className="mt-2 text-sm text-red-500">
            {errors.content}
          </p>
        )}
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Cover Berita
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
            size={46}
            className="text-green-700"
          />

          <h3 className="mt-3 text-lg font-semibold">
            Pilih Gambar
          </h3>

          <p className="text-sm text-gray-500">
            PNG, JPG atau JPEG
          </p>
        </label>
                {preview && (
          <div className="mt-6">

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

                <span>{form.image.name}</span>

              </div>
            )}

          </div>
        )}

      </div>

      <div className="rounded-xl border bg-gray-50 p-5">

        <label className="flex cursor-pointer items-start gap-3">

          <input
            type="checkbox"
            name="featured"
            checked={form.featured}
            onChange={handleChange}
            className="mt-1 h-5 w-5 accent-green-700"
          />

          <div>

            <p className="font-semibold">
              Jadikan Berita Utama
            </p>

            <p className="text-sm text-gray-500">
              Berita ini akan ditampilkan pada halaman utama
              website sebagai berita unggulan.
            </p>

          </div>

        </label>

      </div>

      <div className="flex justify-end gap-4 border-t pt-6">

        <button
          type="button"
          onClick={() => {
            setForm({
              title: "",
              description: "",
              content: "",
              image: "",
              featured: false,
            });

            setPreview("");
            setErrors({});

            const input = document.getElementById("image");

            if (input) {
              input.value = "";
            }
          }}
          className="rounded-xl border border-gray-300 px-6 py-3 font-medium transition hover:bg-gray-100"
        >
          Reset
        </button>

        <button
          type="submit"
          disabled={loading}
          className="rounded-xl bg-green-700 px-8 py-3 font-semibold text-white transition hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Menyimpan..." : submitLabel}
        </button>

      </div>

    </form>
  );
}