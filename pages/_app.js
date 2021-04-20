import { createMuiTheme, NoSsr, ThemeProvider } from "@material-ui/core";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import "../styles/globals.css";
import "../styles/custom.css";

const customBreakpointValues = {
  values: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  },
};
const breakpoints = createBreakpoints({ ...customBreakpointValues });

const theme = createMuiTheme({
  breakpoints: {
    ...customBreakpointValues,
  },
  palette: {
    primary: {
      main: "#e3e8e8", // light grey color
      light: "#f6f0e2", //Light Grey
      background: "#AE0000", // Red(Mehroon)
      grey: "#656565", //Grey,
    },
    secondary: {
      main: "#bd0202", //Brown
      white: "#ffffff", //White
      light: "#14A884", //Teal
      grey: "#a9a9a9", //Grey
    },
  },
  typography: {
    h1: {
      fontFamily: '"Hind Madurai"',
      fontWeight: 500,
      fontSize: 28,
    },
    h2: {
      fontFamily: '"Hind Madurai"',
      fontWeight: 500,
      fontSize: 24,
    },
    body2: {
      fontFamily: "ABeeZee",
      fontSize: 16,
    },
    subtitle1: {
      fontFamily: '"Hind Madurai"',
      fontWeight: 300,
      fontSize: 18,
      [breakpoints.down("sm")]: {
        fontSize: 14,
      },
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <NoSsr>
      <ThemeProvider theme={theme}>
        {/* <AuthProvider> */}
        {/* <Provider store={store}> */}
        <Component {...pageProps} />
        {/* </Provider> */}
        {/* </AuthProvider> */}
      </ThemeProvider>
    </NoSsr>
  );
}

export default MyApp;
