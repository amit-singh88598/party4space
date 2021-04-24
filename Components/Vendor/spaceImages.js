import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Container, Grid, Typography } from "@material-ui/core";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const useStyles = makeStyles((theme) => ({
  root: {
    backgrounColor: theme.palette.primary.main,
  },
  mainCard: {
    padding: 10,
    marginLeft: 70,
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
  img: {
    width: "100%",
    height: "80vh",
    objectFit: "cover",
  },
}));

export default function SpaceImages() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card elevation={0} className={classes.mainCard}>
        <AliceCarousel
          disableButtonsControls={true}
          infinite={true}
          autoPlay={true}
          autoPlayInterval="2000"
        >
          <img src="/hotel1.jpg" className={classes.img} alt="" />
          <img src="/hotel2.jpg" className={classes.img} alt="" />
          <img src="/hotel3.jpg" className={classes.img} alt="" />
          <img src="/hotel4.jpg" className={classes.img} alt="" />
        </AliceCarousel>
      </Card>
    </div>
  );
}
