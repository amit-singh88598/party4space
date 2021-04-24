import React from "react";
import BookingRecord from "../../Components/Vendor/bookingRecord";
import VendorHeader from "../../Layouts/vendorHeader";

function BookingRecords(props) {
  return (
    <div>
      <VendorHeader>
        <BookingRecord />
      </VendorHeader>
    </div>
  );
}

export default BookingRecords;
