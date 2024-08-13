// src/components/HomePage.js

import React from "react";
import Navbar from "./Navbar";

function HomePage() {
  return (
    <div>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <h1>Welcome to Our Store</h1>
        {/* Add product listings and offers here */}
        <p>Featured products and offers will be displayed here.</p>
      </div>
    </div>
  );
}

export default HomePage;
