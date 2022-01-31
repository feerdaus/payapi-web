import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { logoIcon } from "../icons";
import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";

const Header = (props) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const myTabs = (
    <Tabs
      value={value}
      onChange={handleChange}
      TabIndicatorProps={{ style: { display: "none" } }}
      aria-label="navigation tabs"
    >
      <Tab label="Item One" />
      <Tab label="Item Two" />
      <Tab label="Item Three" />
    </Tabs>
  );

  return (
    <AppBar
      elevation={0}
      color="transparent"
      position="absolute"
      sx={{ padding: "40px 0" }}
    >
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            minHeight: "48px !important",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "480px",
              justifyContent: "space-between",
            }}
          >
            {logoIcon}
            {myTabs}
          </Box>
          <Button className="btn" variant="contained" color="primary">
            Schedule a Demo
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
