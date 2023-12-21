import React from 'react'
const settingSrc = (imagePath) => {
    const domain = `${import.meta.env.VITE_DOMAIN_NAME}`
    if (imagePath.startsWith("/uploads")) {
      return `${domain}${imagePath}`;
    }
    return imagePath;
  };
 
const SliderCard = ({product,onClick,id}) => {
        const handleClick = () => {
          if (typeof onClick === "function") {
        onClick(id);
          }
        }; 
  return (
    <div onClick={handleClick}  className="card mb-4 mx-2">
    <img src={settingSrc(product.images)} className="card-img-top" alt={product.title} />
    <div className="card-body">
      <h5 className="card-title">{product.title}</h5>
      <p className="card-text">{product.description}</p>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <span className="text-dark">${product.price}</span>
          <span className="ms-2 text-secondary">In Stock: {product.stock}</span>
        </div>
        <button className="btn btn-warning" >
          <span className="bi bi-cart me-2"></span>
          ADD TO CART
        </button>
      </div>
    </div>
  
  </div>
  )
}

export default SliderCard
