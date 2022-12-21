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
import sideImage from "../../assets/images/brief.jpg";
import { Link } from "react-router-dom";

export default function MyBrief() {
  return (
    <Container
      sx={{
        pt: 5,
        pb: 5,
      }}
    >
      {/* sx={{ my: "50px", py: "50px" }} */}
      <Container maxWidth="md">
        <Box sx={{ display: "flex", flexDirection: "column", my: "50px" }}>
          <Typography
            variant="h2"
            textAlign="center"
            fontFamily={"serif"}
            fontWeight={"bold"}
            fontStyle={"italic"}
          >
            {" "}
            A Brief
          </Typography>

          <Typography variant="h6" textAlign="center" alignSelf={"center"}>
            Our ,Slogan is to Cook it by Yourself !!
          </Typography>
          <Divider
            color={"primary"}
            variant="middle"
            sx={{ height: 3 }}
          ></Divider>
        </Box>
      </Container>
      <Paper
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img src={sideImage} alt="" width={"100%"} height={"100%"} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              p={2}
              color={"primary"}
              fontWeight={"bolder"}
            >
              Since 1987, at your service
            </Typography>
            <Typography variant="body1" p={2}>
              Restourant are many variations of passages of Lorem Ipsum
              available, but the majority have suffered alteration in some form,
              by injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia curae; Proin a
              ullamcorper purus. Sed malesuada a dolor et aliquet.
            </Typography>
            <Typography variant="body1" p={2}>
              After 16 years in the restaurant business, 9 in farming, and
              several years dedicated to the study of nutrition, we decided now
              was the right time to take all that experience and synthesize it
              into a local eatery where people can enjoy exquisite food, support
              local food producers, and eat the kind of food they can feel good
              about.
            </Typography>
            <Grid
              container
              p={2}
              direction="row"
              alignItems="center"
              justifyContent="center"
            >
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="h3"
                  textAlign={"start"}
                  fontFamily="Brush Script MT"
                >
                  Foody
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} justify="center" align="center">
                <Button variant="contained" color="primary" component={Link} to={'/Menu'}>
                  show more
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
