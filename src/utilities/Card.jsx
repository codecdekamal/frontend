import React from "react";

const Card = (props) => {
  const handleClick = () => {
    if (typeof props.onClick === "function") {
      props.onClick(props.id);
    }
  };
  return (
    <div   
    onClick={handleClick}
      className=" hover-card col-6 col-md-4 col-lg-2  ">
    <div
    className="card my-1 mb-3 d-flex flex-column justify-content-center border-bottom-0 border"
  >
        {props.children}
      </div>
      </div>
  );
};

export default Card;
