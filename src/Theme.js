import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 840,
      lg: 1110,
      xl: 1440,
    },
  },
  palette: {
    background: {
      default: "#F2F2F2",
    },
    common: {
      secondary_pink: "#da6d97",
    },
    primary: {
      main: "#ba4270",
      light: "#fbfcfe",
    },
    secondary: {
      main: "#36536b",
      dark: "#1b262f",
      light: "#6c8294",
    },
  },
  typography: {
    h1: {
      fontSize: "72px",
      lineHeight: "72px",
      letterSpacing: "-0.55px",
    },
    h2: {
      fontSize: "56px",
      lineHeight: "56px",
      letterSpacing: "-0.43px",
    },
    h3: {
      fontSize: "48px",
      lineHeight: "56px",
      letterSpacing: "-0.37px",
    },
    h4: {
      fontSize: "32px",
      lineHeight: "40px",
      letterSpacing: "-0.25px",
    },
    h5: {
      fontFamily: "Public Sans",
      fontSize: "18px",
      lineHeight: "25px",
      letterSpacing: "-0.14px",
    },
    h6: {
      fontSize: "24px",
      lineHeight: "32px",
      letterSpacing: "-0.18px",
    },
    body1: {
      fontSize: "15px",
      lineHeight: "28px",
    },
    button: {
      textTransform: "none",
      fontFamily:
        '-apple-system, BlinkMacSystemFont, Segoe UI, "Public Sans", Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
      fontWeight: 700,
      fontSize: 15,
      lineHeight: "18px",
      letterSpacing: -0.115385,
    },
  },
});

export default theme;
