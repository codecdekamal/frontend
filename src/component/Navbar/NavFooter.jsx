import React from 'react'

const NavFooter = () => {
  return (
    <div className="container-fluid bg-dark text-white p-3 mt-1">
    <div className="row">
      <div className="col-md-3 col-12 d-flex flex-column  align-items-center justify-content-md-start">
        <a href="../../../productPages/womens/womens" className="text-decoration-none fs-3 text-light mb-4 hoveringEffect">Women</a>
        <a href="../../../productPages/womens/dresses" className="text-decoration-none fs-5 text-light mb-4 hoveringEffect">Dresses</a>
        <a href="../../../productPages/womens/skirts" className="text-decoration-none fs-5 text-light mb-4 hoveringEffect">Skirts</a>
        <a href="../../../productPages/womens/pants" className="text-decoration-none fs-5 text-light mb-4 hoveringEffect">Pants</a>
    </div>
    <div className="col-md-3 col-12 d-flex flex-column  align-items-center">
      <a href="../../../productPages/Mens/mens" className="text-decoration-none fs-3 text-light mb-4 hoveringEffect">Men</a>
      <a href="../../../productPages/Mens/shirts" className="text-decoration-none fs-5 text-light mb-4 hoveringEffect">shirt</a>
      <a href="../../../productPages/Mens/pants" className="text-decoration-none fs-5 text-light mb-4 hoveringEffect">pants</a>
      <a href="../../../productPages/Mens/jackets" className="text-decoration-none fs-5 text-light mb-4 hoveringEffect">Hoodies</a>
    </div>
    <div className="col-md-3 col-12 d-flex flex-column  align-items-center">
      <a href="../../productPages/others/kids.html" className="text-decoration-none fs-3 text-light mb-4 hoveringEffect">Kids</a>
    </div>
    <div className="col-md-3 col-12 d-flex flex-column  align-items-center">
      <a href="../../index.html" className="text-decoration-none fs-3 text-light mb-4 hoveringEffect">Links</a>
      <a href="../../index.html" className="text-decoration-none fs-5 text-light mb-4 hoveringEffect">Home</a>
      <a href="../../login/loginPage.html" className="text-decoration-none fs-5 text-light mb-4 hoveringEffect">Login</a>
      <a href="../../contact.html" className="text-decoration-none fs-5 text-light mb-4 hoveringEffect">Contact</a>
    </div>
</div>
</div>
  )
}

export default NavFooter
