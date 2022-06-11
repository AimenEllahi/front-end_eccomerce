import axios from "axios";

const API = axios.create({
  //baseURL: "http://localhost:8800",
  baseURL: "https://project-api-ecommerce.herokuapp.com/",
});

export const register = (user) => API.post("/users/register", user);
export const login = (user) =>
  API.post("/users/login", { email: user.email, password: user.password });
export const fetchProducts = () => API.get("/products");
export const fetchProduct = (id) => API.get(`/products/${id}`);
