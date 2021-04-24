import React from "react";
import UpcomingBookingDetail from "../../Components/Vendor/upcomingBookingDetail";
import VendorHeader from "../../Layouts/vendorHeader";

function UpcomingBookingDetails(props) {
  return (
    <div>
      <VendorHeader>
        <UpcomingBookingDetail />
      </VendorHeader>
    </div>
  );
}

export default UpcomingBookingDetails;
