<<<<<<< Updated upstream
import Contact from "./components/Contact";
import "./App.css";

export default function App() {
  return (
    <h1 className="text-3xl font-bold">
      <Contact />
    </h1>
=======
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import AllProducts from "./components/AllProducts";
import Furnitura from "./pages/Furnitura";
import GdeKupit from "./pages/GdeKupit";
import Kontakti from "./pages/Kontakti";
import OKampani from "./pages/OKampani";
import Pagonaj from "./pages/Pagonaj";
import Sotrudnichat from "./pages/Sotrudnichat";
// import Katalog from "./pages/Katalog";

function App() {
    
  return (
    <Router>
      <Navbar />
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/furnitura" element={<Furnitura />} />
        <Route path="/gde-kupit" element={<GdeKupit />} />
        <Route path="/kontakti" element={<Kontakti />} />
        <Route path="/o-kompanii" element={<OKampani />} />
        <Route path="/pogonaj" element={<Pagonaj />} />
        <Route path="/sotrudnichat" element={<Sotrudnichat />} />
        <Route path="*" element={<div>404: Страница не найдена</div>} />
      </Routes>
      <AllProducts />
    </Router>
>>>>>>> Stashed changes
  );
}

export default App;
