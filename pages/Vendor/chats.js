import { Grid } from "@material-ui/core";
import React from "react";
import ChatSection from "../../Components/Vendor/chatSection";
import RecentChat from "../../Components/Vendor/recentChat";

function Chats(props) {
  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={4}>
          <RecentChat />
        </Grid>
        <Grid item xs={12} sm={8}>
          <ChatSection />
        </Grid>
      </Grid>
    </div>
  );
}

export default Chats;
