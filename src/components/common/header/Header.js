import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { logoIcon } from "../icons";
import { useState } from "react";
import Button from "@mui/material/Button";
import MyTabs from "./MyTabs";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import MyDrawer from "./MyDrawer";
import Hidden from "@mui/material/Hidden";

export const tabItems = [
  { text: "Pricing", link: "/pricing" },
  { text: "About", link: "/about" },
  { text: "Contact", link: "/contact" },
];

const Header = (props) => {
  const [value, setValue] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsOpen(open);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
            <Hidden smDown>
              <MyTabs value={value} onChange={handleChange} />
            </Hidden>
            <Hidden mdUp>
              <IconButton
                color="secondary"
                aria-label="Toggle menu icon"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon fontSize="large" />
              </IconButton>
              <MyDrawer isOpen={isOpen} toggleDrawer={toggleDrawer} />
            </Hidden>
          </Box>
          <Hidden smDown>
            <Button className="btn" variant="contained" color="primary">
              Schedule a Demo
            </Button>
          </Hidden>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
