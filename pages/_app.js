import Header from "../src/components/common/header/Header";
import "../styles/globals.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/Theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
