import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const baseClient = axios.create({
  baseURL: BASE_URL,
}); //an instance of axios

export const authClient = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: "Bearer " + localStorage.getItem("token") },
});

baseClient.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

authClient.interceptors.response.use(
  function onFulfilled(response) {
    console.log(response);
    return response.data;
  },
  function onRejected(error) {
    if (error.status === 404) {
      console.log("what is this");
    } else {
      console.log("i have no idea  please help");
    }
    return Promise.reject(error);
  }
);
