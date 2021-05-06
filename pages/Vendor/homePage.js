import React from "react";
import HomeHeroes from "../../Components/Vendor/homeHeroes";
import SpaceImages from "../../Components/Vendor/spaceImages";
import VendorHeader from "../../Layouts/vendorHeader";

function HomePage(props) {
  return (
    <div>
      <VendorHeader />
      <HomeHeroes />
    </div>
  );
}

export default HomePage;
