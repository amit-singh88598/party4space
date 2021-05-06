import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import SpaceImages from "./spaceImages";

const useStyles = makeStyles((theme) => ({
  root: {
    backgrounColor: theme.palette.primary.main,
  },
  heading: {
    fontSize: "2.8em",
    fontWeight: 600,
    paddingLeft: 20,
    marginTop: 10,
    marginLeft: 80,
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

function HomeHeroes(props) {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.heading}>Your Space</Typography>
      <SpaceImages />
    </div>
  );
}

export default HomeHeroes;
