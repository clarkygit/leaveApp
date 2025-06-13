import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // backend URL
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // if you’re dealing with cookies/sessions
});

export default axiosInstance;
