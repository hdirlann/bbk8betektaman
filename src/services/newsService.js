import { supabase } from "../lib/supabase";

const TABLE = "news";

/**
 * Ambil semua berita
 */
export async function getAllNews() {
  const { data, error } = await supabase
    .from(TABLE)
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;

  return data || [];
}

/**
 * Ambil berita berdasarkan ID
 */
export async function getNewsById(id) {
  const { data, error } = await supabase
    .from(TABLE)
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;

  return data;
}

/**
 * Tambah berita
 */
export async function createNews(news) {
  const { data, error } = await supabase
    .from(TABLE)
    .insert({
      title: news.title,
      description: news.description,
      content: news.content,
      image: news.image,
      featured: news.featured,
    })
    .select()
    .single();

  if (error) throw error;

  return data;
}

/**
 * Update berita
 */
export async function updateNews(id, news) {
  const { data, error } = await supabase
    .from(TABLE)
    .update({
      title: news.title,
      description: news.description,
      content: news.content,
      image: news.image,
      featured: news.featured,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;

  return data;
}

/**
 * Hapus berita
 */
export async function deleteNews(id) {
  const { error } = await supabase
    .from(TABLE)
    .delete()
    .eq("id", id);

  if (error) throw error;

  return true;
}

/**
 * Ambil berita unggulan
 */
export async function getFeaturedNews(limit = 3) {
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
 * Ambil berita terbaru
 */
export async function getLatestNews(limit = 3) {
  const { data, error } = await supabase
    .from(TABLE)
    .select("*")
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) throw error;

  return data || [];
}

/**
 * Cari berita
 */
export async function searchNews(keyword) {
  const { data, error } = await supabase
    .from(TABLE)
    .select("*")
    .ilike("title", `%${keyword}%`)
    .order("created_at", { ascending: false });

  if (error) throw error;

  return data || [];
}

/**
 * Hitung total berita
 */
export async function countNews() {
  const { count, error } = await supabase
    .from(TABLE)
    .select("*", {
      count: "exact",
      head: true,
    });

  if (error) throw error;

  return count || 0;
}