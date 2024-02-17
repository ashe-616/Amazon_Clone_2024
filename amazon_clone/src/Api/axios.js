import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://127.0.0.1:5001/clone-ab96a/us-central1/api",
  baseURL: "https://api-ctonclbq6a-uc.a.run.app"
});

export { axiosInstance };
