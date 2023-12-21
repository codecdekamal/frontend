import { useContext } from "react"
import NavSec from "../component/Navbar/NavSec"
import Navbar from "../component/Navbar/Navbar"
import { getAllProducts } from "../feature/ProductContext";
import React, { useState, useEffect } from 'react';
import ProductCarousel from '../component/ProductCarousel';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import Loadeer from "../component/Loadeer";

const HomePage = () => {
  const dispatch =  useDispatch();
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);
  const {token} = useSelector(store=>store.auth)
  const fetchData = async () => {
    try {
      console.log(        `${import.meta.env.VITE_DOMAIN_NAME}/api/v1/products/`,
      )
      setLoading(true)
      const response = await axios.get(
        `${import.meta.env.VITE_DOMAIN_NAME}/api/v1/products/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast("Wow so easy!", { type: "success" }); // Notify after successful data fetch
      console.log(response.data);
      setProductData(response.data.products);
      dispatch(getAllProducts(response.data.products));
      setLoading(false)
    } catch (error) {
      console.error(error);
      setLoading(false)
      toast("Error fetching products!", { type: "error" }); // Notify if error occurs
    }
  };
 
  useEffect(() => {
    fetchData()
  }, []);

  return (
    <>
    <ToastContainer></ToastContainer>
    {loading && <Loadeer />}
    <Navbar/>
    <NavSec/>
    <div className="mb-2 ">
    <img src="https://cdn.pixabay.com/photo/2019/04/26/07/14/store-4156934_1280.png" className="img-fluid" alt="..." style={{minWidth:"100vw",minHeight:"50vh"}}/>
    </div>
    <div className="fs-2 fw-bolder text-capitalize d-flex justify-content-center">all products</div>
    {loading && <Loadeer />}
    <ProductCarousel products={productData}/>
    </>
  )
}

export default HomePage;