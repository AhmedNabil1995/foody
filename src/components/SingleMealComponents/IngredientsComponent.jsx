import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";

function IngredientsComponent({ meal }) {
  return (
    <Container maxWidth={"xl"}>
      {" "}
      <Grid container spacing={{ xs: 2, md: 2 }}>
        <Grid item xs={12} md={6}>
          <img
            src={
              meal && meal.image
            }
            alt=""
            width={"100%"}
            height={"100%"}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Container sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              {meal && meal._ingredients.map((item, index) => {
                return (
                  <Typography
                    key={index}
                    variant="body2"
                    color="text.secondary"
                    fontSize={"large"}
                  >
                    {item.quantity} {item.name}{" "}
                  </Typography>
                )
              })}
            </Box>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
}

export default IngredientsComponent;
