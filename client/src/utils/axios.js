import axios from "axios";

const instance = axios.create({
  baseURL: "https://resumematchai-lptz.onrender.com",
});

export default instance;
