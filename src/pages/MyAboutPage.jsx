import React from "react";
import {
  Container,
  Paper,
  Grid,
  Typography,
  Button,
  Divider,
  Box,
} from "@mui/material";
import sideImage1 from '../assets/images/about-us-1.webp'
import sideImage2 from '../assets/images/about-us-2.webp'
import sideImage3 from '../assets/images/about-us-3.webp'

export default function MyAboutPage() {
  document.title = "About Us"

  return (
    <Container
      sx={{
        pt: 5,
        pb: 10,
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ display: "flex", flexDirection: "column", my: "20px" }}>
          <Divider color={"primary"} variant="middle" sx={{ height: 1 }}>
            <Typography
              variant="h3"
              textAlign="center"
              fontFamily={"serif"}
              fontWeight={"bold"}
              fontStyle={"italic"}
              sx={{ mb: "20px" }}
            >
              {" "}
              What Is Foody
            </Typography>
          </Divider>
          <Typography
            variant="body"
            textAlign="center"
            fontFamily={"serif"}
            fontWeight={"bold"}
            fontStyle={"italic"}
          >
            {" "}
            Restourant are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </Typography>
        </Box>
      </Container>
      <Paper
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: "20px",
          my: "30px",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={7}>
            <img
              src={sideImage1}
              alt=""
              width={"100%"}
              height={"100%"}
            />
          </Grid>
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                textAlign: "center",
              }}
            >
              <Box
                component={"span"}
                sx={{
                  backgroundColor: "#f2f2f2",
                  color: "primary.main",
                  fontSize: "35px",
                  borderRadius: "50%",
                  px: 4,
                  py: 3,
                }}
              >
                {1}
              </Box>{" "}
            </Box>
            <Typography
              variant="h4"
              p={2}
              color={"primary"}
              fontWeight={"bolder"}
              sx={{ marginTop: "25px" }}
            >
              A comprehensive platform with over 1,000 Menus
            </Typography>
            <Typography variant="body1" p={2}>
              Restourant are many variations of passages of Lorem Ipsum
              available, but the majority have suffered alteration in some form,
              by injected humour, or randomised words which don't look even
              slightly believable.
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      <Paper
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: "20px",
          my: "30px",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                textAlign: "center",
              }}
            >
              <Box
                component={"span"}
                sx={{
                  backgroundColor: "#f2f2f2",
                  color: "primary.main",
                  fontSize: "35px",
                  borderRadius: "50%",
                  px: 4,
                  py: 3,
                }}
              >
                {2}
              </Box>{" "}
            </Box>
            <Typography
              variant="h4"
              p={2}
              color={"primary"}
              fontWeight={"bolder"}
              sx={{ marginTop: "25px" }}
            >
              Discovery to the dish level
            </Typography>
            <Typography variant="body1" p={2}>
              Restourant are many variations of passages of Lorem Ipsum
              available, but the majority have suffered alteration in some form,
              by injected humour, or randomised words which don't look even
              slightly believable.
            </Typography>
          </Grid>
          <Grid item xs={12} md={7}>
            <img
              src={sideImage2}
              alt=""
              width={"100%"}
              height={"100%"}
            />
          </Grid>
        </Grid>
      </Paper>

      <Paper
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: "20px",
          my: "30px",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={7}>
            <img
              src={sideImage3}
              alt=""
              width={"100%"}
              height={"100%"}
            />
          </Grid>
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                textAlign: "center",
              }}
            >
              <Box
                component={"span"}
                sx={{
                  backgroundColor: "#f2f2f2",
                  color: "primary.main",
                  fontSize: "35px",
                  borderRadius: "50%",
                  px: 4,
                  py: 3,
                }}
              >
                {3}
              </Box>{" "}
            </Box>
            <Typography
              variant="h4"
              p={2}
              color={"primary"}
              fontWeight={"bolder"}
              sx={{ marginTop: "25px" }}
            >
              Order in a click of a button
            </Typography>
            <Typography variant="body1" p={2}>
              Restourant are many variations of passages of Lorem Ipsum
              available, but the majority have suffered alteration in some form,
              by injected humour.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
