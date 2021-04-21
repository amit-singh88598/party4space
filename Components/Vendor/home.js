import { Card, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyle = makeStyles((theme) => ({
  cardStyle: {},
}));

function Home(props) {
  const classes = useStyle();
  return (
    <div>
      <div>
        <Typography style={{ fontSize: "2.2em", fontWeight: 500, padding: 20 }}>
          Your Space
        </Typography>
      </div>
    </div>
  );
}

export default Home;
