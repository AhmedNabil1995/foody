import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box, Button, Container, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

function MyEmptyCart() {
  return (
    <Container sx={{ minHeight: "70vh" }}>
      <Paper
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          mt: 10,
        }}
      >
        <ShoppingCartIcon
          sx={{ fontSize: 250 }}
          color="primary"
        ></ShoppingCartIcon>

        <Box
          display={"flex"}
          flexDirection="column"
          alignItems={"center"}
          textAlign="center"
          gap={1}
          m={2}
        >
          <Typography variant="h4" fontFamily="serif" fontWeight={"bold"}>
            Your Shopping Cart is Empty!
          </Typography>
          <Typography variant="body2">
            Before proceed to checkout you must add some items to your shopping
            cart.
          </Typography>
          <Button
            variant="contained"
            component={Link}
            to={`/Menu`}
            sx={{ mt: 2 }}
          >
            Continue Shopping
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default MyEmptyCart;
