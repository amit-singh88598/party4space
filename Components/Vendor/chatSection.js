import {
  Grid,
  makeStyles,
  Typography,
  Card,
  Divider,
  Avatar,
  Box,
  TextField,
  Button,
} from "@material-ui/core";
import React from "react";

const useStyle = makeStyles((theme) => ({
  heading: {
    fontSize: "2em",
    fontWeight: 600,
    paddingLeft: 20,
  },
  mobHeading: {
    fontSize: "1.8em",
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
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  imageMob: {
    width: theme.spacing(6),
    height: theme.spacing(6),
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

  // breakpoints

  desktopBreakpoint: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  mobBreakpoint: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

function ChatSection(props) {
  const classes = useStyle();
  return (
    <div>
      {/* Desktop Style Starts here */}

      <div className={classes.desktopBreakpoint}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: 10,
            marginTop: 50,
          }}
        >
          <Typography className={classes.heading}>Amit Singh</Typography>
        </div>
        <Divider />
        <div className={classes.scroll} id="scroller">
          <Card style={{ padding: 20 }} elevation={0}>
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
                  by the readable content of a page.
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
                  It is a long established fact that a reader will be
                  distracted.
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
                  as opposed to using 'Content here.
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
        <div style={{ marginTop: 20, display: "flex" }}>
          <TextField
            style={{ width: "90%", borderRadius: 50 }}
            id="outlined-required"
            fullWidth
            placeholder="Type a message"
            variant="outlined"
          />
          <Button
            style={{ marginLeft: 10 }}
            variant="contained"
            size="small"
            color="primary"
          >
            Send
          </Button>
        </div>
      </div>

      {/* Desktop Style Ends here */}

      {/* Mobile Style Starts here */}

      <div className={classes.mobBreakpoint}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography className={classes.mobHeading}>Akash Kumar</Typography>
        </div>
        <Divider />
        <div className={classes.scroll} id="scroller">
          <Card style={{ padding: 5, marginTop: 15 }} elevation={0}>
            <div style={{ display: "flex" }}>
              <Avatar
                alt="Remy Sharp"
                src="/avatar.png"
                className={classes.imageMob}
              />
              <Card
                style={{
                  width: 200,
                  borderBottomRightRadius: 30,
                  borderBottomLeftRadius: 30,
                  borderTopRightRadius: 30,
                  marginLeft: 10,
                }}
                elevation={4}
              >
                <Typography style={{ padding: 10 }}>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page.
                </Typography>
              </Card>
            </div>

            <div style={{ display: "flex", float: "right", marginTop: 20 }}>
              <Card
                style={{
                  width: 200,
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
                className={classes.imageMob}
              />
            </div>

            <div style={{ display: "flex", float: "right", marginTop: 20 }}>
              <Card
                style={{
                  width: 200,
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
                className={classes.imageMob}
              />
            </div>
          </Card>
        </div>
        <div
          style={{
            marginTop: 20,
            display: "flex",
            position: "fixed",
            bottom: 0,
            left: 0,
            width: "100%",
          }}
        >
          <TextField
            style={{ width: "90%", borderRadius: 50 }}
            id="outlined-required"
            fullWidth
            placeholder="Type a message"
            variant="outlined"
          />
          <Button
            style={{ marginLeft: 10 }}
            variant="contained"
            size="small"
            color="primary"
          >
            Send
          </Button>
        </div>
      </div>

      {/* Mobile Style Ends here */}
    </div>
  );
}

export default ChatSection;
