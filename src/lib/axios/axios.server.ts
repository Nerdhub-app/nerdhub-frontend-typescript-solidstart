import axios from "axios";

export function getAxiosServerInstance() {
  const instance = axios.create({
    baseURL: process.env.NITRO_WEBSERVICES_URL,
  });

  return instance;
}
