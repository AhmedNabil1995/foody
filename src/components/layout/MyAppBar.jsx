import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import MyInfoBar from "./MyInfoBar";
import Badge from "@mui/material/Badge";
import { Link, useLocation } from "react-router-dom";

import { useSelector } from "react-redux";

const drawerWidth = 240;

const navItems = ["Home", "Menu", "About", "Contact"];
function MyAppBar(props) {
  let numOfItems = useSelector((state) => state.cart.numOfItems);
  // console.log(numOfItems.length);

  const location = useLocation();
  function RemoveNavIndecator() {
    if (
      location.pathname === "/Register" ||
      location.pathname === "/LogIn" ||
      location.pathname === "/Profile" ||
      location.pathname === "/Profile/ProfileDetails" ||
      location.pathname === "/Profile/ProfileOrders" ||
      location.pathname === "/Profile/ProfilePassword" ||
      location.pathname === "/Profile/Dashboard" ||
      location.pathname === "/Profile/Address" ||
      location.pathname === "/PurchaseSuccess" ||
      location.pathname === "/CashOnDelivery" ||
      location.pathname === "/PaymentChoise" ||
      location.pathname === "/Cart"

    ) {
      value = -1;
      // console.log(value);
    }
    else if (location.pathname === "/Home") {

      return value = 0;

    }
    else if (location.pathname === "/") {

      return value = 0;

    }
    else if (location.pathname === "/Menu") {

      return value = 1;

    }
    else if (location.pathname === "/About") {

      return value = 2;

    }
    else if (location.pathname === "/Contact") {

      return value = 3;

    }

  }

  let [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    // change valueif not in dedtecated location

    setValue(newValue);
    // console.log(newValue);
  };
  const changeTheme = () => {
    props.setIsDarkTheme(!props.isDarkTheme);
  };

  const { window } = props;
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, fontWeight: 600 }}>
        Foody
        <RestaurantMenuIcon></RestaurantMenuIcon>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              component={Link}
              to={`/${item}`}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  // <Tab key={item} label={item} component={Link} to={`/${item}`} />

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", pb: 2.5 }}>
      <AppBar component="nav" color="inherit" sx={{ py: 0.3 }}>
        {/* <AppBar variant="outlined" sx={{ height: 20 }}>
          <Toolbar sx={{ m: 0 }} variant="string">
            asass
          </Toolbar>
        </AppBar> */}
        <MyInfoBar></MyInfoBar>

        <Toolbar
          sx={{
            display: "flex",
            justifyContent: { sm: "space-around", xs: "space-between" },
            alignItems: "center",

            marginTop: 3
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ display: { xs: "none", sm: "block" }, fontWeight: 600 }}
          >
            Foody
            <RestaurantMenuIcon></RestaurantMenuIcon>
          </Typography>

          <Tabs
            sx={{ display: { xs: "none", sm: "block" } }}
            value={RemoveNavIndecator()}
            onChange={handleChange}
            aria-label="nav tabs example"
          >
            {navItems.map((item) => (
              // <Button key={item} sx={{ color: "inherit  " }} variant="text">
              //   {item}
              // </Button>
              <Tab key={item} label={item} component={Link} to={`/${item}`} />
            ))}
          </Tabs>
          {/* Icons */}

          <Box sx={{ display: "flex" }}>
            <IconButton sx={{ ml: 1 }} color="inherit" onClick={changeTheme}>
              {theme.palette.mode === "dark" ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>
            <IconButton color="inherit" component={Link} to={`/Cart`}>
              <Badge badgeContent={numOfItems.length} color="secondary">
                <ShoppingCartIcon color="inherit" />
              </Badge>{" "}
            </IconButton>
          </Box>
          {/* Icons */}
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default MyAppBar;
