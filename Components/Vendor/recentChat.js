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

function RecentChat(props) {
  const classes = useStyle();
  return (
    <div>
      <Card elevation={4}>
        <div>
          <Typography
            style={{
              marginTop: 50,
              marginBottom: 10,
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
                <div className={classes.mobbreakpoint} key={index}>
                  <Grid container spacing={1}>
                    <Grid item xs={2} sm={2}>
                      <Avatar
                        alt="Remy Sharp"
                        src="/avatar.png"
                        className={classes.image}
                      />
                    </Grid>
                    <Grid item xs={6} sm={6} container>
                      <div style={{ marginLeft: 25 }}>
                        <Typography
                          style={{ fontSize: "1.4em", fontWeight: 600 }}
                          gutterBottom
                        >
                          Akash Kumar
                        </Typography>

                        <div style={{ width: 200, whiteSpace: "nowrap" }}>
                          <Box
                            component="div"
                            my={2}
                            textOverflow="ellipsis"
                            overflow="hidden"
                          >
                            <Typography variant="subtitle1">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Maxime mollitia, molestiae quas vel sint
                              commodi repudiandae consequuntur voluptatum
                              laborum numquam blanditiis harum quisquam eius sed
                              odit fugiat iusto fuga praesentium optio, eaque
                              rerum! Provident similique accusantium nemo autem.
                            </Typography>
                          </Box>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                  <Divider />
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Card>
    </div>
  );
}

export default RecentChat;
