import React from "react";
import Header from "../../components/Header/header";
import Category from "../../components/Category/category";
import Viewed from "../../components/Viewed/viewed";
import "./home.css";

const home = () => {
  return (
    <>
      <Header />
      <Category />
      <Viewed />
    </>
  );
};

export default home;
