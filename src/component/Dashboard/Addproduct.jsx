import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
const inputFields = [
  { type: "text", placeholder: "title", name: "" },
  { type: "text", placeholder: "description", name: "" },
  { type: "number", placeholder: "price", name: "" },
  { type: "number", placeholder: "rating", name: "" },
  { type: "number", placeholder: "stock", name: "" },
  { type: "text", placeholder: "images", name: "" },

];
function Addproduct() {
  const [warning, setWarning] = useState(false)
  const token =   useSelector((store)=>store.auth.token)
  const notify = () => toast("Wow so easy!");
  const [ProductDetails, setProductDetails] = useState({
    title: "",
    description: "",
    price: 0,
    images: "",
    rating: 0,
    stock: 0,
    category: "",
  });
  const fetchingData = async() =>{
    try {
      const response = await axios.post("http://localhost:5000/api/v1/products/",ProductDetails,{
    headers:{
      Authorization:`Bearer ${token}`
    }
  })
  console.log(response)
  console.log(ProductDetails);
    setShow(false);
    } catch (error) {
      console.log(error)
      setWarning(true)
    }
    
  }
  const onSubmitHandler = async() => {
    // const  {title ,description , price , images , rating , stock , category} = ProductDetails
    // if (title || description || price || images || rating || stock || category === "") {
    //   return setShow(true)
    // }
  await fetchingData()
  notify();

  };
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    console.log({ [name]: value });
    setProductDetails({ ...ProductDetails, [name]: value });
  };
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);
  const handleOption = (e) => {
    console.log(e.target.value);
    setProductDetails({ ...ProductDetails, category: e.target.value });
  };
  return (
    <>
      <ToastContainer />
      <Button
        variant=""
        onClick={handleShow}
        className=" border-0 mx-1 "
      >
        Add products
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Products</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {inputFields.map((item, i) => {
            return (
              <div key={i} className="input-group mb-3">
                <span
                  className="input-group-text text-capitalize "
                  id="inputGroup-sizing-default"
                >
                  {item.placeholder}
                </span>
                <input
                  name={item.placeholder}
                  type={item.type}
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                  placeholder={item.placeholder}
                  min="0"
                  onChange={onChangeHandler}
                  max={item.placeholder === "rating" && "5"}
                />
              </div>
            );
          })}
          <label className="input-group-text" htmlFor="inputGroupSelect01">
            Category
          </label>
          <select
            onChange={handleOption}
            className="form-select"
            id="inputGroupSelect01"
          >
            <option defaultValue>Choose...</option>
            <option value="mens">Men</option>
            <option value="womens">Women</option>
            <option value="kids">Kids</option>
          </select>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="primary" onClick={onSubmitHandler}>
            Add Product
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Addproduct;
