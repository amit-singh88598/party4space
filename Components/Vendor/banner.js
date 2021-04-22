import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Container, Grid, Typography } from "@material-ui/core";
// import InquiryForm from "./inquiryForm";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const useStyles = makeStyles((theme) => ({
  root: {
    backgrounColor: theme.palette.primary.main,
  },
  mainCard: {
    padding: 40,
    marginLeft: 70,
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
  img: {
    width: "100%",
    height: 350,
    objectFit: "cover",
  },
}));

export default function Banner() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card elevation={4} className={classes.mainCard}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={10}>
            <AliceCarousel
              disableButtonsControls={true}
              infinite={true}
              autoPlay={true}
              autoPlayInterval="2000"
              autoWidth={true}
            >
              <img src="/people.png" className={classes.img} alt="" />
              <img src="/people.png" className={classes.img} alt="" />
              <img src="/people.png" className={classes.img} alt="" />
              <img src="/people.png" className={classes.img} alt="" />
            </AliceCarousel>
          </Grid>
          <Grid item xs={12} sm={2}></Grid>
        </Grid>
      </Card>
    </div>
  );
}
