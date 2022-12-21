import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Box,
  CardActionArea,
  CardActions,
  Chip,
  IconButton,
} from "@mui/material";
import VeganFoodIcon from "@mui/icons-material/Spa";
import KitchenIcon from "@mui/icons-material/Countertops";
import AddToCart from "@mui/icons-material/AddShoppingCart";
import TimerIcon from "@mui/icons-material/Timer";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { added } from "../../features/cart/cartSlice";
import { getOneMeal } from "../../features/meal/mealSlice";

export default function MyCard({ meal }) {
  const {
    _id,
    addons,
    name,
    cuisine,
    category,
    cookingDuration,
    image,
    price,
  } = meal;
  const numOfItems = useSelector((state) => state.cart.numOfItems);

  const dispatch = useDispatch();
  const handleOneMealView = (id) => {
    dispatch(getOneMeal(id));
  };
  // console.log(meal);
  return (
    <Card sx={{ maxWidth: 400, height: 700 }}>
      <CardActionArea
        component={Link}
        to={`/${"Meal"}/${_id}`}
        onClick={() => {
          handleOneMealView(_id);
        }}
      >
        <CardMedia
          component="img"
          height="400"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            color={"primary"}
            fontFamily="serif"
          >
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {addons}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
              <Chip
                color="primary"
                size="small"
                label={category}
                icon={<VeganFoodIcon />}
              />
              <Chip
                color="secondary"
                size="small"
                label={cuisine}
                icon={<KitchenIcon />}
              />
            </Box>
            <Typography
              variant="h5"
              color="primary.light"
              sx={{ display: "flex", alignItems: "center", gap: 0.0 }}
            >
              <TimerIcon></TimerIcon>
              <Typography varient="caption" textAlign={"center"}>
                {" "}
                {cookingDuration} min
              </Typography>
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h5">{price} EGP</Typography>
        <IconButton
          aria-label="delete"
          size="large"
          onClick={() => dispatch(added(meal))}
        >
          <AddToCart fontSize="inherit" />
        </IconButton>
      </CardActions>
    </Card>
  );
}
