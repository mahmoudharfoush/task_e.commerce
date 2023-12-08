import React from 'react'
import Navbar from '../components/dashboard/navbar/Navbar.jsx'
import Footer from '../components/dashboard/footer/footer.jsx'
import { Outlet } from 'react-router-dom'

export default function DashboradLayout() {
  return (
   <>
   <Navbar />
   <Outlet />
   <Footer />
   </>
  )
}
