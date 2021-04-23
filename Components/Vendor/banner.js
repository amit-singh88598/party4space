import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Card, Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgrounColor: theme.palette.primary.main,
  },
  mainCard: {
    padding: 10,
    margin: 10,
    borderRadius: 20,
  },
  img: {
    width: "100%",
    height: "40vh",
    objectFit: "cover",
  },
}));

const Space = [
  {
    img1: "/hotel1.jpg",
    name: "Hyatt Regency Delhi",
    address: " BHIKAIJI CAMA PLACE RING ROAD, Delhi 110066",
  },
  {
    img1: "/hotel2.jpg",
    name: "Hyatt Regency Gurugram",
    address: " BHIKAIJI CAMA PLACE RING ROAD, Gurugram 248774",
  },
  {
    img1: "/hotel7.jpg",
    name: "Hyatt Regency Delhi",
    address: " BHIKAIJI CAMA PLACE RING ROAD, Chandigarh 248001",
  },
];

export default function Banner() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {Space.map((item, index) => (
        <Card key={index} elevation={4} className={classes.mainCard}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={10}>
              <img src={item.img1} className={classes.img} alt="" />
            </Grid>
            <Grid item xs={12} sm={2}>
              <Typography
                style={{ fontSize: "1.4em", fontWeight: 600, marginTop: 10 }}
              >
                {item.name}
              </Typography>
              <Typography style={{ fontSize: "1em", marginTop: 20 }}>
                {item.address}
              </Typography>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: 40,
                }}
              >
                <Button
                  variant="outlined"
                  color="primary"
                  href="#outlined-buttons"
                  style={{ borderRadius: 50 }}
                >
                  Know More
                </Button>
              </div>
            </Grid>
          </Grid>
        </Card>
      ))}
    </div>
  );
}
