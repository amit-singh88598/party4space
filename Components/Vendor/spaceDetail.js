import { Button, Card, Grid, makeStyles, Typography } from "@material-ui/core";
import {
  AllInbox,
  KingBed,
  LocalParking,
  Pool,
  Tv,
  Weekend,
  Wifi,
} from "@material-ui/icons";
import React from "react";
import Map from "./map";

const useStyles = makeStyles((theme) => ({
  addressStyle: {
    marginTop: 10,
    color: theme.palette.secondary.grey,
  },
  cardStyle: {
    marginTop: 20,
    marginLeft: 100,
    padding: 20,
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
}));

function SpaceDetail(props) {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.cardStyle} elevation={4}>
        <Typography
          style={{ fontSize: "2.4em", fontWeight: 600, marginTop: 10 }}
        >
          Hyatt Regency Delhi
        </Typography>
        <Typography
          style={{ fontSize: "1.4em" }}
          className={classes.addressStyle}
        >
          Na, Charbagh, Lucknow, Sadar, Lucknow, Uttar Pradesh, India, Lucknow
        </Typography>
        <Typography
          style={{ fontSize: "1.2em" }}
          className={classes.addressStyle}
        >
          Room size: 140 sqft
        </Typography>
        <Typography
          style={{ fontSize: "1.2em" }}
          className={classes.addressStyle}
        >
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </Typography>
        <Typography
          style={{ fontSize: "2.4em", fontWeight: 600, marginTop: 20 }}
        >
          Amenities
        </Typography>

        <Grid container spacing={1}>
          <Grid item xs={12} sm={8}>
            <Card elevation={0} style={{ marginTop: 20 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                  <div style={{ display: "flex" }}>
                    <Wifi />
                    <Typography style={{ marginLeft: 10 }}>WIFI</Typography>
                  </div>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <div style={{ display: "flex" }}>
                    <KingBed />
                    <Typography style={{ marginLeft: 10 }}>
                      King Sized Bed
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <div style={{ display: "flex" }}>
                    <AllInbox />
                    <Typography style={{ marginLeft: 10 }}>AC</Typography>
                  </div>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <div style={{ display: "flex" }}>
                    <Tv />
                    <Typography style={{ marginLeft: 10 }}>TV</Typography>
                  </div>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <div style={{ display: "flex" }}>
                    <Weekend />
                    <Typography style={{ marginLeft: 10 }}>
                      Seating Area
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <div style={{ display: "flex" }}>
                    <Pool />
                    <Typography style={{ marginLeft: 10 }}>
                      Swimming pool
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <div style={{ display: "flex" }}>
                    <LocalParking />
                    <Typography style={{ marginLeft: 10 }}>Parking</Typography>
                  </div>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
        <Map />
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
        >
          <Button
            style={{ width: 150, fontSize: "1.2em", borderRadius: 10 }}
            variant="contained"
            color="primary"
          >
            Edit
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default SpaceDetail;
