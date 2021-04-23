import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  makeStyles,
  Snackbar,
  TextField,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";
import { regxPrimaryNumber, regxPassword } from "../../regular-Expression";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useRouter } from "next/router";
// import { useAuth } from "../auth";
import { Alert } from "@material-ui/lab";
import Cookies from "js-cookie";
import Header from "../../Layouts/header";
// import { getProfile } from "../actions/vendor";

const useStyles = makeStyles((theme) => ({
  mobBreakpoint: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  card: {
    borderStyle: "outset ",
    borderWidth: 10,
    borderBlockStartColor: "black",
    borderLeftColor: "black",
    width: "100%",
    height: 440,
    borderTop: 0,
    borderLeft: 0,
    borderRadius: 30,
    padding: 15,
    marginTop: 60,
    [theme.breakpoints.up("md")]: {
      width: 420,
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
    },
  },
  btnStyle: {
    fontSize: "1.2em",
  },
  textStyle: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    // padding: 20,
  },
  logo: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  contentCenter: {
    display: "flex",
    justifyContent: "center",
  },
}));

function LogIn(props) {
  const classes = useStyles();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  //   const { setAdminData, setVendorData, setTokenData, setLoading } = useAuth();
  const [primaryNumber, setPrimaryNumber] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(null);

  const [error, setError] = useState({
    primaryNumberErr: false,
    passwordErr: false,
  });

  const [isPassVisible, setIsPassVisible] = useState(false);
  const handleChange = async () => {
    if (!(primaryNumber != "" && regxPrimaryNumber.test(primaryNumber))) {
      setError({ primaryNumberErr: true });
    } else if (!(password != "" && regxPassword.test(password))) {
      setError({ passwordErr: true });
    } else {
      login({
        primaryNumber: primaryNumber,
        password,
      });
    }
  };

  const login = async ({ primaryNumber, password }) => {
    setOpen(true);
    const userRes = await axios.post(`${process.env.BASE_URL}/vendors/login`, {
      primaryNumber: primaryNumber,
      password,
    });
    const { user } = userRes.data.data;
    if (userRes != null) {
      Cookies.setItem("auth", user.token, { expires: 7 });
      setTokenData(user.token);

      getProfile((error, result) => {
        if (result.status) {
          setOpen(false);
          if (user.isAdmin) {
            setAdminData(result.data.user);
            setLoading(false);
            if (router.pathname === "/login" || router.pathname === "/") {
              router.replace("/admin/dashboard");
            }
          } else {
            setVendorData(result.data.user);
            setLoading(false);
            if (router.pathname === "/login" || router.pathname === "/") {
              router.replace("/vendor/dashboard");
            }
          }
        } else {
          setOpen(false);
          setLoginError(error);
        }
      });
    } else {
      setOpen(false);

      setLoginError(userRes.data.message);
    }
  };

  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={6}>
          <div style={{ marginTop: 50, marginLeft: 100 }}>
            <img className={classes.mobBreakpoint} src="/signin.svg" />
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div>
            <div className={classes.root}>
              <Container>
                <div>
                  <Grid item xs={12} sm={12} elevation={4}>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <Card
                        elevation={3}
                        className={classes.card}
                        elevation={2}
                      >
                        <Snackbar
                          open={loginError ? true : false}
                          autoHideDuration={6000}
                          anchorOrigin={{
                            vertical: "top",
                            horizontal: "center",
                          }}
                          onClose={() => setLoginError(null)}
                        >
                          <Alert severity="error">
                            {loginError && loginError}
                          </Alert>
                        </Snackbar>
                        <Typography
                          style={{
                            textAlign: "center",
                            fontSize: "2.2em",
                            display: "flex",
                            fontWeight: 500,
                            justifyContent: "center",
                          }}
                        >
                          Login !
                        </Typography>
                        <Grid container spacing={2} style={{ marginTop: 20 }}>
                          <Grid
                            item
                            xs={12}
                            sm={12}
                            className={classes.contentCenter}
                          >
                            <TextField
                              id="outlined-basic"
                              variant="outlined"
                              label="Phone No."
                              onChange={(event) => {
                                setError({ primaryNumberErr: false });
                                setPrimaryNumber(event.target.value);
                              }}
                              error={error.primaryNumberErr}
                              helperText={
                                error.primaryNumberErr
                                  ? "please enter valid Phone no."
                                  : ""
                              }
                              fullWidth
                              placeholder="Phone No."
                            />
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            sm={12}
                            className={classes.contentCenter}
                          >
                            <TextField
                              id="password"
                              variant="outlined"
                              required
                              label="Password"
                              InputProps={{
                                className: classes.input,
                              }}
                              onChange={(event) => {
                                setError({ passwordErr: false });
                                setPassword(event.target.value);
                              }}
                              error={error.passwordErr}
                              helperText={
                                error.PasswordErr == true
                                  ? "please enter valid Password"
                                  : ""
                              }
                              fullWidth
                              InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <IconButton
                                      aria-label="toggle password visibility"
                                      onClick={() => {
                                        isPassVisible
                                          ? setIsPassVisible(false)
                                          : setIsPassVisible(true);
                                      }}
                                    >
                                      {isPassVisible ? (
                                        <Visibility fontSize="small" />
                                      ) : (
                                        <VisibilityOff fontSize="small" />
                                      )}
                                    </IconButton>
                                  </InputAdornment>
                                ),
                              }}
                              type={isPassVisible ? "text" : "password"}
                              value={password}
                              placeholder="Password"
                            />
                          </Grid>

                          <Grid
                            item
                            xs={12}
                            sm={12}
                            className={classes.contentCenter}
                          >
                            <Button
                              variant="contained"
                              color="primary"
                              className={classes.btnStyle}
                              size="medium"
                              fullWidth
                              onClick={handleChange}
                            >
                              Log in
                            </Button>
                          </Grid>
                          <a
                            onClick={() => router.push("/#")}
                            style={{
                              marginLeft: 10,
                              cursor: "pointer",
                            }}
                          >
                            Forgot your password?
                          </a>
                          <Grid
                            item
                            xs={12}
                            sm={12}
                            className={classes.contentCenter}
                          >
                            <Box
                              display="flex"
                              flexWrap="wrap"
                              alignContent="flex-start"
                              className={classes.textStyle}
                            >
                              <a
                                onClick={() => router.push("/Vendor/signup")}
                                style={{
                                  fontWeight: "bold",
                                  cursor: "pointer",
                                  marginTop: 20,
                                }}
                              >
                                Don't have account? SignUp
                              </a>
                            </Box>
                          </Grid>
                        </Grid>
                      </Card>
                    </div>
                  </Grid>
                </div>
              </Container>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default LogIn;

