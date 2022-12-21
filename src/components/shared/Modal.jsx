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
import { Box, Container, Divider, Grid } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";



const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));



const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function Modal({ order }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  const orderData = order.row.renderCell;
  // console.log(orderData);
  let total = 0;
  return (
    <div>
      <IconButton
        aria-label="delete"
        size="mediem"
        color="primary"
        onClick={handleClickOpen}
      >
        <VisibilityIcon fontSize="inherit" />
      </IconButton>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button> */}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth
        maxWidth={"xl"}
      >
        <Box
          sx={{ backgroundColor: "primary.main", p: 2 }}
          id="customized-dialog-title"
          onClose={handleClose}
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
                <Typography>{orderData.user.firstName} {orderData.user.lastName}</Typography>
              </Grid>
              <Grid item md={3}>
                <Typography color={"gray"} variant="h6">
                  Email:
                </Typography>
                <Typography>{orderData.user.email}</Typography>
              </Grid>
              <Grid item md={3}>
                <Typography color={"gray"} variant="h6">
                  Phone:
                </Typography>
                <Typography>{orderData.user.phone}</Typography>
              </Grid>
              <Grid item md={3}>
                <Typography color={"gray"} variant="h6">
                  City:
                </Typography>
                <Typography>{orderData.user.address.city}</Typography>
              </Grid>
              <Grid item md={3}>
                <Typography color={"gray"} variant="h6">
                  Governant:
                </Typography>
                <Typography>{orderData.user.address.area}</Typography>
              </Grid>
              <Grid item md={3}>
                {" "}
                <Typography color={"gray"} variant="h6">
                  Street:
                </Typography>
                <Typography>{orderData.user.address.street}</Typography>
              </Grid>
              <Grid item md={3}>
                <Typography color={"gray"} variant="h6">
                  Building NO.:
                </Typography>
                <Typography>{orderData.user.address.BuildingNumber}</Typography>
              </Grid>
              <Grid item md={3}>
                <Typography color={"gray"} variant="h6">
                  Floor NO.:
                </Typography>
                <Typography>{orderData.user.address.apartmentNumber}</Typography>
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
          <Typography gutterBottom>Card number:XXX-XXX-XXX-7224</Typography>
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
                  {orderData.meals.map((item, index) => {
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
          </Box>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
