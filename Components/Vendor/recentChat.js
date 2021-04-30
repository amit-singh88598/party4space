import React from "react";
import {
  Grid,
  makeStyles,
  Typography,
  Card,
  Divider,
  Avatar,
  Box,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import { MoreVert } from "@material-ui/icons";
import ChatSection from "./chatSection";

const useStyle = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
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
    width: theme.spacing(8),
    height: theme.spacing(8),
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

  ///

  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function RecentChat(props) {
  const classes = useStyle();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Card elevation={0} className={classes.root}>
        <div>
          <Typography
            style={{
              marginTop: 50,
              marginBottom: 6,
            }}
            className={classes.heading}
          >
            Recent Chats
          </Typography>
          <Divider />
          <Card elevation={0} className={classes.cardStyle}>
            <div>
              {ChatDetail.map((item, index) => (
                <div className={classes.breakpoints} key={index}>
                  <Grid container spacing={2}>
                    <Grid item>
                      <Avatar
                        alt="Remy Sharp"
                        src={item.img1}
                        className={classes.imagedesktop}
                      />
                    </Grid>
                    <Grid item xs={12} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                          <Typography
                            style={{ fontSize: "1.4em", fontWeight: 600 }}
                            gutterBottom
                            variant="h6"
                          >
                            {item.name}
                          </Typography>

                          <div style={{ width: 300, whiteSpace: "nowrap" }}>
                            <Box
                              component="div"
                              my={2}
                              textOverflow="ellipsis"
                              overflow="hidden"
                            >
                              <Typography variant="subtitle1">
                                {item.message}
                              </Typography>
                            </Box>
                          </div>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Divider />
                </div>
              ))}
              {ChatDetail.map((item, index) => (
                <div
                  className={classes.mobbreakpoint}
                  key={index}
                  onClick={handleClickOpen}
                >
                  <Grid container spacing={1}>
                    <Grid item xs={2} sm={2}>
                      <Avatar
                        alt="Remy Sharp"
                        src={item.img1}
                        className={classes.image}
                      />
                    </Grid>
                    <Grid item xs={6} sm={6} container>
                      <div style={{ marginLeft: 25 }}>
                        <Typography
                          style={{ fontSize: "1.4em", fontWeight: 600 }}
                          gutterBottom
                        >
                          {item.name}
                        </Typography>

                        <div style={{ width: 200, whiteSpace: "nowrap" }}>
                          <Box
                            component="div"
                            my={2}
                            textOverflow="ellipsis"
                            overflow="hidden"
                          >
                            <Typography variant="subtitle1">
                              {item.message}
                            </Typography>
                          </Box>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                  <Divider />
                </div>
              ))}
              <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
              >
                <AppBar className={classes.appBar} position="fixed">
                  <Toolbar>
                    <IconButton
                      edge="start"
                      color="inherit"
                      onClick={handleClose}
                      aria-label="close"
                    >
                      <CloseIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                      Akash Kumar
                    </Typography>
                    <IconButton edge="start" color="inherit" aria-label="close">
                      <MoreVert />
                    </IconButton>
                  </Toolbar>
                </AppBar>
                <List>
                  <ChatSection />
                </List>
              </Dialog>
            </div>
          </Card>
        </div>
      </Card>
    </div>
  );
}

export default RecentChat;
