import { AxiosInstance } from "axios";
import { defaultInstance } from "./Api";


export type loginRequest = {
  email: string;
  password: string;
};

const LoginService = (api: AxiosInstance = defaultInstance) => ({
  login: async (param: loginRequest) => {
    console.log("login request.");
    const answer = await api.post("login", param);
    console.log(answer.data.accessToken);
    localStorage.setItem("accessToken", answer.data.accessToken);

    return answer;
  },

  logout: () => clearAuthTokens(),
});

function clearAuthTokens() {
  throw new Error("Function not implemented.");
}

export default LoginService;