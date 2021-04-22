import { Container, Typography } from "@material-ui/core";
import React from "react";
import Banner from "../../Components/Vendor/banner";
import VendorHeader from "../../Layouts/vendorHeader";

function HomePage(props) {
  return (
    <div>
      <VendorHeader>
        <Typography
          style={{
            fontSize: "2.2em",
            fontWeight: 500,
            padding: 20,
            marginTop: 20,
          }}
        >
          Your Space
        </Typography>
      </VendorHeader>
      <Banner />
      {/* </Container> */}
    </div>
  );
}

export default HomePage;
