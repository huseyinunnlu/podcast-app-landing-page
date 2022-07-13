import axios from "axios";
// import JwtService from "@/core/services/JwtService";
import { notify } from "@kyvg/vue3-notification";
export const appAxios = axios.create({
  baseURL: "http://localhost:8000/api/",
  headers: {
    Authorization: null,
    Accept: "application/json",
  },
});
appAxios.interceptors.request.use((config) => {
  config.headers["X-localization"] = localStorage.getItem("lang") || "en-US";
  return config;
});

appAxios.interceptors.response.use(
  (response) => {
    if (response.data.message) {
      notify({
        type: "success",
        title: response.data.message,
      });
    }
    return response;
  },
  (error) => {
    let formattedTitle = "Error";
    let message = "Request didn't finished successfully.";
    if (error.response && error.response.status == 422) {
      const rawTitle = error.response
        ? Object.keys(error.response.data.data)[0]
        : "Validation error.";
      formattedTitle = rawTitle.charAt(0).toUpperCase() + rawTitle.slice(1);
      message =
        Object.values(error.response.data.data)[0] || "Validation error.";
    } else if (error.response && error.response.data.message) {
      formattedTitle = "Error";
      message = error.response.data.message;
    }

    notify({
      type: "error",
      title: formattedTitle,
      text: message,
    });
    return error;
  }
);
