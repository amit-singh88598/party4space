import {
  Button,
  Card,
  CardActions,
  CardContent,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { CheckCircle } from "@material-ui/icons";
import React from "react";
import ImageOverlay from "./imageOverlay";

const useStyles = makeStyles((theme) => ({
  detail: {
    color: theme.palette.secondary.light,
  },
  editProfile: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  profileCard: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
}));

function ProfileCard(props) {
  const classes = useStyles();
  return (
    <div>
      <Card
        style={{
          marginTop: 50,
          borderRadius: 30,
          paddingBottom: 30,
          borderStyle: "inset ",
          borderBottom: 0,
          borderWidth: 5,
          borderRight: 0,
          height: 450,
        }}
        elevation={2}
      >
        <div className={classes.profileCard}>
          <ImageOverlay
            // url={props.data.partnerDetails.image}
            onClick={props.onClick}
          />
        </div>
        <CardContent>
          <Typography
            className={classes.detail}
            style={{ marginTop: 20, textAlign: "center" }}
            gutterBottom
          >
            Akash Kumar
            {/* {capitalize(`${props.data.firstName} ${props.data.lastName}`)}
              {props.data.partnerDetails.isApproved != null ? (
                <CheckCircle />
              ) : (
                ""
              )} */}
          </Typography>
          <Typography
            variant="subtitle1"
            color="textSecondary"
            variant="subtitle1"
            style={{ textAlign: "center" }}
          >
            7300689054
            {/* {capitalize(
                `${props.data.mobile} / ${props.data.partnerDetails.alternateMobile}`
              )} */}
          </Typography>

          <Typography
            variant="subtitle1"
            color="textSecondary"
            variant="subtitle1"
            style={{ textAlign: "center" }}
          >
            akash@gmail.com
          </Typography>
        </CardContent>

        <CardActions className={classes.editProfile}>
          {/* {props.isEdit == false ? (
              ""
            ) : ( */}
          <div>
            <Button variant="outlined" color="primary" size="small">
              Edit Profile
            </Button>
          </div>
          {/* )} */}
        </CardActions>
      </Card>
    </div>
  );
}

export default ProfileCard;
