import React from "react";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import ProductsHeader from "../../components/ProductsHeader/productsHeader";
import ProductContainer from "../../components/ProductContainer/productContainer";
import "./products.css";

const products = () => {
  return (
    <>
      <ProductsHeader />
      <ProductContainer />
    </>
  );
};

export default products;
