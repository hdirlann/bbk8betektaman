import { supabase } from "../lib/supabase";

const TABLE = "products";

/**
 * Ambil semua produk
 */
export async function getAllProducts() {
  const { data, error } = await supabase
    .from(TABLE)
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;

  return data || [];
}

/**
 * Ambil produk berdasarkan ID
 */
export async function getProductById(id) {
  const { data, error } = await supabase
    .from(TABLE)
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;

  return data;
}

/**
 * Tambah produk
 */
export async function createProduct(product) {
  const { data, error } = await supabase
    .from(TABLE)
    .insert({
      name: product.name,
      category: product.category,
      description: product.description,
      content: product.content,
      producer: product.producer,
      location: product.location,
      whatsapp: product.whatsapp,
      image: product.image,
      featured: product.featured,
    })
    .select()
    .single();

  if (error) throw error;

  return data;
}

/**
 * Update produk
 */
export async function updateProduct(id, product) {
  const { data, error } = await supabase
    .from(TABLE)
    .update({
      name: product.name,
      category: product.category,
      description: product.description,
      content: product.content,
      producer: product.producer,
      location: product.location,
      whatsapp: product.whatsapp,
      image: product.image,
      featured: product.featured,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;

  return data;
}

/**
 * Hapus produk
 */
export async function deleteProduct(id) {
  const { error } = await supabase
    .from(TABLE)
    .delete()
    .eq("id", id);

  if (error) throw error;

  return true;
}

/**
 * Ambil produk unggulan
 */
export async function getFeaturedProducts(limit = 3) {
  const { data, error } = await supabase
    .from(TABLE)
    .select("*")
    .eq("featured", true)
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) throw error;

  return data || [];
}

/**
 * Ambil produk terbaru
 */
export async function getLatestProducts(limit = 6) {
  const { data, error } = await supabase
    .from(TABLE)
    .select("*")
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) throw error;

  return data || [];
}

/**
 * Cari produk
 */
export async function searchProducts(keyword) {
  const { data, error } = await supabase
    .from(TABLE)
    .select("*")
    .ilike("name", `%${keyword}%`)
    .order("created_at", { ascending: false });

  if (error) throw error;

  return data || [];
}

/**
 * Hitung total produk
 */
export async function countProducts() {
  const { count, error } = await supabase
    .from(TABLE)
    .select("*", {
      count: "exact",
      head: true,
    });

  if (error) throw error;

  return count || 0;
}