import { supabase } from "../lib/supabase";

/* =====================================================
   NEWS IMAGE
===================================================== */

/**
 * Upload gambar berita
 */
export async function uploadNewsImage(file) {
  if (!file) return "";

  const extension = file.name.split(".").pop();

  const fileName = `${Date.now()}-${Math.random()
    .toString(36)
    .substring(2)}.${extension}`;

  const filePath = `news/${fileName}`;

  const { error } = await supabase.storage
    .from("news-images")
    .upload(filePath, file);

  if (error) throw error;

  const { data } = supabase.storage
    .from("news-images")
    .getPublicUrl(filePath);

  return data.publicUrl;
}

/**
 * Hapus gambar berita
 */
export async function deleteNewsImage(imageUrl) {
  if (!imageUrl) return true;

  try {
    const url = new URL(imageUrl);

    const paths = url.pathname.split("/");

    const bucketIndex = paths.findIndex(
      (item) => item === "news-images"
    );

    if (bucketIndex === -1) {
      throw new Error("Bucket tidak ditemukan.");
    }

    const filePath = paths
      .slice(bucketIndex + 1)
      .join("/");

    console.log("Image URL :", imageUrl);
    console.log("File Path :", filePath);

    const { data, error } = await supabase.storage
      .from("news-images")
      .remove([filePath]);

    if (error) throw error;

    console.log("Delete Success :", data);

    return true;
  } catch (error) {
    console.error("Delete Error :", error);
    throw error;
  }
}

/* =====================================================
   PRODUCT IMAGE
===================================================== */

/**
 * Upload gambar produk
 */
export async function uploadProductImage(file) {
  if (!file) return "";

  const extension = file.name.split(".").pop();

  const fileName = `${Date.now()}-${Math.random()
    .toString(36)
    .substring(2)}.${extension}`;

  const filePath = `products/${fileName}`;

  const { error } = await supabase.storage
    .from("product-images")
    .upload(filePath, file);

  if (error) throw error;

  const { data } = supabase.storage
    .from("product-images")
    .getPublicUrl(filePath);

  return data.publicUrl;
}

/**
 * Hapus gambar produk
 */
export async function deleteProductImage(imageUrl) {
  if (!imageUrl) return true;

  try {
    const url = new URL(imageUrl);

    const paths = url.pathname.split("/");

    const bucketIndex = paths.findIndex(
      (item) => item === "product-images"
    );

    if (bucketIndex === -1) {
      throw new Error("Bucket tidak ditemukan.");
    }

    const filePath = paths
      .slice(bucketIndex + 1)
      .join("/");

    const { error } = await supabase.storage
      .from("product-images")
      .remove([filePath]);

    if (error) throw error;

    return true;
  } catch (error) {
    console.error(error);
    throw error;
  }
}