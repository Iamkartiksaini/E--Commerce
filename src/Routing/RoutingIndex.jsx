import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../Component/Footer";
import Shipping from "../Component/Shipping";
import HomePage from "../Pages/HomePage";
import Offers from "../Pages/Offers";

function RoutingIndex() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Shipping />
      <Offers />
      <Footer />
    </>
  );
}

export default RoutingIndex;
