import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/Home";
import {Routes, Route} from "react-router-dom";
import Product from "./components/Product";
import Products from "./components/Products";
import Cart from "./components/Cart";

const App = () => {
  return (
   <div>
    <Navbar />
    <Routes>
      <Route path="/" element={Home} />
      <Route path="products" element={Products} />
      <Route path="products/:id" element={Products} />
      <Route path="cart" element={Cart} />
    </Routes>
   </div>
  );
}

export default App;
