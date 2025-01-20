import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./components/MainPage";
import AllProducts from "./components/AllProducts";
import Furnitura from "./pages/Furnitura";
import GdeKupit from "./pages/GdeKupit";
import Kontakti from "./pages/Kontakti";
import OKampani from "./pages/OKampani";
import Pagonaj from "./pages/Pagonaj";
import Sotrudnichat from "./pages/Sotrudnichat";
import Navbar from "./components/Navbar";  // Navbar import qilish
import Header from "./components/Header";  // Header import qilish

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Header />
        <MainPage />
        <AllProducts />
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
