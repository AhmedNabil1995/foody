import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Box, Button, Container, Divider, Grid } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function CashOnDeliveryPayment() {
  let url = process.env.REACT_APP_SERVER_URL;
  const numOfItems = useSelector((state) => state.cart.numOfItems);
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);


  let total = 0;
  function cash() {
    async function onlinePayment() {
      const order = {
        methodOfPayment: "cashOnDelivery",
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
      alert('Order Applied')
      navigate("/Home")
    }
  }
  return (
    <Box>
      {" "}
      <Box
        sx={{ backgroundColor: "primary.main", p: 2 }}
        id="customized-dialog-title"
      >
        <Typography color={"white"} variant="h4" fontFamily={"serif"}>
          Order
        </Typography>
      </Box>
      <DialogContent dividers>
        <Typography
          gutterBottom
          fontFamily={"serif"}
          fontWeight="bold"
          variant="h5"
        >
          Delivery Address
        </Typography>
        <Divider sx={{ mx: 2, my: 2 }}></Divider>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Grid container sx={{ display: "flex" }} spacing={4}>
            <Grid item md={3}>
              <Typography color={"gray"} variant="h6">
                Full Name:
              </Typography>
              <Typography>{user.firstName} {user.lastName}</Typography>
            </Grid>
            <Grid item md={3}>
              <Typography color={"gray"} variant="h6">
                Email:
              </Typography>
              <Typography>{user.email}</Typography>
            </Grid>
            <Grid item md={3}>
              <Typography color={"gray"} variant="h6">
                Phone:
              </Typography>
              <Typography>{user.phone}</Typography>
            </Grid>
            <Grid item md={3}>
              <Typography color={"gray"} variant="h6">
                City:
              </Typography>
              <Typography>{user.address.city}</Typography>
            </Grid>
            <Grid item md={3}>
              <Typography color={"gray"} variant="h6">
                Governant:
              </Typography>
              <Typography> {user.address.area}</Typography>
            </Grid>
            <Grid item md={3}>
              {" "}
              <Typography color={"gray"} variant="h6">
                Street:
              </Typography>
              <Typography>{user.address.street} </Typography>
            </Grid>
            <Grid item md={3}>
              <Typography color={"gray"} variant="h6">
                Building NO.:
              </Typography>
              <Typography>{user.address.BuildingNumber}</Typography>
            </Grid>
            <Grid item md={3}>
              <Typography color={"gray"} variant="h6">
                Floor NO.:
              </Typography>
              <Typography>{user.address.floorNumber}</Typography>
            </Grid>
          </Grid>
        </Box>
        <Typography
          gutterBottom
          fontFamily={"serif"}
          fontWeight="bold"
          variant="h5"
          sx={{ mt: 2 }}
        >
          Payment Method
        </Typography>
        <Divider sx={{ mx: 2, my: 2 }}></Divider>
        <Typography gutterBottom>Cash On Delivery</Typography>
        <Typography
          gutterBottom
          fontFamily={"serif"}
          fontWeight="bold"
          variant="h5"
          sx={{ mt: 2 }}
        >
          Shopping Cart
          <Divider sx={{ mx: 2, my: 2 }}></Divider>{" "}
        </Typography>

        <Box mx={2}>
          <TableContainer>
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>
                    {" "}
                    <Typography color={"gray"} variant="h6">
                      Image
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    {" "}
                    <Typography color={"gray"} variant="h6">
                      Name
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    {" "}
                    <Typography color={"gray"} variant="h6">
                      Price
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    {" "}
                    <Typography color={"gray"} variant="h6">
                      Quantity
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    {" "}
                    <Typography color={"gray"} variant="h6">
                      Total
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {numOfItems.map((item, index) => {
                  total += item.meal.price * item.quantity;
                  return (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row">
                        <img src={item.meal.image} alt="" width={"100px"} />
                      </TableCell>
                      <TableCell align="right">{item.meal.name}</TableCell>
                      <TableCell align="right">
                        {" "}
                        <Typography
                          variant="h6"
                          fontWeight={"bolder"}
                          color="primary"
                        >
                          EGP {item.meal.price}
                        </Typography>
                      </TableCell>
                      <TableCell align="right">{item.quantity}</TableCell>
                      <TableCell align="right">
                        <Typography
                          variant="h6"
                          fontWeight={"bolder"}
                          color="primary"
                        >
                          EGP {item.meal.price * item.quantity}
                        </Typography>
                      </TableCell>
                    </TableRow>

                  )
                })}
              </TableBody>
            </Table>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="flex-end"
            >
              <Grid item xs={12}>
                <Typography variant="h6">SubTotal: EGP {total}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6">Discount: 0 %</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h5" fs>
                  Grand total:{" "}
                  <Typography
                    fontWeight={"bold"}
                    component={"span"}
                    color="primary"
                    fontSize={"larger"}
                  >
                    {" "}
                    EGP {total}
                  </Typography>
                </Typography>
              </Grid>
            </Grid>
          </TableContainer>
          <Box
            sx={{ mb: 10, textAlign: "center" }} >
            <Button
              variant="contained"
              onClick={cash}
            >
              {" "}
              Apply
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Box>
  );
}

export default CashOnDeliveryPayment;
