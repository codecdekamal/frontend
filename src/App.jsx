import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Homepage";
import Login from "./pages/Login";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import Cart from "./pages/Cart";
import ShippingScreen from "./pages/ShippingScreen";
import PlaceOrderScreen from "./pages/PlaceOrderScreen";
import Logout from "./pages/Logout";
import Checkout from "./pages/Checkout";
import Editproduct from "./pages/Editproduct";
import UserProfilePage from "./pages/UserProfilePage";
import Register from "./pages/Register";
import ErrorPage from "./pages/ErrorPage";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <ErrorPage></ErrorPage>,
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <ErrorPage></ErrorPage>,
    },
    {
      path: "/logout",
      element: <Logout />,
      errorElement: <ErrorPage></ErrorPage>,
    },
    {
      path: "/register",
      element: <Register />,
      errorElement: <ErrorPage></ErrorPage>,
    },
    {
      path: "/productPage/:category",
      element: <ProductsPage></ProductsPage>,
      errorElement: <ErrorPage></ErrorPage>,
    },
    {
      path: "/productdetailpage/:id",
      element: <ProductDetailPage></ProductDetailPage>,
      errorElement: <ErrorPage></ErrorPage>,
    },
    {
      path: "/cart",
      element: <Cart></Cart>,
      errorElement: <ErrorPage></ErrorPage>,
    },
    {
      path: "/shipping_address",
      element: <ShippingScreen />,
      errorElement: <ErrorPage></ErrorPage>,
    },
    {
      path: "/order_screen",
      element: <PlaceOrderScreen />,
      errorElement: <ErrorPage></ErrorPage>,
    },
    {
      path: "/checkout",
      element: <Checkout />,
      errorElement: <ErrorPage></ErrorPage>,
    },
    {
      path: "/editProduct",
      element: <Editproduct />,
      errorElement: <ErrorPage></ErrorPage>,
    },
    {
      path: "/my_Profile",
      element: <UserProfilePage />,
      errorElement: <ErrorPage></ErrorPage>,
    },

    // {
    //   path:"/return",
    //   element:<Return />

    // }
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
