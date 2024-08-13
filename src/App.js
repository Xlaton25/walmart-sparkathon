import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import HomePage from "./components/HomePage";
import ProductPage from "./components/ProductPage";
import Cart from "./components/Cart";
import BillGenerator from "./components/BillGenerator";
import PaymentInterface from "./components/PaymentInterface";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/bill" element={<BillGenerator />} />
        <Route path="/payment" element={<PaymentInterface />} />
      </Routes>
    </Router>
  );
}

export default App;
