import React, { useEffect, useState } from "react";
import NavSec from "../component/Navbar/NavSec";
import Navbar from "../component/Navbar/Navbar";
import Card from "../utilities/Card";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../feature/ProductContext";
import CardContainer from "../component/CardContainer";
import { ToastContainer, toast } from "react-toastify";
import Loadeer from "../component/Loadeer";
const ProductPage = () => {
  const [loading, setLoading] = useState(false);
  let { category } = useParams();
  console.log(category);
  const token = useSelector((store) => store.auth.token);
  const dispatch = useDispatch();
  const [ProductData, setProductData] = useState([]);
  const navigate = useNavigate();

  const onClickHandler = (id) => {
    console.log(id);
    if (id) {
      navigate(`/productdetailpage/${id}`);
    }
  };
  const fetchData = async () => {
    try {
      console.log()
      setLoading(true)
      const response = await axios.get(
        `${import.meta.env.VITE_DOMAIN_NAME}/api/v1/products/productpage/${category}`,
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
  const settingSrc = (imagePath) => {
    const domain = `${import.meta.env.VITE_DOMAIN_NAME}`;
    if (imagePath.startsWith("/uploads")) {
      return `${domain}${imagePath}`;
    }
    return imagePath;
  };
  useEffect(() => {
    fetchData();
  }, [category]);
  return (
    <div>
      <Navbar />
      <NavSec />
      {loading && <Loadeer />}
      <CardContainer heading={category}>
        {ProductData.map((item, i) => {
          return (
            <Card onClick={onClickHandler} id={item._id}>
              <img
                src={settingSrc(item.images)}
                className=" "
                height="200"
                width="fit-content"
              />
              <div className="makingHeadingCenterAlign card-body bg-secondary rounded-bottom-3">
                <h5 className="text-bg-dark rounded">{item.name}</h5>
                <span className="text-bold">$56</span>
                <p className="makingThingsFlex text-light ">
                  {item.description}{" "}
                </p>
                <ul className="px-2 text-white d-flex justify-content-center  ">
                  {/* {
                        Array.from(Array(Math.floor(item.rating)),(e,i)=>{
                          return <li key={item._id}  className='list-unstyled mx-1 fs-2 ' >*</li>
                        })
                      } */}
                </ul>
                <button className="btn btn-warning d-flex justify-content-center align-align-items-center text-dark">
                  <span class="bi bi-cart me-2"></span>
                  ADD TO CART
                </button>
              </div>
            </Card>
          );
        })}
      </CardContainer>
    </div>
  );
};

export default ProductPage;
