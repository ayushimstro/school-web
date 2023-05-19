import axios from "axios";

export const Base = axios.create({
  baseURL: "http://localhost:4000",
});
