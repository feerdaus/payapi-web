import { createTheme } from "@mui/material/styles";
import { letterSpacing } from "@mui/system";

const theme = createTheme({
  palette: {
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
    fontFamily: "DM Serif Display",
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
  },
});

export default theme;
