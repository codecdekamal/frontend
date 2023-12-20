import React from 'react'

const CardContainer = ({children,heading}) => {
  return (

    <div className="allProducts container-fluid p-3">
    <div className="fs-2 fw-bolder text-capitalize d-flex justify-content-center">{heading}</div>
    <div className="container-fluid">
      <div className="row justify-content-center row">{children}</div>
    </div>
  </div>)
}

export default CardContainer
