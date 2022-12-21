import {
  Box,
  Grid,
  Typography,
  Divider,
  CircularProgress,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect } from "react";
import MyCard from "./MyCard";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { getMeals } from "../../features/meal/mealSlice";

export default function HomeChooseFrom() {
  const {
    meals: { meals },
    mealsIsLoading,
    getMealsError,
  } = useSelector((state) => state.meal);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMeals({
      data: {
        cuisine: `cuisine=`,
        category: `category=`,
      },
      type: "filter",
    }));
  }, [dispatch]);

  return (
    <Box sx={{ my: "50px", py: "50px" }}>
      <Container>
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
              Choose from our menus
            </Typography>

            <Typography variant="h6" textAlign="center" alignSelf={"center"}>
              Choose from varity of meal kits that sutis your taste.
            </Typography>
            <Divider
              color={"primary"}
              variant="middle"
              sx={{ height: 3 }}
            ></Divider>
          </Box>
        </Container>
        {mealsIsLoading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: '200px', height: '100vh'}}>
          <CircularProgress size={80} />
        </Box>
        ) : (
          <Grid
            container
            spacing={2}
            justifyContent="center"
            sx={{ flexGrow: 1, mt: "40px" }}
          >
            {getMealsError ? (
              "can't catch data"
            ) : (
              <>
                {meals &&
                  meals.map((item, index) => {
                    if (index <= 5) {
                      return (
                        <Grid key={item._id} item lg={4}>
                          <MyCard meal={item}></MyCard>
                        </Grid>
                      );
                    }
                  })}
              </>
            )}
          </Grid>
        )}
      </Container>
    </Box>
  );
}
