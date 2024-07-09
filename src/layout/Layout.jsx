import React from 'react'
import {Outlet } from 'react-router-dom'
import NavBar from '../navBar/NavBar'
import { Footer } from '../footer/Footer'

const Layout = () => {
  return (
    <div>
        <NavBar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout