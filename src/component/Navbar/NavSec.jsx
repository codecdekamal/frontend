import React from "react";
import { Link } from "react-router-dom";
const NavSec = () => {
  return (
    <nav className="position-relative ">
      <div className="linkToPages bg-warning p-2  fs-5 row justify-content-md-center justify-content-between ">
        <div className="link col-2">
          <Link
          to="/"
            className="text-decoration-none  text-dark"
          >
            Home
          </Link>
        </div>
        <div className="link col-2">
          <Link
          to="../../../productPage/allProducts"
            className="text-decoration-none  text-dark"
          >
            All Products
          </Link>
        </div>
        <div className="btn-group col-2 ">
        <Link
          to="../../../productPage/mens"
            className="text-decoration-none  text-dark"
          >
                 Mens 
          </Link>
        </div>
        <div className="btn-group col-2">
        <Link
          to="../../../productPage/womens"
            className="text-decoration-none  text-dark"
          >
                 Womens 
          </Link>
        </div>
        <div className="link col-2">
        <Link
          to="../../../productPage/kids"
            className="text-decoration-none  text-dark"
          >
                kids 
          </Link>  
        </div>
        <div className="link col-md-2 d-flex d-md-block col-12 mt-3 my-md-auto justify-content-center ">
        
        </div>
      </div>
    </nav>
  );
};

export default NavSec;
