import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { Link } from "react-router-dom";
import Slide from "@mui/material/Slide";
import { Box, Container } from "@mui/system";
import MyAccount from "./MyAccount";
import { Button } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { useSelector } from "react-redux";

function HideOnScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,

  window: PropTypes.func,
};

export default function HideAppBar(props) {
  const user = useSelector((state) => state.auth.user);

  // console.log(user);

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar sx={{ height: 32, p: 0 }} elevation={0} enableColorOnDark>
          <Toolbar variant="string">
            <Container
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignContent: "center",
                pb: 2
              }}
            >
              {user == null ? (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row-reverse",
                    width: "100%",
                  }}
                >
                  <Button
                    color="inherit"
                    size="small"
                    component={Link}
                    to={`/Login`}
                  >
                    <Typography variant="body2" textTransform={"capitalize"}>
                      Sign In
                    </Typography>
                    <LoginIcon fontSize="small"></LoginIcon>
                  </Button>
                </Box>
              ) : (
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="body1" textAlign={"center"}>
                    Welcome! {user.firstName} {user.lastName}
                  </Typography>
                  <MyAccount userName={user}></MyAccount>
                </Box>
              )}
            </Container>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </React.Fragment>
  );
}
