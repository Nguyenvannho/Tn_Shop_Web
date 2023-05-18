// import logo from "./logo.svg";
// import "./App.css";
import ProductDetails from "./pages/ProductDetails";
import { Route, Routes } from "react-router-dom";
import Login from './pages/Login';
import Shop from './pages/Shop';
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import ShoppingCart from "./pages/Cart";
import Register from "./pages/Register";




function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/Contact" element={<Contact />} /> */}
        <Route path="/shop" element={<Shop/>} />
        <Route path="/productdetail/:id" element={<ProductDetails/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/cart" element={<ShoppingCart/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>

  );
}

export default App;