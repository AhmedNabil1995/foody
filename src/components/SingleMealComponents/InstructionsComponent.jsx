import React from "react";
import {
  Container,
  Paper,
  Grid,
  Typography,
  Button,
  Divider,
  FormControl,
  InputLabel,
  Box,
  OutlinedInput,
} from "@mui/material";

function InstructionsComponent({ meal }) {
  return (
    <div>
      {" "}
      <Grid item xs={12} marginX={{ md: 15 }}>
        {/* sx={{ my: "50px", py: "50px" }} */}

        {/* //Paper */}
        <Container maxWidth={"xl"} px={8}>
          <Box sx={{ mx: 4, my: 4 }}>
            <Grid display={{ xs: "none", md: "block" }}>
              <Divider></Divider>
            </Grid>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <Box>
                <Typography variant="h6" fontFamily={"serif"}>
                  step-by-step
                </Typography>
                <Typography
                  variant="h4"
                  fontWeight={"bold"}
                  color={"primary.dark"}
                >
                  INSTRUCTIONS
                </Typography>
              </Box>
            </Grid>
          </Box>
        </Container>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            mt: 4,
          }}
        >
          <Grid container spacing={2} mb={5}>
            {meal &&
              meal.map((item, index) => {
                return (
                  <Grid
                    key={index}
                    item
                    xs={12}
                    md={6}
                    justify="center"
                    mb={15}
                  >
                    <img src={item.image} alt="" width={"100%"} />
                    <Box
                      sx={{ display: "flex", flexDirection: "column", gap: 1 }}
                    >
                      <Typography>
                        <Box
                          component={"span"}
                          sx={{
                            backgroundColor: "primary.main",
                            color: "white",
                            borderRadius: "50%",
                            px: 1,
                            py: 0.5,
                          }}
                        >
                          {index + 1}
                        </Box>{" "}
                        <Box
                          component={"span"}
                          sx={{ fontSize: 18, fontWeight: "bold" }}
                        >
                          {item.title}:
                        </Box>{" "}
                      </Typography>
                      <Divider></Divider>
                      {/* <Typography>{item.description}</Typography> */}
                      <p
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      ></p>
                    </Box>
                  </Grid>
                );
              })}
          </Grid>
        </Container>
      </Grid>
    </div>
  );
}

export default InstructionsComponent;
