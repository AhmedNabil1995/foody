import React, { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box, Button, Container, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import { Divider } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Fab from "@mui/material/Fab";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

import { useSelector, useDispatch } from "react-redux";
import { added, removed } from "../../features/cart/cartSlice";
import axios from "axios";

function MyCartItems() {
  // let url = process.env.REACT_APP_SERVER_URL;
  // console.log(url);
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  let [isLogin, setIsLogin] = useState(true)
  let [isAddressed, setIsAddressed] = useState(true)
  function checkout() {
    if (user == null) {
      setIsLogin(false)
      setIsAddressed(false)
    }
    else {
      if (typeof user?.address?.city == typeof undefined || user?.address?.city == undefined) {
        setIsAddressed(false)
      }
      else {
        // setIsLogin(true)
        setIsAddressed(true)
        navigate('/PaymentChoise')
      }
    }
  }

  const numOfItems = useSelector((state) => state.cart.numOfItems);
  const dispatch = useDispatch();
  // console.log(numOfItems);
  function goToLogin() {
    navigate("/Login")
  }
  function goToProAddre() {
    navigate("/Profile/Address")
  }
  return (
    <Container sx={{ minHeight: "100vh", mb: 8, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center' }}>
      <Container maxWidth="md" sx={{ mb: 4 }}>
        <Box sx={{ display: "flex", flexDirection: "column", my: "10px" }}>
          <Typography
            variant="h2"
            textAlign="center"
            fontFamily={"serif"}
            fontWeight={"bold"}
            fontStyle={"italic"}
          >
            {" "}
            Shopping Cart{" "}
          </Typography>

          <Typography
            variant="h6"
            textAlign="center"
            alignSelf={"center"}
            className={"reda"}
          >
            Your meal kits
          </Typography>
          <Divider
            color={"primary"}
            variant="middle"
            sx={{ height: 3 }}
          ></Divider>
        </Box>
      </Container>
      <TableContainer component={Paper} sx={{ pb: 1, mb: 3 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="h6">Meal photo</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography variant="h6">Name</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography variant="h6">price/Serving</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography variant="h6">Kits No.</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography variant="h6">Total</Typography>
              </TableCell>
              <TableCell align="left">
                {" "}
                <Typography variant="h6">+ / -</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {numOfItems &&
              numOfItems.map((row, index) => {
                function add() {
                  dispatch(added(row.meal));
                  // console.log("object");
                }
                function remove() {
                  dispatch(removed(row.meal._id));
                  // console.log("object22");
                }
                return (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <img src={row.meal.image} alt="" width={"150px"} />
                    </TableCell>
                    <TableCell align="left">
                      <Typography variant="h6">{row.meal.name}</Typography>
                    </TableCell>
                    <TableCell align="left">
                      <Typography variant="h6">
                        {row.meal.price} / {row.meal.servings}
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ fontSize: 18 }} align="left">
                      {row.quantity}
                    </TableCell>
                    <TableCell sx={{ fontSize: 18 }} align="left">
                      {row.meal.price * row.quantity}
                    </TableCell>
                    <TableCell sx={{ fontSize: 18 }} align="left">
                      {" "}
                      <Fab
                        color="success"
                        aria-label="add"
                        sx={{ mr: 2 }}
                        size="small"
                        onClick={add}
                      >
                        <AddIcon></AddIcon>
                      </Fab>
                      <Fab
                        color="secondary"
                        aria-label="add"
                        size="small"
                        onClick={remove}
                      >
                        <RemoveIcon></RemoveIcon>
                      </Fab>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="contained" onClick={checkout} sx={{ py: 2, px: 4, fontSize: 20, mt: 2, mb: 2 }}>
        {" "}
        Checkout
      </Button>
      {isLogin ?
        (isAddressed ?
          null :
          <Box sx={{ ml: 5, textAlign: "center" }}>
            <h3>Please, add your address first before proceeding the process.</h3>
            <Button variant="outlined" sx={{ my: 5, mt: 0 }} onClick={goToProAddre}>
              Go to Profile
            </Button>
          </Box>) :
        <Box sx={{ ml: 5, textAlign: "center" }}>
          <h3>Please, Register/Login first before proceeding the process.</h3>
          <Button variant="outlined" sx={{ my: 5, mt: 0 }} onClick={goToLogin}>
            Login
          </Button>
        </Box>
      }
    </Container >
  );
}

export default MyCartItems;
