import { Avatar, Card, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import {
  AllInbox,
  KingBed,
  LocalParking,
  Pool,
  Tv,
  Weekend,
  Wifi,
} from "@material-ui/icons";
import Map from "./map";
import CustomerDetails from "./customerDetails";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 50,
  },

  img: {
    width: "100%",
    height: "40vh",
    objectFit: "cover",
  },
  addressStyle: {
    marginTop: 10,
    color: theme.palette.secondary.grey,
  },
}));

function BookingRecord(props) {
  const classes = useStyles();
  return (
    <div className={classes.root} elevation={4}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Card style={{ borderRadius: 20 }} elevation={4}>
            <img src="/hotel1.jpg" className={classes.img} alt="" />
            <div style={{ padding: 20 }}>
              <Typography
                style={{ fontSize: "2.4em", fontWeight: 600, marginTop: 10 }}
              >
                Hyatt Regency Delhi
              </Typography>
              <Typography
                style={{ fontSize: "1.4em" }}
                className={classes.addressStyle}
              >
                Na, Charbagh, Lucknow, Sadar, Lucknow, Uttar Pradesh, India,
                Lucknow
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
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </Typography>
              <Typography
                style={{ fontSize: "2.4em", fontWeight: 600, marginTop: 30 }}
              >
                Amenities
              </Typography>

              <Grid container spacing={1}>
                <Grid item xs={12} sm={12}>
                  <Card elevation={0} style={{ marginTop: 20 }}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={4}>
                        <div style={{ display: "flex" }}>
                          <Wifi />
                          <Typography style={{ marginLeft: 10 }}>
                            WIFI
                          </Typography>
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
                          <Typography style={{ marginLeft: 10 }}>
                            Parking
                          </Typography>
                        </div>
                      </Grid>
                    </Grid>
                  </Card>
                </Grid>
              </Grid>
              <Typography
                style={{ fontSize: "2.4em", fontWeight: 600, marginTop: 30 }}
              >
                Date
              </Typography>
              <Typography style={{ fontSize: "1.2em", marginTop: 10 }}>
                21/04/2021 - 25/04/2021
              </Typography>
              <Typography
                style={{ fontSize: "2.4em", fontWeight: 600, marginTop: 30 }}
              >
                Time
              </Typography>
              <Typography style={{ fontSize: "1.2em", marginTop: 10 }}>
                12:20 PM - 7:30 PM
              </Typography>
              <Map />
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomerDetails />
        </Grid>
      </Grid>
    </div>
  );
}

export default BookingRecord;
