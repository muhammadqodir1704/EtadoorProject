// App.js
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './Layout/RootLayout';
import MainPage from './components/MainPage';
import AllProducts from './components/AllProducts';
import Filter from './components/Filter';
import Rasm from './components/Rasm';
import Input from './components/Input';
import EtadoorImg from './components/EtadoorImg';
import Dverxiy from './components/Dverxiy';
import Xarita from './components/Xarita';
import KatalogDverey from './components/KatalogDverey';
import Furnitura from './pages/Furnitura';
import GdeKupit from './pages/GdeKupit';
import Kontakti from './pages/Kontakti';
import Pagonaj from './pages/Pagonaj';
import Sotrudnichat from './pages/Sotrudnichat';
import DetailPage from './components/DetailPage';
import Okampani from './pages/Okampani';
import "./App.css"

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: (
          <>
            <MainPage />
            <AllProducts />
            <Filter />
            <Rasm />
            <Input />
            <EtadoorImg />
            <Dverxiy />
            <Xarita />
          </>
        ),
      },
      {
        path: 'katalog',
        element: <KatalogDverey />,
      },
      {
        path: 'furnitura',
        element: <Furnitura />,
      },
      {
        path: 'gde-kupit',
        element: <GdeKupit />,
      },
      {
        path: 'kontakti',
        element: <Kontakti />,
      },
      {
        path: 'o-kompanii',
        element: <Okampani />,
      },
      {
        path: 'pogonaj',
        element: <Pagonaj />,
      },
      {
        path: 'sotrudnichat',
        element: <Sotrudnichat />,
      },
      {
        path: 'detailProducts/:id',
        element: <DetailPage />,
      },
      {
        path: '*',
        element: <div>404: Страница не найдена</div>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
