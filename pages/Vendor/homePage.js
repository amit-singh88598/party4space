import { Container } from "@material-ui/core";
import React from "react";
import Banner from "../../Components/Vendor/banner";
import Home from "../../Components/Vendor/home";
import VendorHeader from "../../Layouts/vendorHeader";

function HomePage(props) {
  return (
    <div>
      <VendorHeader>
        {/* <Container maxWidth="false" style={{ width: "95vw" }}> */}
        <Home />
      </VendorHeader>
      <Banner />
      {/* </Container> */}
    </div>
  );
}

export default HomePage;
