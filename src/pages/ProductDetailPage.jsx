// ProductDetailPage.js
import React, { useEffect } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import Navbar from "../component/Navbar/Navbar";
import NavSec from "../component/Navbar/NavSec";
import DetailsComp from "../component/DetailsComp";
import { useDispatch } from "react-redux";
import { addToCart } from "../feature/CartContext";
const ProductDetailPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const allItems = useSelector((store) => store.product.items);
  const [product, setProduct] = useState({});
  function gettingClickedItem() {
    const findingIdItem = allItems.find((item) => item._id == id);
    setProduct(findingIdItem);
  }
  const onClickHandler =()=>{
    dispatch(addToCart({product:product}))
  }
  useEffect(()=>{
    gettingClickedItem()
  },[product])
 
  // Dummy product data (replace with actual data or fetch from an API)
  return (
    <>
      <Navbar />
      <NavSec />
      <DetailsComp product={product} onClick={onClickHandler}/>
    </>
  );
};

export default ProductDetailPage;
