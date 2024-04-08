import { AxiosInstance } from "axios";
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

      const response = await api.get("cars", config);
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
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  createCar: async (Name, Year) => {
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

      const data = { Name, Year };

      const response = await api.post("cars", data, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  updateCar: async (Name, Year) => {
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

      const data = { Name, Year };

      const response = await api.put("cars", data, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
});

export default CarService;
