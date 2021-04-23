import React from "react";
import BookingDetail from "../../Components/Vendor/bookingDetail";
import VendorHeader from "../../Layouts/vendorHeader";

function BookingDetails(props) {
  return (
    <div>
      <VendorHeader>
        <BookingDetail />
      </VendorHeader>
    </div>
  );
}

export default BookingDetails;
