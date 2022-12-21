import React, { useEffect } from "react";
import { Button, Container } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Modal from "../shared/Modal";

import { getUserOrders } from '../../features/orders/orderSlice'
import { useDispatch, useSelector } from "react-redux";


function ProfileOrders() {
  document.title = "Orders";

  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user)

  useEffect(() => {
    dispatch(getUserOrders({ user }))

  }, [])
  const orders = useSelector((state) => state.orders.orders)

  // console.log(orders);

  const rows = []
  let i = 0;
  orders.forEach((item) => {

    i++;
    rows.push({
      id: i,
      date: item.createdAt,
      status: item.status,
      total: item.amount,
      renderCell: (item)
    })
    // console.log(rows);
  })
  const columns = [
    { field: "id", headerName: "ID", width: 170 },
    { field: "date", headerName: "Date", width: 170 },
    { field: "status", headerName: "Status", width: 170 },
    {
      field: "total",
      headerName: "Total",
      type: "number",
      width: 170,
    },

    {
      field: "Show",
      renderCell: (val) => {
        return <Modal order={val} />;
      },
    }
    // ,
    // {
    //   field: "delete",
    //   renderCell: (cellValues) => {
    //     return (
    //       <IconButton aria-label="delete" size="mediem">
    //         <DeleteIcon fontSize="inherit" />
    //       </IconButton>
    //     );
    //   },
    // },
  ];


  return (
    <Container sx={{ my: 10 }}>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
        <Button></Button>
      </div>
    </Container>
  );
}

export default ProfileOrders;
