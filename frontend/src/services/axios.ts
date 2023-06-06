import axios from "axios";
import { parseCookies } from "nookies";

export function getApiClient(context?: any) {
  const { "app2.token": token } = parseCookies(context);

  const api = axios.create({
    baseURL: process.env.URL_API,
  });

  api.interceptors.request.use((config) => {
    // console.log(config);
    return config;
  });

  if (token) {
    api.defaults.headers["Authorization"] = `Bearer ${token}`;
  }

  return api;
}
