import axios from "axios";

export const Base = axios.create({
  baseURL: "https://school-backend-ay765dr62q-uc.a.run.app",
  // baseURL: "http://localhost:4000",
});
