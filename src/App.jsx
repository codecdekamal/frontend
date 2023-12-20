import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/Homepage";
import Login from "./pages/Login";
import ProductsPage from "./pages/ProductsPage"
import ProductDetailPage from "./pages/ProductDetailPage"
import Cart from "./pages/Cart";
import ShippingScreen  from "./pages/ShippingScreen";
import PlaceOrderScreen from "./pages/PlaceOrderScreen";
import Logout from "./pages/Logout";
import Checkout from "./pages/Checkout";
import Editproduct from "./pages/Editproduct"
import UserProfilePage from "./pages/UserProfilePage";
import Register from "./pages/Register";
 function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<HomePage/>
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/logout",
      element:<Logout/>
    },
    {
      path:"/register",
      element:<Register/>
    },
    {
      path:"/productPage/:category",
      element:<ProductsPage></ProductsPage>,
    },
    {
      path:"/productdetailpage/:id",
      element:<ProductDetailPage></ProductDetailPage>
    },
    {
      path:"/cart",
      element:<Cart></Cart>
    },
    {path:"/shipping_address",
    element:<ShippingScreen/>
  },
{path:"/order_screen",
element:<PlaceOrderScreen/>
},
{
  path:"/checkout",
  element:<Checkout />
},
{
  path:"/editProduct",
  element:<Editproduct />
},
{
  path:"/my_Profile",
  element:<UserProfilePage/>
}

// {
//   path:"/return",
//   element:<Return />
  
// }
  ])
  return (
    <>
        <RouterProvider router={router}></RouterProvider> 
    </>
  )
}

export default App
