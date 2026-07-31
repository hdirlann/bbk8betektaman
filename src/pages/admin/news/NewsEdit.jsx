import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CheckCircle, XCircle } from "lucide-react";

import NewsForm from "../../../components/admin/NewsForm";

import {
  getNewsById,
  updateNews,
} from "../../../services/newsService";

import {
  uploadNewsImage,
  deleteNewsImage,
} from "../../../services/storageService";

export default function NewsEdit() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [fetching, setFetching] = useState(true);

  const [news, setNews] = useState(null);

  const [message, setMessage] = useState({
    type: "",
    text: "",
  });

  useEffect(() => {
    loadNews();
  }, []);

  async function loadNews() {
    try {
      const data = await getNewsById(id);

      setNews(data);
    } catch (error) {
      console.error(error);

      setMessage({
        type: "error",
        text: "Berita tidak ditemukan.",
      });
    } finally {
      setFetching(false);
    }
  }

  async function handleSubmit(formData) {
    try {
      setLoading(true);

      let imageUrl = news.image;

      // Jika admin memilih gambar baru
      if (formData.image instanceof File) {

        // hapus gambar lama
        if (news.image) {
          await deleteNewsImage(news.image);
        }

        // upload gambar baru
        imageUrl = await uploadNewsImage(formData.image);
      }

      await updateNews(id, {
        title: formData.title,
        description: formData.description,
        content: formData.content,
        image: imageUrl,
        featured: formData.featured,
      });

      setMessage({
        type: "success",
        text: "Berita berhasil diperbarui.",
      });

      setTimeout(() => {
        navigate("/admin/news");
      }, 1200);

    } catch (error) {
      console.error(error);

      setMessage({
        type: "error",
        text: error.message,
      });
    } finally {
      setLoading(false);
    }
  }

  if (fetching) {
    return (
      <div className="flex h-96 items-center justify-center">
        Memuat data...
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-6xl">

      <div className="mb-8">

        <h1 className="text-3xl font-bold">
          Edit Berita
        </h1>

        <p className="mt-2 text-gray-500">
          Perbarui informasi berita.
        </p>

      </div>

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

          {message.text}
        </div>
      )}

      <div className="rounded-2xl bg-white p-8 shadow-lg">

        <NewsForm
          initialData={news}
          onSubmit={handleSubmit}
          loading={loading}
          submitLabel="Update Berita"
        />

      </div>

    </div>
  );
}