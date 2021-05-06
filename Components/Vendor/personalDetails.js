import {
  Card,
  CardActions,
  CardContent,
  Divider,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 50,
  },
  heading: {
    fontSize: "2.0em",
    color: theme.palette.secondary.light,
  },
  details: {
    color: theme.palette.primary.grey,
  },
  expand: {
    // backgroundColor: theme.palette.secondary.light,
    color: "#000000",
    marginLeft: "auto",
    // borderRadius: 50,
    // width: 110,
  },
  cardStyle: {
    backgroundColor: "#e30b0b",
    color: "#ffffff",
    padding: 2,
    width: 110,
    borderRadius: 50,
    display: "flex",
    justifyContent: "center",
  },
}));

function PersonalDetails(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={classes.root}>
      <Card
        style={{
          borderRadius: 30,
          borderStyle: "inset ",
          borderBottom: 0,
          borderWidth: 5,
          borderRight: 0,
          paddingBottom: 10,
        }}
        elevation={2}
      >
        <CardContent>
          <Typography className={classes.heading} variant="h1">
            Personal Details
            {/* Heading */}
          </Typography>
          {/* Here we are using Divider for deviding two sections */}
        </CardContent>
        <Divider />
        {/* {props.data.map((item, index) => ( */}
        {/* Here we are calling data from array through map function. */}
        <CardActions disableSpacing>
          <Typography className={classes.details} variant="subtitle1">
            {/* {capitalize(item.day)} */}
            U-ID
          </Typography>
          <div
            className={classes.expand}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            variant="subtitle1"
          >
            <Typography
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              AHB4U8V
            </Typography>
          </div>
        </CardActions>
        <CardActions disableSpacing>
          <Typography className={classes.details} variant="subtitle1">
            {/* {capitalize(item.day)} */}
            Father Name
          </Typography>
          <div
            className={classes.expand}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            variant="subtitle1"
          >
            <Typography
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              Pata Nahi
            </Typography>
          </div>
        </CardActions>
        <CardActions disableSpacing>
          <Typography className={classes.details} variant="subtitle1">
            {/* {capitalize(item.day)} */}
            Status
          </Typography>
          <div
            className={classes.expand}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            variant="subtitle1"
          >
            <Typography
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              Active
            </Typography>
          </div>
        </CardActions>
        {/* <CardActions disableSpacing>
          <Typography className={classes.details} variant="subtitle1">
            {capitalize(item.day)}
            U-ID
          </Typography>
          <div
            className={classes.expand}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            variant="subtitle1"
          >
            <Typography
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              AHB4U8V
            </Typography>
          </div>
        </CardActions> */}
        {/* ))} */}
      </Card>
    </div>
  );
}

export default PersonalDetails;
