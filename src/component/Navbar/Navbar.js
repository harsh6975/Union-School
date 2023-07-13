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
import { Link, useLocation } from "react-router-dom";
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

function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isFixed, setIsFixed] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState("");
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        (typeof window !== "undefined" &&
          window !== "undefined" &&
          window.pageYOffset) ||
        document.documentElement.scrollTop;
      setIsFixed(scrollTop > 0);
    };

    if (typeof window !== "undefined" && window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (typeof window !== "undefined" && window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  React.useEffect(() => {
    const path = location.pathname;
    setActiveItem(path);
  }, [location]);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        {navItems.map((item, index) => (
          <Link to={item.href} key={index}>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );
  console.log("window", window);
  const container = undefined;

  return (
    <>
      <MiniNavbar />
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          component="nav"
          sx={{
            backgroundColor: "#406c85",
            position: isFixed ? "fixed" : "relative",
            boxShadow: isFixed ? "0 4px 12px rgba(0,0,0,0.15)" : "none",
            transition: "background-color 0.3s, position 0.3s, box-shadow 0.3s",
          }}
        >
          {/* <MiniNavbar /> */}
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <img src={schoollogo} alt="logo" className={styles.logoImg} />
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
              {navItems.map((item, index) => (
                <Link
                  to={item.href}
                  key={index}
                  className={
                    item.href === activeItem ? styles.menuactive : styles.menu
                  }
                >
                  {item.name}
                </Link>
              ))}
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
    </>
  );
}

export default Navbar;
