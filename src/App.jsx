import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// components
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Filter from "./components/Filter";
import Footer from "./components/Footer";
import Xarita from "./components/Xarita";
import KatalogDverey from "./components/KatalogDverey";
import Dverxiy from "./components/Dverxiy";
import Rasm from "./components/Rasm";
import EtadoorImg from "./components/EtadoorImg";

// pages
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./components/MainPage";
import AllProducts from "./components/AllProducts";
import Furnitura from "./pages/Furnitura";
import GdeKupit from "./pages/GdeKupit";
import Kontakti from "./pages/Kontakti";
import OKampani from "./pages/OKampani";
import Pagonaj from "./pages/Pagonaj";
import Sotrudnichat from "./pages/Sotrudnichat";
import Input from "./components/Input";
// import Dverxiy from "./components/Dverxiy";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Header />
        <MainPage />
        <AllProducts />
        <Filter />
        <Rasm />
        <Input />
        <EtadoorImg />
        <Dverxiy />
        <Xarita />
        <Footer />
      </>
    ),
  },
  {
    path: "/Katalog",
    element: (
      <>
        <Navbar />
        <Header />
        <KatalogDverey />
      </>
    ),
  },
  {
    path: "/furnitura",
    element: (
      <>
        <Navbar />
        <Header />
        <Furnitura />
      </>
    ),
  },
  {
    path: "/gde-kupit",
    element: (
      <>
        <Navbar />
        <Header />
        <GdeKupit />
      </>
    ),
  },
  {
    path: "/kontakti",
    element: (
      <>
        <Navbar />
        <Header />
        <Kontakti />
      </>
    ),
  },
  {
    path: "/o-kompanii",
    element: (
      <>
        <Navbar />
        <Header />
        <OKampani />
      </>
    ),
  },
  {
    path: "/pogonaj",
    element: (
      <>
        <Navbar />
        <Header />
        <Pagonaj />
      </>
    ),
  },
  {
    path: "/sotrudnichat",
    element: (
      <>
        <Navbar />
        <Header />
        <Sotrudnichat />
      </>
    ),
  },
  {
    path: "*",
    element: (
      <>
        <Navbar />
        <Header />
        <div>404: Страница не найдена</div>
      </>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
