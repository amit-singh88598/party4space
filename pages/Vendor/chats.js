import React from "react";
import Chat from "../../Components/Vendor/chat";
import VendorHeader from "../../Layouts/vendorHeader";

function Chats(props) {
  return (
    <div>
      <VendorHeader>
        <Chat />
      </VendorHeader>
    </div>
  );
}

export default Chats;
