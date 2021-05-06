import {
  Card,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Facebook, LinkedIn, Twitter } from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    // position: "fixed",
    // left: 0,
    // bottom: 0,
    // width: "100%",
  },
  cardStyle: {
    backgroundColor: "#000000",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    color: "#ffffff",
  },
  justifyCenter: {
    display: "flex",
    justifyContent: "center",
  },
  iconStyle: {
    marginLeft: 10,
    marginRight: 10,
    color: "#ffffff",
  },
}));

function Footer(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Card className={classes.cardStyle}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <div className={classes.justifyCenter}>
              <IconButton>
                <Facebook className={classes.iconStyle} />
              </IconButton>
              <IconButton>
                <LinkedIn className={classes.iconStyle} />
              </IconButton>
              <IconButton>
                <Twitter className={classes.iconStyle} />
              </IconButton>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              style={{
                color: "#ffffff",
                marginTop: 10,
              }}
              className={classes.justifyCenter}
            >
              Copyright © 2021. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}

export default Footer;
