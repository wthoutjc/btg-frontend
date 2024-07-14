import axios from "axios";
import { useUIStore } from "../zustand/store";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.error(error.response);
    if (error.response.status === 401) {
      console.error("Error 401");
    }
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.error(error.response);
    if (
      error.response &&
      [400, 401, 403, 404, 500].includes(error.response.status)
    ) {
      useUIStore.getState().newAlert({
        id: "error",
        severity: "error",
        message: `Error ${error.response.status}: ${error.response.data.detail}`,
      });
    }
    return Promise.reject(error);
  }
);

export { api };
