import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle, XCircle } from "lucide-react";

import NewsForm from "../../../components/admin/NewsForm";
import { createNews } from "../../../services/newsService";
import { uploadNewsImage } from "../../../services/storageService";

export default function NewsCreate() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState({
    type: "",
    text: "",
  });

  const initialData = {
    title: "",
    description: "",
    content: "",
    image: "",
    featured: false,
  };

  async function handleSubmit(formData) {
    try {
      setLoading(true);
      setMessage({
        type: "",
        text: "",
      });

      let imageUrl = "";

      // Upload gambar ke Supabase Storage
      if (formData.image instanceof File) {
        imageUrl = await uploadNewsImage(formData.image);
      }

      // Simpan ke database
      await createNews({
        title: formData.title,
        description: formData.description,
        content: formData.content,
        image: imageUrl,
        featured: formData.featured,
      });

      setMessage({
        type: "success",
        text: "Berita berhasil ditambahkan.",
      });

      setTimeout(() => {
        navigate("/admin/news");
      }, 1200);
    } catch (error) {
      console.error(error);

      setMessage({
        type: "error",
        text: error.message || "Gagal menambahkan berita.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto w-full max-w-6xl">

      {/* Header */}
      <div className="mb-8">

        <h1 className="text-3xl font-bold text-gray-800">
          Tambah Berita
        </h1>

        <p className="mt-2 text-gray-500">
          Tambahkan berita baru untuk Website Desa Betektaman.
        </p>

      </div>

      {/* Alert */}
      {message.text && (
        <div
          className={`mb-6 flex items-center gap-3 rounded-xl px-5 py-4 ${
            message.type === "success"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {message.type === "success" ? (
            <CheckCircle size={22} />
          ) : (
            <XCircle size={22} />
          )}

          <span>{message.text}</span>
        </div>
      )}

      {/* Form */}
      <div className="rounded-2xl bg-white p-8 shadow-lg">

        <NewsForm
          initialData={initialData}
          onSubmit={handleSubmit}
          loading={loading}
          submitLabel="Simpan Berita"
        />

      </div>

    </div>
  );
}