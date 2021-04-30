import { Grid } from "@material-ui/core";
import React from "react";
import ChatSection from "../../Components/Vendor/chatSection";
import RecentChat from "../../Components/Vendor/recentChat";
import VendorHeader from "../../Layouts/vendorHeader";

function Chats(props) {
  return (
    <div>
      <VendorHeader>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={4}>
            <RecentChat />
          </Grid>
          <Grid item xs={12} sm={8}>
            <ChatSection />
          </Grid>
        </Grid>
      </VendorHeader>
    </div>
  );
}

export default Chats;
