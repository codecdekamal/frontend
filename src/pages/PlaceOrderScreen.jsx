import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar/Navbar";
import OrderDetails from "../component/PaymentScreen/OrderDetails";
import NavSec from "../component/Navbar/NavSec";
import { useSelector } from "react-redux";
import axios from "axios";
import { Container,Card,CardHeader } from "react-bootstrap";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const PlaceOrderScreen = () => {
const {role} = useSelector(store=>store.auth);
  const [order,setOrderItems] = useState([])
  const [user,setUser] = useState({})

  const {userID,token} = useSelector(store=>store.auth)
  // Replace with actual order data retrieved from API
  // const order = {
  //   _id: 1234,
  //   customerName: "John Doe",
  //   orderDate: "2023-12-09",
  //   orderStatus: "Shipped",
  //   paymentMethod: "PayPal",
  //   shippingAddress: "123 Main Street, Anytown, USA",
  //   subtotal: 90.0,
  //   shippingCost: 10.0,
  //   tax: 5.0,
  //   totalAmount: 105.0,
  //   items: [
  //     {
  //       name: "Product A",
  //       quantity: 5,
  //       price: 56.0,
  //       image: "/images/product-a.jpg",
  //     },
  //     {
  //       name: "Product B",
  //       quantity: 1,
  //       price: 50.0,
  //       image:
  //         "https://cdn.pixabay.com/photo/2017/08/01/08/29/woman-2563491_1280.jpg",
  //     },
  //   ],
  // };
  const fetchingData = async () => {
    try {
      if(role==="admin"){
        const response = await axios.get(
          `${import.meta.env.VITE_DOMAIN_NAME}/api/v1/order/`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if(response.statusText ==="OK"){
          console.log(response.data.order)
            setOrderItems(response.data.order) 
            setUser(response.data.order[0].user)
            const user = response.data.order[0].user;
        }
      }
      if (role==="user") {
        const response = await axios.get(
          `${import.meta.env.VITE_DOMAIN_NAME}/api/v1/order/getCurrntUserOrder/${userID}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if(response.statusText ==="OK"){
          console.log(response.data.order)
            setOrderItems(response.data.order) 
            setUser(response.data.order[0].user)
            const user = response.data.order[0].user;
        }
      }
     
    } catch (error) {
      console.log(error);
    }
  //  console.log(orderItems);
  };
  useEffect(()=>{
    fetchingData()
  },[])
  return (
    <>
      <div style={{ minWidth: "100vw" }}>
        <Navbar></Navbar>
      </div>
      <div style={{ minWidth: "100vw", overflow: "hidden" }}>
        <NavSec></NavSec>
      </div>
      {
       order.length===0? <Container className=" mt-2 d-flex flex-row justify-content-center text-center   ">
       <Card className="text-white">
     <CardHeader className="d-inline">
       <h2 className="d-inline d-lg-inline text-danger">No Orders yet!</h2>
     </CardHeader>
   </Card>
     </Container>: order.map((item)=>{
          return <>
                     <OrderDetails order = {item} />
                     <div class="border border-bottom-1 border-black "></div>
          </>
        })
      }
    </>
  );
};

export default PlaceOrderScreen;
