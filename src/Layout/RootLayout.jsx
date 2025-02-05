import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Xarita from "../components/Xarita";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Outlet /> 
       <Xarita />
      <Footer />
    </>
  );
};

export default RootLayout;
