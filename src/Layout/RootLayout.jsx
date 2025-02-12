import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollTopButton";
import ChatBot from "../components/ChatBot";
const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Header />
      <main> <Outlet /> </main>
      <Footer />
       <ScrollToTopButton />
       <ChatBot />
    </>
  );
};

export default RootLayout;
