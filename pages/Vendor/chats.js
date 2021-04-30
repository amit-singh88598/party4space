import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Classnames } from "react-alice-carousel";
import ChatSection from "../../Components/Vendor/chatSection";
import RecentChat from "../../Components/Vendor/recentChat";
import VendorHeader from "../../Layouts/vendorHeader";
const useStyles = makeStyles((theme) => ({
  desktopBreakpoint: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  mobBreakpoint: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

function Chats(props) {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.desktopBreakpoint}>
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
      <div className={classes.mobBreakpoint}>
        <VendorHeader>
          <RecentChat />
        </VendorHeader>
      </div>
    </div>
  );
}

export default Chats;
