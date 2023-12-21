import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

function Addproduct({productId}) {
    const [show, setShow] = useState(false);
  const [warning, setWarning] = useState(false)
  const [img,setImg] = useState("")
  const token =   useSelector((store)=>store.auth.token)
  const notify = () => toast("Wow so easy!");
  const onSubmitHandler = async(e) => {
  e.preventDefault();
  notify()

  try {
      if(!img){
         return  setWarning(true)
      }
      console.log(img);
      const fd = new FormData();
      fd.append("img", img);
      console.log(fd)
      const response = await axios.post(
          `${import.meta.env.VITE_DOMAIN_NAME}/api/v1/products/uploadImage/${productId}`,
          fd,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if(response.status === 200){
            setShow(false);
        }
}
catch(error){
       console.log(error)
}
  };

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);
  const onFileHandler = (e) => {
    console.log(e.target.files[0]);
    setImg(e.target.files[0])
  };
  return (
    <>
      <ToastContainer />
      <Button
        variant=""
        onClick={handleShow}
        className=" border-0 mx-1"
      >
     Edit Image
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upload Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <input
              onChange={onFileHandler}
              className="form-control"
              type="file"
              id="formFile"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="primary" onClick={onSubmitHandler}>
            Edit Product
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Addproduct;
