import React, { useEffect,useState } from "react";
import { Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem } from "react-bootstrap";
import { useSelector } from "react-redux";
import axios from "axios";
import Navbar from "../component/Navbar/Navbar";
import NavSec from "../component/Navbar/NavSec";
const UserProfilePage = () => {
    const [userData,setUserData] = useState({})
    const {userID,token} = useSelector(store=>store.auth)
    const fetchData = async () =>{
        const response = await axios.get(`http://localhost:5000/api/v1/user/${userID}`,{
          headers:{
            Authorization:`Bearer ${token}`
          }
        })
  console.log(response.data)
  setUserData(response.data.data)
      }
      useEffect(()=>{
        fetchData()
      },[])
  return (
    <>
    <Navbar></Navbar>
    <NavSec></NavSec>
        <Card>
    <CardBody>
      <CardTitle className="mb-3 mx-3">User Details</CardTitle>
      <ListGroup variant="flush">

        <ListGroupItem className="">
          <i className="bi bi-envelope-fill me-2  "></i> Email: {userData.email}
        </ListGroupItem>
        <ListGroupItem>
          <i className="bi bi-phone-fill me-2"></i> Username: {userData.username}
        </ListGroupItem>
        <ListGroupItem>
          <i className="bi bi-briefcase-fill me-2"></i> Role: {userData.role}
        </ListGroupItem>
      </ListGroup>
    </CardBody>
  </Card>
    </>
  )
}

export default UserProfilePage
