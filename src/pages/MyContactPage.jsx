import { Box, Container, Typography, Divider } from "@mui/material";
import { React, useEffect, useState } from "react";
import MyContactCard from "../components/ContactComponents/MyContactCard";
import MapLocation from "../components/shared/MapLocation";

function MyContactPage(props) {
  document.title = "Contact Us"

  const position = [30.550964701276385, 31.009036511610887];
  // console.log(props.isDarkTheme);
  let isDarkMode = props.isDarkTheme;
  const [isDark, setIsDark] = useState(props.isDarkTheme);
  useEffect(() => {
    if (isDarkMode === true) {
      setIsDark(true);
    }
    if (isDarkMode === false) {
      setIsDark(false);
    }
  }, [isDarkMode]);
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <MyContactCard></MyContactCard>
      <Container maxWidth="md" sx={{ mb: 4 }}>
        <Box sx={{ display: "flex", flexDirection: "column", my: "10px" }}>
          <Typography
            variant="h2"
            textAlign="center"
            fontFamily={"serif"}
            fontWeight={"bold"}
            fontStyle={"italic"}
          >
            {" "}
            Our Location{" "}
          </Typography>

          <Typography
            variant="h6"
            textAlign="center"
            alignSelf={"center"}
            className={"reda"}
          >
            The Main Branch
          </Typography>
          <Divider
            color={"primary"}
            variant="middle"
            sx={{ height: 3 }}
          ></Divider>
        </Box>
      </Container>
      <Box sx={{ ml: 10, mr: 10, mb: 8 }}>
        <MapLocation center={position} zoom={12} darkMode={isDark} />

      </Box>
    </Box>
  );
}

export default MyContactPage;
