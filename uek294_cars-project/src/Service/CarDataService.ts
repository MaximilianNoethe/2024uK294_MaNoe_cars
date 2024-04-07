import axios, { AxiosInstance } from "axios";
import { defaultAxiosInstance } from "./Api";
import { login } from "./Authorization";

const CarService = (api: AxiosInstance = defaultAxiosInstance) => ({
  getCarData: async () => {
    try {
      await login("maximilian@mail.com", "1234");
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        throw new Error("No Access token in local storage available");
      }

      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const response = await api.get("cars?_limit=5", config);
      return response["data"];
    } catch (error) {
      throw error;
    }
  },

  deleteCar: async (carId) => {
    try {
      await login("maximilian@mail.com", "1234");
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        throw new Error("No Access token in local storage available");
      }

      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const response = await api.delete(`cars/${carId}`, config);
      return response["data"];
    } catch (error) {
      throw error;
    }
  },
});

export default CarService;