// import {
//   Box,
//   Button,
//   Card,
//   Container,
//   Grid,
//   IconButton,
//   InputAdornment,
//   makeStyles,
//   Snackbar,
//   TextField,
//   Typography,
// } from "@material-ui/core";
// import axios from "axios";
// import React, { useState } from "react";
// import { regxPrimaryNumber, regxPassword } from "../../regular-Expression";
// import { Visibility, VisibilityOff } from "@material-ui/icons";
// import { useRouter } from "next/router";
// // import { useAuth } from "../auth";
// import { Alert } from "@material-ui/lab";
// import Cookies from "js-cookie";
// import Header from "../../Layouts/header";
// // import { getProfile } from "../actions/vendor";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     marginTop: -65,
//     height: "100vh",
//     backgroundImage: 'url("/people.png")',
//     backgroundPosition: "center",
//     backgroundSize: "cover",
//     backgroundRepeat: "no-repeat",
//     [theme.breakpoints.down("sm")]: {
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       height: "90vh",
//       backgroundImage: 'url("/img.jpg")',
//       backgroundPosition: "center",
//       backgroundSize: "cover",
//       backgroundRepeat: "no-repeat",
//     },
//   },
//   card: {
//     borderStyle: "outset ",
//     borderWidth: 10,
//     borderBlockStartColor: "black",
//     borderLeftColor: "black",
//     width: "100%",
//     height: 440,
//     borderTop: 0,
//     borderLeft: 0,
//     borderRadius: 30,
//     padding: 15,
//     position: "absolute",
//     top: 150,
//     right: 0,
//     [theme.breakpoints.up("md")]: {
//       position: "absolute",
//       top: 150,
//       right: 100,
//       borderStyle: "outset ",
//       borderWidth: 10,
//       borderBlockStartColor: "black",
//       borderLeftColor: "black",
//       width: 420,
//       height: 410,
//       borderTop: 0,
//       borderLeft: 0,
//       borderRadius: 30,
//       padding: 15,
//     },
//   },
//   btnStyle: {
//     fontSize: "1.2em",
//   },
//   textStyle: {
//     display: "flex",
//     justifyContent: "center",
//     textAlign: "center",
//     // padding: 20,
//   },
//   logo: {
//     width: theme.spacing(20),
//     height: theme.spacing(20),
//   },
//   contentCenter: {
//     display: "flex",
//     justifyContent: "center",
//   },
// }));

// function LogIn(props) {
//   const classes = useStyles();
//   const router = useRouter();
//   const [open, setOpen] = useState(false);
//   //   const { setAdminData, setVendorData, setTokenData, setLoading } = useAuth();
//   const [primaryNumber, setPrimaryNumber] = useState("");
//   const [password, setPassword] = useState("");
//   const [loginError, setLoginError] = useState(null);

//   const [error, setError] = useState({
//     primaryNumberErr: false,
//     passwordErr: false,
//   });

//   const [isPassVisible, setIsPassVisible] = useState(false);
//   const handleChange = async () => {
//     if (!(primaryNumber != "" && regxPrimaryNumber.test(primaryNumber))) {
//       setError({ primaryNumberErr: true });
//     } else if (!(password != "" && regxPassword.test(password))) {
//       setError({ passwordErr: true });
//     } else {
//       login({
//         primaryNumber: primaryNumber,
//         password,
//       });
//     }
//   };

