import React from "react";
import errorPage from '../assets/svgs/Error 404.svg'
import { Button, Container, Divider, Paper, Typography } from "@mui/material";
import { Grid, Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function PageError() {
  document.title = "page not found";

  return (
    <div>
      {" "}
      <Container sx={{ pb: 5, mb: 5, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center' }} >
        <img src={errorPage} width='600px' />
        <Button
          variant="contained"
          component={Link}
          to={`/Home`}
          sx={{ mt: 0 }}
          size='large'
        >
          Go Home
        </Button>
      </Container>
    </div>
  );
}
