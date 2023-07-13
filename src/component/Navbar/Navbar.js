import * as React from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import schoollogo from "../../images/skool-logo.png";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
import MiniNavbar from "./MiniNavbar";
const navItems = [
  { name: "HOME", href: "/" },
  { name: "ACADEMIC", href: "/academic" },
  { name: "FACILITIES", href: "/facilities" },
  { name: "ADMISSION", href: "/admission" },
  { name: "CALENDAR", href: "/calendar" },
  { name: "GALLERY", href: "/gallery" },
];

const drawerWidth = 240;

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        {navItems.map((item, index) => (
          <Link to={item.href}>
            <ListItem key={index} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: "#406c85" }}>
        <MiniNavbar />
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img src={schoollogo} alt="logo" className={styles.logoImg}></img>
          </Typography>
          <Hidden mdUp>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ marginLeft: "auto" }}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Hidden mdDown>
            {navItems.map((item, index) => {
              return (
                <Link to={item.href}>
                  <Button key={index} sx={{ color: "#fff" }}>
                    {item.name}
                  </Button>
                </Link>
              );
            })}
          </Hidden>
        </Toolbar>
      </AppBar>
      <Hidden mdUp>
        <Drawer
          container={container}
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              right: 0,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
    </Box>
  );
}

export default Navbar;
