import axios from "axios";

const axiosClientInstance = axios.create({
  baseURL: import.meta.env.VITE_WEBSERVICES_URL,
});

export default axiosClientInstance;
