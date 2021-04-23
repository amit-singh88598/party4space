import React from "react";
import BookingCustomerDetail from "../../Components/Vendor/bookingCustomerDetail";
import VendorHeader from "../../Layouts/vendorHeader";

function BookingCustomerDetails(props) {
  return (
    <div>
      <VendorHeader>
        <BookingCustomerDetail />
      </VendorHeader>
    </div>
  );
}

export default BookingCustomerDetails;
