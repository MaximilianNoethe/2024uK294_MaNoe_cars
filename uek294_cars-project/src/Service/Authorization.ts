import { defaultAxiosInstance } from "./Api";

export const loginRequest = {
  email: String,
  password: String,
};

export const login = async (email: string, password: string) => {
  try {
    const response = await defaultAxiosInstance.post("login", {
      email: email,
      password: password,
    });
    const { accessToken } = response.data;
    localStorage.setItem("accessToken", accessToken);
    return accessToken;
  } catch (error) {
    throw error;
  }
};
