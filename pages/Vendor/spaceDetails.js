import { Container } from "@material-ui/core";
import React from "react";
import SpaceDetail from "../../Components/Vendor/spaceDetail";
import SpaceImages from "../../Components/Vendor/spaceImages";
import VendorHeader from "../../Layouts/vendorHeader";

function SpaceDetails(props) {
  return (
    <div>
      <VendorHeader />
      <SpaceImages />
      <Container>
        <SpaceDetail />
      </Container>
    </div>
  );
}

export default SpaceDetails;
