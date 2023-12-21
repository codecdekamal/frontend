const domain = `${import.meta.env.VITE_DOMAIN_NAME}`
const settingSrc = (imagePath) => {
  console.log(imagePath)
  if (imagePath.startsWith("/uploads")) {
    return `${domain}${imagePath}`;
  }
  return imagePath;
};
const DetailsComp = ({product,onClick}) => {
  const imageAddress = "https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YW55fGVufDB8fDB8fHww"
  return (
    <>
       <div class="container mt-5">
  <div class="row">
    <div class="col-md-6">
      <img src={product.images?settingSrc(product.images):imageAddress} alt="Product Image" class="w-100"/>
    </div>
    <div class="col-md-6">
      <h2 class="mb-3">{product.title}</h2>
      <p class="mb-3">{product.description}</p>
      <p class="font-weight-bold mb-3">Price: ${product.price} </p>
      <p class="mb-3">{product.stocks}</p>
      <p class="mb-3">Rating: {product.rating} </p>
      <button class="btn btn-primary" onClick={onClick}>Add to Cart</button>
    </div>
  </div>
</div>
    </>
  )
}

export default DetailsComp
