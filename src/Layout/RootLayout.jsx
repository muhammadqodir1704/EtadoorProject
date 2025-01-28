import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
const RootLayout = () => {
  return (
    <div>
      <Outlet />
      <Navbar />
      <Header />
      <Footer />
    </div>
  )
}

export default RootLayout
