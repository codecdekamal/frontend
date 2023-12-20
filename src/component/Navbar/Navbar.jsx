import React from "react";
import "../../index.css";
import { showModal } from "../../feature/ModalContext";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import Addproduct from "../Dashboard/Addproduct";
import { FontAwesomeIcon } from
 
'@fortawesome/react-fontawesome';
import { faCartShopping } from
 
'@fortawesome/free-solid-svg-icons';
const Navbar = () => {
  const dispatch = useDispatch();
  const { items} = useSelector((store) => store.cart);
  const { isAuthenticated, userID, role,username } = useSelector((store) => store.auth);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark  ">
      <div className="container-fluid">
        <Link
          to="/"
          id="title"
          className="text-decoration-none text-warning textfor m-sm-3"
        >
          eccomerce
          <p className="text-light my-0 py-0 text-center " style={{fontSize:"1rem",letterSpacing:"0"}}>hi! {username}</p>
        </Link>

        <button
          className="navbar-toggler bg-light "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className=" collapse navbar-collapse mt-2  "
          id="navbarNavDropdown"
        >
          <div className="container-fluid text-warning ">
            <div className="nav-content">
              <div>
                <form
                  className="d-flex justify-content-lg-center "
                  role="search"
                >
                  <input type="search" name="" className="searchBar" />
                  <button className="border-0 px-4  text-bg-warning round ">
                    Search
                  </button>
                </form>
              </div>
              <div className="loginAndCart d-flex">
                 <div className="dropdown mb-2 mx-lg-4 my-lg-2">
                  <button
                    className="btn btn-warning dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dashboard
                  </button>
                  <ul className="dropdown-menu">
                  {role === "admin" && <div>
                  <li>
                    <Addproduct showModal={showModal()} />
                    </li>
                    <li>
                    <Link to="/editProduct" className="link-offset-2 link-underline link-underline-opacity-0 text-dark mx-1">
                      <Button className="bg-light border-0 text-black">Edit Products</Button>
                      </Link>
                    </li>
                  </div> }
                    <li>
                    <Link to="/my_Profile" className="link-offset-2 link-underline link-underline-opacity-0 text-dark mx-1 ">
                    <Button className="bg-light border-0 text-black">
                    My Profile
                    </Button>
            </Link>
                    </li>
                    <li>
                    <Link to="/order_screen" className="link-offset-2 link-underline link-underline-opacity-0 text-dark mx-1 ">
                    <Button className="bg-light border-0 text-black">
                    My Orders
                    </Button>
            </Link>
                    </li>
                  </ul>
                </div> 
                <button className=" btn btn-warning " type="button">
                  <Link
                    to={isAuthenticated ? "/logout" : "/login"}
                    className="text-light  text-decoration-none"
                  >
                    {isAuthenticated ? "Logout" : "Login"}
                  </Link>
                </button>
                <Link
                  to="/cart"
                  className="btn btn-link text-decoration-none text-warning  "
                >
                 <button type="button" class="btn btn-primary position-relative">
                 <FontAwesomeIcon icon={faCartShopping} />
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {items.length}
    <span class="visually-hidden">unread messages</span>
  </span>
</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
