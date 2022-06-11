import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home/home";
import Footer from "./components/Footer/footer";
import Products from "./pages/Products/products";
import Navbar from "./components/Navbar/navbar";
import { useDispatch } from "react-redux";
import { getProducts } from "./actions/products";
import { useEffect } from "react";
import { useRoutes } from "react-router-dom";
import ThemeRoutes from "./routes/Router";

function App() {
  const routing = useRoutes(ThemeRoutes);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  });

  return <div className='dark'>{routing}</div>;
}

export default App;