//   const login = async ({ primaryNumber, password }) => {
//     setOpen(true);
//     const userRes = await axios.post(`${process.env.BASE_URL}/vendors/login`, {
//       primaryNumber: primaryNumber,
//       password,
//     });
//     const { user } = userRes.data.data;
//     if (userRes != null) {
//       Cookies.setItem("auth", user.token, { expires: 7 });
//       setTokenData(user.token);

//       getProfile((error, result) => {
//         if (result.status) {
//           setOpen(false);
//           if (user.isAdmin) {
//             setAdminData(result.data.user);
//             setLoading(false);
//             if (router.pathname === "/login" || router.pathname === "/") {
//               router.replace("/admin/dashboard");
//             }
//           } else {
//             setVendorData(result.data.user);
//             setLoading(false);
//             if (router.pathname === "/login" || router.pathname === "/") {
//               router.replace("/vendor/dashboard");
//             }
//           }
//         } else {
//           setOpen(false);
//           setLoginError(error);
//         }
//       });
//     } else {
//       setOpen(false);

//       setLoginError(userRes.data.message);
//     }
//   };

//   return (
//     <div>
//       <div className={classes.root}>
//         <Container>
//           <div>
//             <Grid item xs={12} sm={12} elevation={4}>
//               <Card elevation={3} className={classes.card} elevation={2}>
//                 <Snackbar
//                   open={loginError ? true : false}
//                   autoHideDuration={6000}
//                   anchorOrigin={{ vertical: "top", horizontal: "center" }}
//                   onClose={() => setLoginError(null)}
//                 >
//                   <Alert severity="error">{loginError && loginError}</Alert>
//                 </Snackbar>
//                 <Typography
//                   style={{
//                     textAlign: "center",
//                     fontSize: "2.2em",
//                     display: "flex",
//                     fontWeight: 500,
//                     justifyContent: "center",
//                   }}
//                 >
//                   Login !
//                 </Typography>
//                 <Grid container spacing={2} style={{ marginTop: 20 }}>
//                   <Grid item xs={12} sm={12} className={classes.contentCenter}>
//                     <TextField
//                       id="outlined-basic"
//                       variant="outlined"
//                       label="Phone No."
//                       onChange={(event) => {
//                         setError({ primaryNumberErr: false });
//                         setPrimaryNumber(event.target.value);
//                       }}
//                       error={error.primaryNumberErr}
//                       helperText={
//                         error.primaryNumberErr
//                           ? "please enter valid Phone no."
//                           : ""
//                       }
//                       fullWidth
//                       placeholder="Phone No."
//                     />
//                   </Grid>
//                   <Grid item xs={12} sm={12} className={classes.contentCenter}>
//                     <TextField
//                       id="password"
//                       variant="outlined"
//                       required
//                       label="Password"
//                       InputProps={{
//                         className: classes.input,
//                       }}
//                       onChange={(event) => {
//                         setError({ passwordErr: false });
//                         setPassword(event.target.value);
//                       }}
//                       error={error.passwordErr}
//                       helperText={
//                         error.PasswordErr == true
//                           ? "please enter valid Password"
//                           : ""
//                       }
//                       fullWidth
//                       InputProps={{
//                         endAdornment: (
//                           <InputAdornment position="end">
//                             <IconButton
//                               aria-label="toggle password visibility"
//                               onClick={() => {
//                                 isPassVisible
//                                   ? setIsPassVisible(false)
//                                   : setIsPassVisible(true);
//                               }}
//                             >
//                               {isPassVisible ? (
//                                 <Visibility fontSize="small" />
//                               ) : (
//                                 <VisibilityOff fontSize="small" />
//                               )}
//                             </IconButton>
//                           </InputAdornment>
//                         ),
//                       }}
//                       type={isPassVisible ? "text" : "password"}
//                       value={password}
//                       placeholder="Password"
//                     />
//                   </Grid>

//                   <Grid item xs={12} sm={12} className={classes.contentCenter}>
//                     <Button
//                       variant="contained"
//                       color="primary"
//                       className={classes.btnStyle}
//                       size="medium"
//                       fullWidth
//                       onClick={handleChange}
//                     >
//                       Log in
//                     </Button>
//                   </Grid>
//                   <a
//                     onClick={() => router.push("/#")}
//                     style={{
//                       marginLeft: 10,
//                       cursor: "pointer",
//                     }}
//                   >
//                     Forgot your password?
//                   </a>
//                   <Grid item xs={12} sm={12} className={classes.contentCenter}>
//                     <Box
//                       display="flex"
//                       flexWrap="wrap"
//                       alignContent="flex-start"
//                       className={classes.textStyle}
//                     >
//                       <a
//                         onClick={() => router.push("/Vendor/signup")}
//                         style={{
//                           fontWeight: "bold",
//                           cursor: "pointer",
//                           marginTop: 20,
//                         }}
//                       >
//                         Don't have account? SignUp
//                       </a>
//                     </Box>
//                   </Grid>
//                 </Grid>
//               </Card>
//             </Grid>
//           </div>
//         </Container>
//       </div>
//     </div>
//   );
// }

// export default LogIn;
