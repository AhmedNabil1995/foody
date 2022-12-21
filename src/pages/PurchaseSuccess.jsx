import { Container, Paper, Typography } from "@mui/material";
import React, { useEffect } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { useSelector } from "react-redux";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function PurchaseSuccess() {
  const numOfItems = useSelector((state) => state.cart.numOfItems);
  let url = process.env.REACT_APP_SERVER_URL;
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  // console.log(numOfItems)

  useEffect(() => {
    async function onlinePayment() {
      const order = {
        methodOfPayment: "stripe",
        meals: numOfItems.map((item) => {
          // console.log(item.meal._id);
          return { meal: item.meal._id, quantity: item.quantity };
        }),
      };
      // console.log(order);

      const response = await axios.post(`${url}orders`, order, { headers: { token: user.token } });
      // console.log(response);
      // onlineURL = response.data.url;

    }
    if (localStorage.getItem('isTrue')) {
      onlinePayment();
      localStorage.removeItem("isTrue")
    }
    // navigate('/Profile/ProfileOrders')
  }, [user])

  return (
    <div>
      <Container>
        <Paper sx={{ my: 30, textAlign: "center" }}>
          <CheckCircleIcon
            sx={{ fontSize: "150px", color: "primary.main" }}
          ></CheckCircleIcon>
          <Typography variant="h2" sx={{ p: 2 }} fontWeight="bold">
            {" "}
            Your order was places succcessfully
          </Typography>
        </Paper>
      </Container>
    </div>
  );
}

export default PurchaseSuccess;
