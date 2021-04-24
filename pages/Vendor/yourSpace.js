import React from "react";
import YourSpaceDetail from "../../Components/Vendor/yourSpaceDetail";
import VendorHeader from "../../Layouts/vendorHeader";

function YourSpace(props) {
  return (
    <div>
      <VendorHeader>
        <YourSpaceDetail />
      </VendorHeader>
    </div>
  );
}

export default YourSpace;
