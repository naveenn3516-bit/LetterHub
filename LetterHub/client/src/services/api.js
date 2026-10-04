import axios from "axios";

const API_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:5000/api";

const api = axios.create({
  baseURL: API_URL,
});

export const getCategories = async () => {
  const response = await api.get("/categories");
  return response.data;
};

export const getCategoryBySlug = async (slug) => {
  const response = await api.get(
    `/categories/${slug}`
  );

  return response.data;
};

export const getLettersByCategory = async (slug) => {
  const response = await api.get(
    `/letters/category/${slug}`
  );

  return response.data;
};

export const getFeaturedLetters = async () => {
  const response = await api.get(
    "/letters/featured"
  );

  return response.data;
};

export const getLetterBySlug = async (slug) => {
  const response = await api.get(
    `/letters/${slug}`
  );

  return response.data;
};

export const searchLetters = async (query) => {
  const response = await api.get(
    `/letters/search?q=${encodeURIComponent(query)}`
  );

  return response.data;
};