let shippingAddress =(address)=>{
  let newAddress = ""
  for (const key of Object.keys(address)) {
    newAddress += `${address[key]} `; 
  }
   return newAddress.trim();
}
const OrderDetails = ({ order }) => (
    <div className="container-fluid " style={{minWidth:"100vw",minHeight:"100vh",backgroundColor:"#F0F2F5"}}>
     <div className="container pt-3 ">
      <div className="row">
        <div className="col-md-8">
          <h1 className="fw-bold mb-4 text-info  ">Order:{order._id.slice(5,10)}</h1>
          <div className="card mb-4">
            <div className="card-header text-info ">
              Order Information
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong>Customer Name:</strong> {order.customerName}
              </li>
           
              <li className="list-group-item">
                <strong>Order Status:</strong> {order.orderStatus}
              </li>
              <li className="list-group-item">
                <strong>Payment Method:</strong> {order.paymentMethod}
              </li>
              <li className="list-group-item">
                <strong>Shipping Address:</strong> {shippingAddress(order.shippingAddress)}
              </li>
            </ul>
          </div>
          <div className="card">
            <div className="card-header">
              Cart Items
            </div>
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Item</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {order.items.map((item) => (
                  <tr>
                    <td>
                      <img
                        src={item.image}
                        alt={item.name}
                        width={50}
                      />
                    </td>
                    <td>
                      <a href="#">{item.name}</a>
                    </td>
                    <td>{item.quantity}</td>
                    <td>${item.price}</td>
                    <td>${item.price * item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="card-footer text-right">
              <strong>Total: ${order.totalAmount/100}</strong>
            </div>
          </div>
        </div>
        <div className="col-md-4 mt-4 " >
          <div className="card mb-4 mt-lg-5">
            <div className="card-header mt">
              Order Summary
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                Items: {order.items.length}
              </li>
              <li className="list-group-item">
                Subtotal: ${order.subtotal/100}
              </li>
           
            </ul>
          </div>
          
        </div>
      </div>
    </div>
    </div>
   
  );
  export default OrderDetails