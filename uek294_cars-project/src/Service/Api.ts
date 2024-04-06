import axios, {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
} from "axios";



export const defaultAxiosInstance: AxiosInstance = axios.create({
  baseURL: "http://localhost:3030/",
});

defaultAxiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig<any>) => {
    let correctPath: boolean = config.url !== "login";
    if (localStorage.getItem("accessToken") !== "" && correctPath) {
      config.headers.Authorization = `Bearer ${localStorage.getItem(
        "accessToken"
      )}`;
    }
    return config;
  },

  (error: AxiosError) => {
    return Promise.reject(error);
  }
);
