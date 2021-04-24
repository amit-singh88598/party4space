import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Card, Grid, Typography } from "@material-ui/core";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  root: {
    backgrounColor: theme.palette.primary.main,
  },
  heading: {
    fontSize: "2.2em",
    fontWeight: 500,
    paddingLeft: 20,
    marginTop: 50,
  },
  mainCard: {
    padding: 10,
    margin: 5,
    borderRadius: 20,
  },
  img: {
    width: "100%",
    height: "40vh",
    objectFit: "cover",
  },
  btnStyle: {
    display: "flex",
    justifyContent: "center",
    marginTop: 40,
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
    img1: "/hotel6.jpg",
    name: "Hyatt Regency Delhi",
    address: " BHIKAIJI CAMA PLACE RING ROAD, Chandigarh 248001",
  },
];

export default function YourSpaceDetail() {
  const classes = useStyles();
  const router = useRouter();

  return (
    <div className={classes.root}>
      <Typography className={classes.heading}>Your Space</Typography>
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
              <div className={classes.btnStyle}>
                <Button
                  variant="outlined"
                  color="primary"
                  href="#outlined-buttons"
                  style={{ borderRadius: 50 }}
                  onClick={() => router.push("/Vendor/spaceDetails")}
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
