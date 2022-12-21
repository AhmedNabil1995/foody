import { Button, Container, Paper, Typography } from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import React from "react";
import { Box } from "@mui/system";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function PaymentchoisePage() {
  let url = process.env.REACT_APP_SERVER_URL;
  const numOfItems = useSelector((state) => state.cart.numOfItems);
  const navigate = useNavigate();
  // console.log(numOfItems);
  // let onlineURL = ''
  async function onlinePayment() {
    const order = {
      methodOfPayment: "stripe",
      meals: numOfItems.map((item) => {
        // console.log(item.meal._id);
        return { meal: item.meal._id, quantity: item.quantity };
      }),
    };
    // console.log(order);

    const response = await axios.post(`${url}orders/checkout`, order);
    // console.log(response);
    // onlineURL = response.data.url;
    localStorage.setItem('isTrue', "t")
    window.location.replace(response.data.url);
    // navigate(`/${response.data.url}`)

  }
  async function deliveryPayment() {
    const order = {
      methodOfPayment: "cashOnDelivery",
      meals: numOfItems.map((item) => {
        return { meal: item.meal._id, quantity: item.quantity };
      }),
    };
    // console.log(order);
    const response = await axios.post(`${url}orders/checkout`, order);
    localStorage.setItem('isTrue', "t")

    // console.log(response);
    navigate('/CashOnDelivery')

  }


  return (
    <div>
      <Container sx={{ my: 25 }}>
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            JustifyContent: "center",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Button
            variant="outlined"
            sx={{ width: "80%", mt: 2, p: 5 }}
            onClick={onlinePayment}
          // component={Link}
          // to={`/${onlineURL}`}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 12,
              }}
            >
              <Typography fontWeight={"bold"}>
                use Online Payment Payment Method
              </Typography>
              <CreditCardIcon sx={{ fontSize: "70px" }}></CreditCardIcon>
            </Box>{" "}
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={deliveryPayment}
            sx={{ width: "80%", mb: 2, p: 5 }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 12,
              }}
            >
              <Typography fontWeight={"bold"}>
                use Cash on Delivery Payment Method
              </Typography>
              <LocalShippingIcon sx={{ fontSize: "70px" }}></LocalShippingIcon>
            </Box>
          </Button>
        </Paper>
      </Container>
    </div>
  );
}

export default PaymentchoisePage;
