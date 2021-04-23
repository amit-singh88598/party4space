import React from "react";
import Home from "../../Components/Vendor/home";
import VendorHeader from "../../Layouts/vendorHeader";

function HomePage(props) {
  return (
    <div>
      <VendorHeader>
        <Home />
      </VendorHeader>
    </div>
  );
}

export default HomePage;
