import {
  Avatar,
  Card,
  Divider,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    marginTop: 40,
  },
  justifyCenter: {
    display: "flex",
    justifyContent: "center",
    marginTop: 10,
  },
}));

function CustomerDetails(props) {
  const classes = useStyles();
  return (
    <div>
      <Card style={{ borderRadius: 20 }} elevation={4}>
        <Typography
          className={classes.justifyCenter}
          style={{
            fontSize: "2.4em",
            fontWeight: 600,
            marginTop: 20,
          }}
        >
          Customer Details
        </Typography>
        <div className={classes.justifyCenter}>
          <Avatar
            alt="Remy Sharp"
            src="/avatar.png"
            className={classes.large}
          />
        </div>

        <Typography className={classes.justifyCenter} style={{ marginTop: 20 }}>
          Akash Kumar
        </Typography>
        <Typography className={classes.justifyCenter}>
          7300689054 / 8859805500
        </Typography>
        <Typography className={classes.justifyCenter}>
          akashkumar@gmail.com
        </Typography>
        <div style={{ padding: 20 }}>
          <Typography
            style={{ fontSize: "2.4em", fontWeight: 600, marginTop: 30 }}
          >
            Permanent Address
          </Typography>
          <Divider />
          <Typography style={{ marginTop: 20 }}>
            House no. 658 Tapovan Enclave, Near Survey Chauk, Dehradun
            (Uttarakhand) - 248001
          </Typography>
        </div>
      </Card>
    </div>
  );
}

export default CustomerDetails;
