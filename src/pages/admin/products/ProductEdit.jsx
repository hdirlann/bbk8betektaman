import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CheckCircle, XCircle } from "lucide-react";

import ProductForm from "../../../components/admin/ProductForm";

import {
  getProductById,
  updateProduct,
} from "../../../services/productService";

import {
  uploadProductImage,
  deleteProductImage,
} from "../../../services/storageService";

export default function ProductEdit() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [fetching, setFetching] = useState(true);
  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState({
    type: "",
    text: "",
  });

  useEffect(() => {
    loadProduct();
  }, []);

  async function loadProduct() {
    try {
      const data = await getProductById(id);

      setProduct(data);
    } catch (error) {
      console.error(error);

      setMessage({
        type: "error",
        text: "Produk tidak ditemukan.",
      });
    } finally {
      setFetching(false);
    }
  }

  async function handleSubmit(formData) {
    try {
      setLoading(true);

      let imageUrl = product.image;

      // Jika memilih gambar baru
      if (formData.image instanceof File) {

        // Hapus gambar lama
        if (product.image) {
          await deleteProductImage(product.image);
        }

        // Upload gambar baru
        imageUrl = await uploadProductImage(
          formData.image
        );
      }

      await updateProduct(id, {
        name: formData.name,
        category: formData.category,
        description: formData.description,
        content: formData.content,
        producer: formData.producer,
        location: formData.location,
        whatsapp: formData.whatsapp,
        image: imageUrl,
        featured: formData.featured,
      });

      setMessage({
        type: "success",
        text: "Produk berhasil diperbarui.",
      });

      setTimeout(() => {
        navigate("/admin/products");
      }, 1200);

    } catch (error) {
      console.error(error);

      setMessage({
        type: "error",
        text:
          error.message ||
          "Gagal memperbarui produk.",
      });
    } finally {
      setLoading(false);
    }
  }

  if (fetching) {
    return (
      <div className="flex h-96 items-center justify-center">
        Memuat data produk...
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-6xl">

      {/* Header */}
      <div className="mb-8">

        <h1 className="text-3xl font-bold text-gray-800">
          Edit Produk
        </h1>

        <p className="mt-2 text-gray-500">
          Perbarui informasi produk UMKM Desa Betektaman.
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

        <ProductForm
          initialData={product}
          onSubmit={handleSubmit}
          loading={loading}
          submitLabel="Update Produk"
        />

      </div>

    </div>
  );
}