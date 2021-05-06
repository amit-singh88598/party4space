import React from "react";
import EditSpaceDetail from "../../Components/Vendor/editSpaceDetail";
import VendorHeader from "../../Layouts/vendorHeader";

function EditSpaceDetails(props) {
  return (
    <div>
      <VendorHeader>
        <EditSpaceDetail />
      </VendorHeader>
    </div>
  );
}

export default EditSpaceDetails;
