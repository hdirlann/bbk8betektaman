import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Plus,
  Pencil,
  Trash2,
  Search,
  Star,
} from "lucide-react";

import {
  getAllProducts,
  deleteProduct,
} from "../../../services/productService";

import {
  deleteProductImage,
} from "../../../services/storageService";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  const [filteredProducts, setFilteredProducts] =
    useState([]);

  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(true);

  async function loadProducts() {
    try {
      const data = await getAllProducts();

      setProducts(data);

      setFilteredProducts(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    if (!search.trim()) {
      setFilteredProducts(products);
      return;
    }

    const result = products.filter((item) =>
      item.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );

    setFilteredProducts(result);
  }, [search, products]);

  async function handleDelete(item) {
    const confirmDelete = window.confirm(
      `Yakin ingin menghapus produk "${item.name}"?`
    );

    if (!confirmDelete) return;

    try {
      if (item.image) {
        await deleteProductImage(item.image);
      }

      await deleteProduct(item.id);

      await loadProducts();

      alert("Produk berhasil dihapus.");
    } catch (error) {
      console.error(error);

      alert(error.message);
    }
  }

  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center">
        Memuat data...
      </div>
    );
  }

  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-3xl font-bold">
            Produk
          </h1>

          <p className="mt-2 text-gray-500">
            Kelola seluruh produk UMKM Desa
            Betektaman.
          </p>

        </div>

        <Link
          to="/admin/products/create"
          className="flex items-center gap-2 rounded-xl bg-green-700 px-5 py-3 font-semibold text-white hover:bg-green-800"
        >

          <Plus size={18} />

          Tambah Produk

        </Link>

      </div>

      {/* Search */}

      <div className="rounded-xl bg-white p-5 shadow">

        <div className="flex items-center rounded-lg border px-4">

          <Search
            size={18}
            className="text-gray-400"
          />

          <input
            type="text"
            placeholder="Cari produk..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="w-full px-3 py-3 outline-none"
          />

        </div>

      </div>

      {/* Table */}

      <div className="overflow-hidden rounded-2xl bg-white shadow">

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="px-6 py-4 text-left">
                Gambar
              </th>

              <th className="px-6 py-4 text-left">
                Produk
              </th>

              <th className="px-6 py-4 text-center">
                Kategori
              </th>

              <th className="px-6 py-4 text-center">
                Featured
              </th>

              <th className="px-6 py-4 text-center">
                Dibuat
              </th>

              <th className="px-6 py-4 text-center">
                Aksi
              </th>

            </tr>

          </thead>

          <tbody>
                        {filteredProducts.length === 0 ? (

              <tr>

                <td
                  colSpan={6}
                  className="py-10 text-center text-gray-500"
                >
                  Belum ada produk.
                </td>

              </tr>

            ) : (

              filteredProducts.map((item) => (

                <tr
                  key={item.id}
                  className="border-t hover:bg-gray-50"
                >

                  {/* Gambar */}
                  <td className="px-6 py-4">

                    <img
                      src={
                        item.image ||
                        "https://placehold.co/120x80?text=No+Image"
                      }
                      alt={item.name}
                      className="h-16 w-24 rounded-lg object-cover"
                    />

                  </td>

                  {/* Produk */}
                  <td className="px-6 py-4">

                    <h3 className="font-semibold text-gray-800">
                      {item.name}
                    </h3>

                    <p className="mt-1 line-clamp-2 text-sm text-gray-500">
                      {item.description}
                    </p>

                  </td>

                  {/* Kategori */}
                  <td className="text-center">

                    <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                      {item.category}
                    </span>

                  </td>

                  {/* Featured */}
                  <td className="text-center">

                    {item.featured ? (
                      <Star
                        size={20}
                        className="mx-auto fill-yellow-400 text-yellow-400"
                      />
                    ) : (
                      "-"
                    )}

                  </td>

                  {/* Tanggal */}
                  <td className="text-center text-sm text-gray-600">

                    {new Date(
                      item.created_at
                    ).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}

                  </td>

                  {/* Action */}
                  <td>

                    <div className="flex justify-center gap-2">

                      <Link
                        to={`/admin/products/edit/${item.id}`}
                        className="rounded-lg bg-blue-500 p-2 text-white transition hover:bg-blue-600"
                      >
                        <Pencil size={18} />
                      </Link>

                      <button
                        onClick={() =>
                          handleDelete(item)
                        }
                        className="rounded-lg bg-red-500 p-2 text-white transition hover:bg-red-600"
                      >
                        <Trash2 size={18} />
                      </button>

                    </div>

                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}