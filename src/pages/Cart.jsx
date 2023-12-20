import { useEffect, useState } from "react";
import Card from "../utilities/Card";
import { CardHeader, Container } from "react-bootstrap";
import NavSec from "../component/Navbar/NavSec";
import Navbar from "../component/Navbar/Navbar";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { totalAmount,checkOut,eliminatingCart, Increase,Decrease } from "../feature/CartContext";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const navigate = useNavigate()
  const cartProducts = useSelector(store=>store.cart.items)
  const cartTotal = useSelector(store=>store.cart.cartTotal)
  const checkItOut = useSelector(store=>store.cart.check)
console.log(cartProducts)
 const dispatch = useDispatch();
  console.log(cartProducts)
  const checkOutHandler = () =>{
    dispatch(checkOut())
    if(checkItOut){
      return navigate("/shipping_address")
    }
  }
  const onDeleteHandler = (e) =>{
    console.log(e.target.id)
    dispatch(eliminatingCart(e.target.id))
  }
 const decreaseHandler = (id) =>{
  dispatch(Decrease(id))
  dispatch(totalAmount())

 }
 const IncreaseHandler = (id) =>{
  dispatch(Increase(id))
  dispatch(totalAmount())

 }
  useEffect(()=>{
    dispatch(totalAmount())
  },[cartProducts])
  
  return (
    <>
      <Navbar />
      <NavSec />
      {cartTotal===0?
      <Container className=" mt-2 d-flex flex-row justify-content-center text-center   ">
        <Card className="text-white">
      <CardHeader className="d-inline">
        <h2 className="d-inline d-lg-inline text-danger">Your cart is empty</h2>
      </CardHeader>
    </Card>
      </Container>
      :<main className="cart my-5  lg-translate-middle-y ">
        <div className="itemsInCart bg-secondary mb-5 mb-md-0">
          <div className="border-bottom mb-2 text-light">
            <h3 className="fw-bold">items In Cart</h3>
          </div>
          {cartProducts.map((item) => {
            return (
              <div key={item._id} className="cart-body fs-5 mb-3 ">
                <div className="cart-img">
                  <img
                    width="150px"
                    height="170px"
                    src={item.images}
                  />
                </div>
                <div className="price text-light">
                  <div className="price-title fs-md-5">{item.title}</div>
                  <div className="price-num">${item.total}</div>
                  <div className="delete">
                    <button className="btn btn-warning"  id={item._id} onClick={onDeleteHandler}>
                      <span className="material-symbols-outlined" id={item._id}>
                        {" "}
                        delete{" "}
                      </span>
                    </button>
                  </div>
                </div>
                <div className="cart-input" id={item._id}>
                  <button id={item._id} className="btn btn-warning" onClick={()=>decreaseHandler(item._id)} >-</button>
                  <input
                    type="number"
                    className="w-100 rounded-2 border-black align-items-center "
                    readOnly
                    value={item.quantity}
                  />
                  <button id={item._id} className="btn btn-warning" onClick={()=>IncreaseHandler(item._id)} >+</button>
                </div>
              </div>
            );
          })}
        </div>
        <div
          className="summary bg-secondary text-light "
          style={{ maxHeight: "300px" }}
        >
          <div className="sum-head border-bottom">
            <h3 className="fw-bold">summary</h3>
          </div>
          {/* <div className="cost dist-btw fs-5">
            <p>cost</p>
            <p>$25</p>
          </div>
          <div className="shopping dist-btw fs-5 border-bottom">
            <p>shopping</p>
            <p>$5</p>
          </div> */}
          <div className="total dist-btw fs-4 fw-bold">
            <p>total</p>
            <p>${cartTotal}</p>
          </div>
          <button className="btn btn-warning" onClick={checkOutHandler}>checkout</button>
        </div>
      </main>}
    </>
  );
};

export default Cart;
