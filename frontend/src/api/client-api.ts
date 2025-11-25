import axios from "axios";

const baseUrl = import.meta.env.VITE_API_URL;

export const clientApi = axios.create({
  baseURL: baseUrl,
});
