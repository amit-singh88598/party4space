import { Grid, Typography } from "@material-ui/core";
import React from "react";
import PersonalDetails from "../../Components/Vendor/personalDetails";
import ProfileCard from "../../Components/Vendor/profileCard";
import VendorHeader from "../../Layouts/vendorHeader";

function Profile(props) {
  return (
    <div>
      <VendorHeader>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <ProfileCard />
          </Grid>
          <Grid item xs={12} sm={8}>
            <PersonalDetails />
          </Grid>
        </Grid>
      </VendorHeader>
    </div>
  );
}

export default Profile;
