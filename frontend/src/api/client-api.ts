import axios from "axios";
import { toast } from "sonner";

const baseUrl = import.meta.env.VITE_API_URL;

const clientApi = axios.create({
  baseURL: baseUrl,
});

clientApi.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      const { status, data } = error.response;
      if (status != 201 && status != 204 && status != 200) {
        toast.error(data.error || "An error ocurred");
      }
    }
    return Promise.reject(error);
  }
);

export default clientApi;
