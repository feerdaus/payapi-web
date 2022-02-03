import { tabItems } from "./Header";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Divider from "@mui/material/Divider";

const list = (toggleDrawer) => (
  <Box sx={{ width: 250 }} role="presentation" onKeyDown={toggleDrawer(false)}>
    <List>
      {tabItems.map((item, index) => (
        <ListItem button key={item.text}>
          <ListItemText
            sx={{ textAlign: "center", color: "white" }}
            primary={item.text}
          />
        </ListItem>
      ))}
    </List>
    <Button className="btn" variant="contained" color="primary">
      Schedule a Demo
    </Button>
  </Box>
);

const MyDrawer = ({ isOpen, toggleDrawer }) => {
  return (
    <Drawer
      sx={{ textAlign: "center" }}
      anchor="right"
      open={isOpen}
      onClose={toggleDrawer(false)}
      classes={{ paper: "drawer-paper" }}
    >
      <Box sx={{ pt: "40px", pb: "20px" }}>
        <Toolbar
          sx={{ justifyContent: "flex-end", minHeight: "48px !important" }}
        >
          <IconButton
            sx={{ color: "white" }}
            aria-label="Toggle menu icon"
            onClick={toggleDrawer(false)}
          >
            <CloseOutlinedIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </Box>
      <Divider
        variant="middle"
        sx={{ backgroundColor: "#FBFCFE", opacity: 0.15 }}
      />
      {list(toggleDrawer)}
    </Drawer>
  );
};

export default MyDrawer;
