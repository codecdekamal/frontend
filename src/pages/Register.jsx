import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import { login } from "../feature/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Alert from "../component/Navbar/Alert";
const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
    username:"",
     name:""
  });
  const [warning, setWarning] = useState("");
  const onChangeHandler = (e) => {
    setWarning("");
    const { name, value } = e.target;
    console.log({ [name]: value });
    setUserInput({ ...userInput, [name]: value });
    console.log(userInput);
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(userInput);
    const { email, password } = userInput;
    if (!email || !password) {
      return setWarning("Please Provide email and password");
    }
    const fetchingData = async () => {
      try {
        const resp = await axios.post(
          "http://localhost:5000/api/v1/auth/register",
          userInput
        );
        console.log(resp.data);
        if(resp.status ===201){
          toast("Wow so easy!", { type: "success" });
          return  setTimeout(()=>{
            navigate("/login")
          },2000) 
        }
        else{
          setWarning(resp.data.msg)
        }
      } catch (error) {
        toast("User already registerd!", { type: "error" }); // Notify if error occurs
        if (error) {
          console.log(error)
          return setWarning(error.response.data.msg);
        }
        console.log(error);
      }
    };
    fetchingData();
  };

  return (
    <>
     <ToastContainer />
{    warning &&  <Alert message={warning}/>
}      <section
        id="loginHeader"
        className="container-fluid d-flex flex-column card w-75  rounded-2 my-5 p-md-4"
        style={{ maxWidth: "min-content" }}
      >
        <header className="d-flex justify-content-center flex-column ">
          <div className="head d-flex justify-content-center p-2">
            <h3 className="py-2 " style={{ color: "#1877F2" }}>
            Register
            </h3>
          </div>
          <div className="justify-content-center d-flex m-2">
            <img
              src="https://cdn.pixabay.com/photo/2017/03/21/02/00/user-2160923_640.png"
              alt="login"
              height="150"
              width="150"
              className="img-fluid rounded-2  "
            />
          </div>
        </header>
        <form
          onSubmit={onSubmitHandler}
          id="onSubmitting"
          action=""
          className="d-flex flex-column justify-content-center align-items-center card-body "
        >
             <div className="password mb-3 loginButton">
            <p className="m-0 ">Name</p>
            <input
              name="name"
              className="input"
              type="text"
              onChange={onChangeHandler}
            />
          </div>
          <div className="email mb-3 loginButton">
            <p className="m-0 ">E-mail</p>
            <input
              name="email"
              className="input"
              type="text"
              onChange={onChangeHandler}
            />
          </div>
          <div className="password mb-3 loginButton">
            <p className="m-0 ">Username</p>
            <input
              name="username"
              className="input"
              type="text"
              onChange={onChangeHandler}
            />
          </div>
         
          <div className="password mb-3 loginButton">
            <p className="m-0 ">Password</p>
            <input
              name="password"
              className="input"
              type="text"
              onChange={onChangeHandler}
            />
          </div>
          <div className="loginButton mt-1 ">
            <button type="submit" className="btn btn-warning px-3  fs-6 px-5 ">
            Register
            </button>
          </div>
        </form>
        <div class="container">
  <div class="row ">
    <div class="px-3 col-8 ">
    <p className="text-info">Already a user?</p>
    </div>
    <div class="col">
    <NavLink  className="" to="/login" > Login</NavLink>
    </div>
  </div>
</div>
      </section>
    </>
  );
};

export default Register;
