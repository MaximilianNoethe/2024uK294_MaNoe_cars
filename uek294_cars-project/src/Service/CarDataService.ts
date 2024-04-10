import { AxiosInstance } from "axios";
import { defaultInstance } from "./Api";


const CarService = (api: AxiosInstance = defaultInstance) => ({
  getCarData: async () => {
    try {
      const response = await api.get("cars");
      return response["data"];
    } catch (error) {
      throw error;
    }
  },

  getCarById: async (carId) => {
    try {
      const response = await api.get(`cars/${carId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  deleteCar: async (carId) => {
    try {
      const response = await api.delete(`cars/${carId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  createCar: async (Name, Year) => {
    try {
      const data = { Name, Year };

      const response = await api.post("cars", data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  updateCar: async (carId, Name, Year) => {
    try {
      const data = { Name, Year };

      const response = await api.put(`cars/${carId}`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
});

export default CarService;
