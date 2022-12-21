import {
  Box,
  CircularProgress,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import MyCard from "../components/HomeComponents/MyCard";
import { Grid } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Pagination from "@mui/material/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getMeals } from "../features/meal/mealSlice";
import {
  getFilterCuisine,
  getFilterCategory,
} from "../features/meal/mealSlice";
import { getMealsNames } from "../features/meal/mealSlice";

function MyMenuPage() {
  document.title = "Menu"

  const dispatch = useDispatch();

  let { meals, mealsIsLoading, getMealsError } = useSelector(
    (state) => state.meal
  );
  const mealsList = meals.meals;
  const { pages } = meals;

  const PageHandle = async (event, value) => {
    dispatch(getMeals({ data: `page=${value}`, type: "paggination" }));
  };

  let currentCuisine = useSelector((state) => state.meal.filterCuisine);
  let currentCategory = useSelector((state) => state.meal.filterCategory);

  const cuisineHandle = async (event, value) => {
    dispatch(getFilterCuisine(value));
  };
  const categoryHandle = async (event, value) => {
    dispatch(getFilterCategory(value));
  };

  const searchHandle = async (event, value) => {
    if (value) {
      value = value.charAt(0).toUpperCase() + value.slice(1);
      dispatch(getMeals({ data: value, type: "search" }));
    }
  };

  let mealsNames = useSelector((state) => state.meal.mealsNames);

  useEffect(() => {
    dispatch(getMealsNames());
  }, [dispatch]);

  useEffect(() => {
    dispatch(
      getMeals({
        data: {
          cuisine: `cuisine=${currentCuisine}`,
          category: `category=${currentCategory}`,
        },
        type: "filter",
      })
    );
  }, [currentCuisine, currentCategory]);

  useEffect(() => {
    dispatch(
      getMeals({
        data: {
          cuisine: `cuisine=${currentCuisine}`,
          category: `category=${currentCategory}`,
        },
        type: "filter",
      })
    );
  }, [dispatch]);

  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Paper variant={"outlined"} square>
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ mr: 2 }}
            color="primary"
            variant="h5"
            fontWeight={"bold"}
          >
            Meals
          </Typography>
          <Autocomplete
            id="free-solo-demo"
            freeSolo
            options={mealsNames.map((option) => option)}
            renderInput={(params) => <TextField {...params} label="search" />}
            sx={{ py: 2 }}
            fullWidth
            onChange={searchHandle}
          />
          <Button variant="contained" size="large" sx={{ ml: 2 }}>
            Go
          </Button>
        </Container>
      </Paper>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
          flexWrap: "wrap",
        }}
      >
        <Grid container sx={{ ml: 2, mt: 7 }} width={{ lg: "10%" }}>
          <Accordion square sx={{ width: "100%" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography fontWeight={"bold"}>Cuisine</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue=" "
                  name="radio-buttons-group"
                  onChange={cuisineHandle}
                >
                  <FormControlLabel value="" control={<Radio />} label="All" />
                  <FormControlLabel
                    value="African"
                    control={<Radio />}
                    label="African"
                  />
                  <FormControlLabel
                    value="Moroccan"
                    control={<Radio />}
                    label="Moroccan"
                  />
                  <FormControlLabel
                    value="Japanese"
                    control={<Radio />}
                    label="Japanese"
                  />
                  <FormControlLabel
                    value="Asian"
                    control={<Radio />}
                    label="Asian"
                  />
                  <FormControlLabel
                    value="Italian"
                    control={<Radio />}
                    label="Italian"
                  />
                  <FormControlLabel
                    value="American"
                    control={<Radio />}
                    label="American"
                  />
                </RadioGroup>
              </FormControl>
            </AccordionDetails>
          </Accordion>
          <Accordion square sx={{ width: "100%" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography fontWeight={"bold"}>Categories</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="all"
                  name="radio-buttons-group"
                  onChange={categoryHandle}
                >
                  <FormControlLabel value="" control={<Radio />} label="All" />
                  <FormControlLabel
                    value="Lamb"
                    control={<Radio />}
                    label="Lamb"
                  />
                  <FormControlLabel
                    value="Fish"
                    control={<Radio />}
                    label="Fish"
                  />
                  <FormControlLabel
                    value="Poultry"
                    control={<Radio />}
                    label="Poultry"
                  />
                  <FormControlLabel
                    value="Beef"
                    control={<Radio />}
                    label="Beef"
                  />
                  <FormControlLabel
                    value="Vegetarian"
                    control={<Radio />}
                    label="Vegetarian"
                  />
                </RadioGroup>
              </FormControl>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid>
          <Grid item sx={{ my: 2 }} width={{ lg: "20%" }}></Grid>
          <Grid item>
            <Container>
              {mealsIsLoading ? (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    mt: "200px",
                    height: "100vh",
                  }}
                >
                  <CircularProgress size={80} />
                </Box>
              ) : (
                <>
                  {currentCuisine && (
                    <h3>
                      {currentCuisine} -- {currentCategory}
                    </h3>
                  )}
                  <Grid
                    container
                    spacing={2}
                    justifyContent="center"
                    sx={{ flexGrow: 1, mt: "40px" }}
                    minWidth={{ lg: 1200 }}
                  >
                    {getMealsError ? (
                      "can't catch data"
                    ) : (
                      <>
                        {mealsList &&
                          mealsList.map((item, index) => {
                            return (
                              <Grid key={item._id} item lg={4}>
                                <MyCard meal={item}></MyCard>
                              </Grid>
                            );
                          })}
                      </>
                    )}
                  </Grid>
                </>
              )}
              <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
              >
                <Grid item xs={3}>
                  <Pagination
                    count={pages}
                    color="primary"
                    sx={{ mt: 4, mb: 8 }}
                    onChange={PageHandle}
                  />
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default MyMenuPage;
