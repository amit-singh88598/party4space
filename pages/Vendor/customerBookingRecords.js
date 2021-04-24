import React from "react";
import CustomerBookingRecord from "../../Components/Vendor/customerBookingRecord";
import VendorHeader from "../../Layouts/vendorHeader";

function CustomerBookingRecords(props) {
  return (
    <div>
      <VendorHeader>
        <CustomerBookingRecord />
      </VendorHeader>
    </div>
  );
}

export default CustomerBookingRecords;
