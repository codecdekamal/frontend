import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import NavSec from './NavSec'
const ProductPage = () => {
  return (
    <>
    <Navbar/>
    <NavSec></NavSec>
    </>
  )
}

export default ProductPage
