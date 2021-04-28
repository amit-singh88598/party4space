import {
  Grid,
  makeStyles,
  Typography,
  Card,
  Divider,
  Avatar,
  Box,
} from "@material-ui/core";
import React from "react";

const useStyle = makeStyles((theme) => ({
  heading: {
    fontSize: "2.2em",
    fontWeight: 600,
    paddingLeft: 20,
  },
  cardStyle: {
    padding: 10,
    position: "webkitsticky",
    position: "sticky",
    borderRadius: 10,
  },
  imagedesktop: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  image: {
    width: 70,
    height: 80,
  },
  breakpoints: {
    marginTop: 10,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  mobbreakpoint: {
    marginTop: 10,
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },

  // scroll style

  scroll: {
    overflowY: "scroll",
    height: 550,
  },
}));

const ChatDetail = [
  {
    img1: "/hotel1.jpg",
    name: "Akash Kumar",
    message:
      "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur ",
  },
  {
    img1: "/hotel2.jpg",
    name: "Manish bhai",
    message:
      "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet ",
  },
  {
    img1: "/hotel6.jpg",
    name: "Amit Bhai",
    message:
      "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amett consectetur",
  },
];

function ChatSection(props) {
  const classes = useStyle();
  return (
    <div>
      <div style={{ marginTop: 50 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: 20,
          }}
        >
          <Typography className={classes.heading}>Amit Singh</Typography>
        </div>
        <Divider />
        <div className={classes.scroll} id="scroller">
          <Card style={{ padding: 20 }}>
            <div style={{ display: "flex" }}>
              <Avatar
                alt="Remy Sharp"
                src="/avatar.png"
                className={classes.imagedesktop}
              />
              <Card
                style={{
                  width: 500,
                  borderBottomRightRadius: 30,
                  borderBottomLeftRadius: 30,
                  borderTopRightRadius: 30,
                  marginLeft: 10,
                }}
                elevation={4}
              >
                <Typography style={{ padding: 10 }}>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </Typography>
              </Card>
            </div>
            <div style={{ display: "flex", float: "right", marginTop: 20 }}>
              <Card
                style={{
                  width: 500,
                  borderBottomRightRadius: 30,
                  borderBottomLeftRadius: 30,
                  borderTopLeftRadius: 30,
                  marginLeft: 20,
                  backgroundColor: "#a9a9a9",
                  marginRight: 10,
                }}
                elevation={4}
              >
                <Typography style={{ padding: 10 }}>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </Typography>
              </Card>
              <Avatar
                alt="Remy Sharp"
                src="/avatar.png"
                className={classes.imagedesktop}
              />
            </div>
            <div style={{ display: "flex", marginTop: 130 }}>
              <Avatar
                alt="Remy Sharp"
                src="/avatar.png"
                className={classes.imagedesktop}
              />
              <Card
                style={{
                  width: 500,
                  borderBottomRightRadius: 30,
                  borderBottomLeftRadius: 30,
                  borderTopRightRadius: 30,
                  marginLeft: 10,
                }}
                elevation={4}
              >
                <Typography style={{ padding: 10 }}>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here.
                </Typography>
              </Card>
            </div>
            <div style={{ display: "flex", float: "right", marginTop: 20 }}>
              <Card
                style={{
                  width: 500,
                  borderBottomRightRadius: 30,
                  borderBottomLeftRadius: 30,
                  borderTopLeftRadius: 30,
                  marginLeft: 20,
                  backgroundColor: "#a9a9a9",
                  marginRight: 10,
                }}
                elevation={4}
              >
                <Typography style={{ padding: 10 }}>
                  It is a long established fact that a reader will be distracted
                  by its layout.
                </Typography>
              </Card>
              <Avatar
                alt="Remy Sharp"
                src="/avatar.png"
                className={classes.imagedesktop}
              />
            </div>
            <div style={{ display: "flex", marginTop: 130 }}>
              <Avatar
                alt="Remy Sharp"
                src="/avatar.png"
                className={classes.imagedesktop}
              />
              <Card
                style={{
                  width: 500,
                  borderBottomRightRadius: 30,
                  borderBottomLeftRadius: 30,
                  borderTopRightRadius: 30,
                  marginLeft: 10,
                }}
                elevation={4}
              >
                <Typography style={{ padding: 10 }}>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here.
                </Typography>
              </Card>
            </div>
            <div style={{ display: "flex", float: "right", marginTop: 20 }}>
              <Card
                style={{
                  width: 500,
                  borderBottomRightRadius: 30,
                  borderBottomLeftRadius: 30,
                  borderTopLeftRadius: 30,
                  marginLeft: 20,
                  backgroundColor: "#a9a9a9",
                  marginRight: 10,
                }}
                elevation={4}
              >
                <Typography style={{ padding: 10 }}>
                  It is a long established fact that a reader will be distracted
                  by its layout.
                </Typography>
              </Card>
              <Avatar
                alt="Remy Sharp"
                src="/avatar.png"
                className={classes.imagedesktop}
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default ChatSection;
