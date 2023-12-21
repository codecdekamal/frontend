import React, { useEffect, useState } from 'react'
import NavSec from '../component/Navbar/NavSec'
import Navbar from '../component/Navbar/Navbar'
import Card from '../utilities/Card'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../feature/ProductContext'
import EditModal from "../component/Dashboard/EditModal"
import UploadImg from '../component/Dashboard/UploadImg'
import { ToastContainer, toast } from "react-toastify";
const ProductPage = () => {
  const notify = () =>
  toast("Wow so easy!", {
    type: "success",
  });
const token =   useSelector((store)=>store.auth.token)
const dispatch = useDispatch()
  const [ProductData,setProductData] = useState([])
  const navigate = useNavigate()
 
const onClickHandler = (id) =>{
  console.log(id)
  if(id){
     navigate(`/productdetailpage/${id}`)
  }
}
const fetchData = async () =>{
  const response = await axios.get(`${import.meta.env.VITE_DOMAIN_NAME}/api/v1/products/`,{
    headers:{
      Authorization:`Bearer ${token}`
    }
  })
  console.log(response.data)
  setProductData(response.data.products)
  dispatch(getAllProducts(response.data.products) )
  notify()

}
useEffect(()=>{
  fetchData()
},[])
  return (
    <div>
      <ToastContainer></ToastContainer>
        <Navbar/>
        <NavSec/>
        <div className="allProducts container-fluid p-3">
           <div className=" fs-2 fw-bolder  text-capitalize d-flex justify-content-center ">Edit Products</div>
           <div className="container-fluid ">  
            {/* <!-----------mens-->        */}
            <div className="row justify-content-center row">
            {
                ProductData.map((item,i)=>{
                    return <Card edit ="edit" >
                    <img
                     src={item.images}
                      className=" "
                      height="200"
                      width="fit-content"
                    />
                    <div
                      className="makingHeadingCenterAlign card-body bg-secondary rounded-bottom-3"
                    >
                      <h5 className="text-bg-dark rounded" >T-Shirt
                    </h5>
                      <span className="text-bold" >${item.price}</span>
                      <p className="makingThingsFlex text-light ">This comfortable and stylish t-shirt </p>
                      <ul className='px-2 text-white d-flex justify-content-center  ' >
                      {
                        Array.from(Array(Math.floor(item.rating)),(e,i)=>{
                          return <li key={item._id}  className='list-unstyled mx-1 fs-2 ' >*</li>
                        })
                      }
                      </ul>
                      <button
                        className="btn btn-warning d-flex justify-content-center align-align-items-center text-dark"
                      >
                        <EditModal productId={item._id}></EditModal>
                      </button>
                      <button
                        className="btn btn-warning d-flex justify-content-center align-align-items-center text-dark mt-2 px-2"
                      >
                        <UploadImg productId={item._id}/>
                      </button>
                    </div>
                  </Card>
                })
            }
                </div>
                {/* <!------------womens--> */}
                {/* <div className="row justify-content-center ">
                {
                ProductData.map((item,i)=>{
                    return <Card >
                    <img
                      className=" "
                      height="200"
                      width="fit-content"
                    />
                    <div
                      className="makingHeadingCenterAlign card-body bg-secondary rounded-bottom-3"
                    >
                      <h5 className="text-bg-dark rounded">T-Shirt
                    </h5>
                      <span className="text-bold">$8</span>
                      <p className="makingThingsFlex text-light ">This comfortable and stylish t-shirt </p>
                      <button
                        className="btn btn-warning d-flex justify-content-center align-align-items-center text-dark"
                      >
                        <span className="material-symbols-rounded">shopping_cart</span>
                        Add to cart
                      </button>
                    </div>
                  </Card>
                })
            }
                </div> */}
                {/* <!-----------kids--> */}
                {/* <div className="row justify-content-center ">
                {
                ProductData.map((item,i)=>{
                    return <Card >
                    <img
                      className=" "
                      height="200"
                      width="fit-content"
                    />
                    <div
                      className="makingHeadingCenterAlign card-body bg-secondary rounded-bottom-3"
                    >
                      <h5 className="text-bg-dark rounded">T-Shirt
                    </h5>
                      <span className="text-bold">$8</span>
                      <p className="makingThingsFlex text-light ">This comfortable and stylish t-shirt </p>
                      <button
                        className="btn btn-warning d-flex justify-content-center align-align-items-center text-dark"
                      >
                        <span className="material-symbols-rounded">shopping_cart</span>
                        Add to cart
                      </button>
                    </div>
                  </Card>
                })
            }
                </div> */}
         </div>      
           </div>
        </div>
  )
}

export default ProductPage
