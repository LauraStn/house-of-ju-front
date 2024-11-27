import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const apiClient = axios.create({
  baseURL: apiUrl,
  validateStatus: function (status) {
    return status <= 500;
  },
});

export default apiClient;