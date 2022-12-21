import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Typography,
  Divider,
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import img1 from '../../assets/svgs/Chef-amico.svg'
import img2 from '../../assets/svgs/Fortune_cookie-amico.svg'
import img3 from '../../assets/svgs/Recipe_book-amico.svg'

export default function HomeFeatureSection() {
  return (
    <Box sx={{ my: "20px", py: "50px" }}>
      <Container maxWidth="md">
        <Box sx={{ display: "flex", flexDirection: "column", p: 2 }}>
          <Typography
            variant="h2"
            textAlign="center"
            fontFamily={"serif"}
            fontWeight={"bold"}
            fontStyle={"italic"}
          >
            {" "}
            Main Feature of our Business
          </Typography>

          <Typography variant="h6" textAlign="center" alignSelf={"center"}>
            See why home cooks stick with the original Egyption meal kit.
          </Typography>
          <Divider
            color={"primary"}
            variant="middle"
            sx={{ height: 3 }}
          ></Divider>
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Grid
          align="center"
          container
          spacing={2}
          sx={{ flexGrow: 1, mt: "40px" }}
        >
          <Box width={"100%"} sx={{ pb: 5, mb: 5, display: "flex", flexDirection: "row", gap: 10, flexWrap: "wrap", justifyContent: "center", alignItems: 'center' }}>
            <Box width={'280px'}>
              <img src={img1} style={{ minWidth: '200px', maxWidth: '400px' }} height="300px" />
              <Typography variant="h5" fontWeight={'bold'} >
                Cook, create, enjoy
              </Typography>
              <Typography variant="p" >
                Follow our easy step-by-step recipes to learn new skills, try new tastes, and make your family amazing meals.
              </Typography>
            </Box>
            <Box width={'280px'}>
              <img src={img2} style={{ minWidth: '200px', maxWidth: '400px' }} height="300px" />
              <Typography variant="h5" fontWeight={'bold'} >
                Unpack your box
              </Typography>
              <Typography variant="p" >
                We guarantee the freshness of all our ingredients and deliver them in an insulated box right to your door.
              </Typography>
            </Box>
            <Box width={'280px'}>
              <img src={img3} style={{ minWidth: '200px', maxWidth: '400px' }} height="315px" />
              <Typography variant="h5" fontWeight={'bold'} >
                Choose your meals
              </Typography>
              <Typography variant="p" >
                We keep dinner interesting. From top-rated favorites and health-conscious options to Premium dishes and more, variety is always on the menu.
              </Typography>
            </Box>


          </Box>
        </Grid>
      </Container>
    </Box>
  );
}
