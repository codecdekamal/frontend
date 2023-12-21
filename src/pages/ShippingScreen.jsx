import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { shippingAddress } from "../feature/ShippingAddress";
import {  useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
const ShippingScreen = () => {
  const [warning, setWarning] = useState(false);
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const shipp = useSelector((store) => store.shipp);
  const {items} = useSelector(store=>store.cart)
  const token = useSelector(store=>store.auth.token)
  const [address, setAddress] = useState({
    name: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  });
  const onChangeHandler = (e) => {
    console.log(items)
    setWarning(false);
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
    console.log({ [name]: value });
  };
  const submitHandler = async(e) => {
    e.preventDefault();
    const addingAddressToCartItems = items.map((item)=>{
      return {...item,address}
    })
    console.log(addingAddressToCartItems)
    dispatch(shippingAddress(address));
    const { name, street, city, zipCode, country } = address;
    if (!name || !street || !city || !zipCode || !country) {
      return setWarning(true);
    }
   const stripe = await loadStripe("pk_test_51OMs5QSJSsiwzm7z2tctqqSKGyi3LvFqpNGJvvKIaD8FtlEgm2N8gXQD1N6WOLFFTF8p8ysP0vMdBLnliIBeqANN00Tgm6AtyC");
   const headers = {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  };
const response = await fetch(`${import.meta.env.VITE_DOMAIN_NAME}/api/v1/order/`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(addingAddressToCartItems),
    })
    const session = await response.json();
    const result = stripe.redirectToCheckout({
      sessionId:session.id
    })
    if(result.error){
      console.log(result.error)
    }
    console.log(result)
  }
  return (
    <div>
      <div className="row mx-lg-3 bg-tertiary py-4 px-2 ">
        <div className="col-md-6">
          <h1>Shipping Address</h1>
          <form className="form" onSubmit={submitHandler}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Enter name"
                value={address.name}
                onChange={onChangeHandler}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="street" className="form-label">
                Street
              </label>
              <input
                type="text"
                className="form-control"
                name="street"
                placeholder="Enter street"
                value={address.street}
                onChange={onChangeHandler}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="city" className="form-label">
                City
              </label>
              <input
                type="text"
                className="form-control"
                name="city"
                placeholder="Enter city"
                value={address.city}
                onChange={onChangeHandler}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="state" className="form-label">
                State
              </label>
              <input
                type="text"
                className="form-control"
                name="state"
                placeholder="Enter state"
                value={address.state}
                onChange={onChangeHandler}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="zipCode" className="form-label">
                Zip Code
              </label>
              <input
                type="text"
                className="form-control"
                name="zipCode"
                onChange={onChangeHandler}
                placeholder="Enter zip code"
                value={address.zipCode}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="country" className="form-label">
                Country
              </label>
              <input
                type="text"
                className="form-control"
                name="country"
                placeholder="Enter country"
                value={address.country}
                onChange={onChangeHandler}
              />
            </div>
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-primary btn-block">
                Continue
              </button>
            </div>
          </form>
        </div>
        {warning && (
          <div
            className=" d-flex justify-content-center justify-content-lg-start m-lg-2 p-1 text-danger "
            role="alert"
          >
            Please provide all the credentials
          </div>
        )}{" "}
        {/* TODO: Add CheckoutWizard component here */}
      </div>
    </div>
  );
};

export default ShippingScreen;
