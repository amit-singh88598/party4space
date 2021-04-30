import {
  Button,
  Card,
  Chip,
  Grid,
  IconButton,
  Link,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import { Chat } from "@material-ui/icons";
import { Rating } from "@material-ui/lab";
import { useRouter } from "next/router";
import React from "react";

const useStyles = makeStyles((theme) => ({
  cardStyle: {
    padding: 10,
    marginTop: 50,
    position: "webkitsticky",
    position: "sticky",
    borderRadius: 10,
  },
  root: {
    marginTop: 25,
  },
  imagedesktop: {
    width: 125,
    height: 135,
  },
  imgdesktop: {
    width: 125,
    height: 130,
  },
  image: {
    width: 70,
    height: 80,
  },
  img: {
    width: 70,
    height: 80,
  },
  heading: {
    color: theme.palette.secondary.light,
  },
  breakpoints: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  scroll: {
    overflowY: "scroll",
    height: 550,
  },
  mobbreakpoint: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  content: {
    flex: "1 0 auto",
  },
  detail: {
    color: theme.palette.secondary.light,
  },
  sideRoot: {
    width: 300,
    marginLeft: 20,
  },
  filter: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  cityDropdownStyle: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "100%",
    flexWrap: "wrap",
    marginBottom: 50,
    borderRadius: 50,
    padding: 10,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },

  btnMobileFilter: {
    color: "#000000",
    float: "right",
    zIndex: 1000,
    borderRadius: 50,
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  filterButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
}));

function UpcomingBookingDetail(props) {
  const classes = useStyles();
  const router = useRouter();
  return (
    <div>
      <Card elevation={4} className={classes.cardStyle}>
        <div>
          <div className={classes.breakpoints}>
            <Grid container spacing={2}>
              <Grid item>
                <Button className={classes.imagedesktop}>
                  <img
                    className={classes.imgdesktop}
                    alt="complex"
                    src="/avatar.png"
                  />
                </Button>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography
                      className={classes.heading}
                      gutterBottom
                      variant="h6"
                    >
                      Akash Kumar
                    </Typography>
                    <Typography gutterBottom variant="subtitle1">
                      7300689054 / 8859805500
                    </Typography>
                    <Typography gutterBottom variant="subtitle1">
                      amitsingh992728@gmail.com
                    </Typography>
                    {/* <Chip
                        variant="outlined"
                        color="primary"
                        style={{ cursor: "pointer", marginTop: 30 }}
                        size="small"
                        label={"njkdsnjfsndfkjd"}
                      /> */}
                  </Grid>
                </Grid>

                <Grid item>
                  <Button
                    // style={{ borderRadius: 20 }}
                    variant="contained"
                    color="primary"
                    onClick={() => router.push("/Vendor/bookingDetails")}
                  >
                    Details
                  </Button>
                  <Grid style={{ marginTop: 70 }}>
                    {/* <IconButton>
                      <Chat />
                    </IconButton> */}
                    {/* <Rating
                      name="read-only"
                      value={"dsjnsdnm dnm"}
                      size="small"
                      readOnly
                    /> */}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
          <div className={classes.mobbreakpoint}>
            <Grid container spacing={1}>
              <Grid item xs={2} sm={2}>
                <Button className={classes.image}>
                  <img
                    className={classes.img}
                    alt="complex"
                    src="/avatar.png"
                  />
                </Button>
              </Grid>
              <Grid item xs={6} sm={6} container>
                <div style={{ marginLeft: 25 }}>
                  <Typography
                    className={classes.heading}
                    gutterBottom
                    variant="subtitle1"
                  >
                    Akash Kumar
                  </Typography>
                  <Typography gutterBottom variant="subtitle1">
                    7300689054 / 8859805500
                  </Typography>
                  <Typography gutterBottom variant="subtitle1">
                    amitsingh992728@gmail.com
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={1} sm={1}>
                <Button
                  style={{ marginLeft: 10 }}
                  variant="contained"
                  color="primary"
                  size="small"
                  onClick={() => router.push("/Vendor/bookingDetails")}
                >
                  Details
                </Button>
              </Grid>
            </Grid>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default UpcomingBookingDetail;
