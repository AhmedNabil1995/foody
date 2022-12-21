import { React, useState, useEffect, useRef } from "react";
import {
  Container,
  Grid,
  Typography,
  Button,
  Divider,
  Box,
  TextField,
} from "@mui/material";
import footerImg from "../../assets/images/background.png";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import MapLocation from "../shared/MapLocation";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Footer(props) {
  const position = [30.550964701276385, 31.009036511610887];
  const form = useRef(null);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const handleForm = (data) => {
    console.log('');
    form.current.reset();
  }
  let isDarkMode = props.isDarkTheme;
  const [isDark, setIsDark] = useState(props.isDarkTheme);
  useEffect(() => {
    if (isDarkMode === true) {
      setIsDark(true);
    }
    if (isDarkMode === false) {
      setIsDark(false);
    }
  });

  return (
    <Box
      sx={{
        backgroundImage: `url(${footerImg})`,
        width: "100%",
        height: { xs: 1450, md: 620 },
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
        backgroundSize: 350,
        backgroundColor: "primary",
        top: "100%",
        bottom: "0",
      }}
      component="footer"
    >
      <Container>
        <Grid
          container
          p={2.5}
          direction="row-reverse"
          justifyContent="center"
          alignItems="baseline"
          spacing={3}
        >
          <Grid item xs={12} md={6} textAlign="center">
            <Grid item xs={12}>
              <Typography
                variant="h4"
                fontFamily={"serif"}
                fontWeight={"bold"}
                fontStyle={"italic"}
              >
                {" "}
                Stay Up To Date
              </Typography>{" "}
            </Grid>
            <Grid item xs={12}>
              <Typography variant="caption">
                Stay up to date with our latest news and meals
              </Typography>{" "}
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} textAlign="center">
            <Grid item xs={12}>
              <Typography
                variant="h4"
                textAlign="center"
                fontFamily={"serif"}
                fontWeight={"bold"}
                fontStyle={"italic"}
              >
                {" "}
                Get Your Meal Kit Now
              </Typography>{" "}
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" component={Link} to={'/Menu'}> Get Cooking</Button>
            </Grid>
          </Grid>
          <Grid item xs={12}></Grid>
        </Grid>
        <Divider color={"white"}></Divider>
        <Grid
          container
          p={2.5}
          justifyContent="center"
          alignItems="start"
          spacing={3}
        >
          <Grid item xs={12} md={4}>
            <Typography sx={{ fontWeight: 600, fontSize: 70 }}>
              Foody
              <RestaurantMenuIcon fontSize={"222px"}></RestaurantMenuIcon>
            </Typography>
            <Typography variant="body2">
              Choose from an ever-changing mix of meat, fish, Beyond Meat™, WW™ Recommended, Diabetes Friendly recipes and health-conscious offerings.
            </Typography>
            <Box my={2} display={"flex"} flexDirection={"column"} gap={2}>
              <Box
                display="flex"
                flexDirection={"row"}
                justifyContent={"start"}
                alignItems={"center"}
                gap={2}
              >
                <LocationOnIcon color="primary"></LocationOnIcon>
                <Typography variant="body2">
                  ITI Menofia Branch Shbeen El Koom
                </Typography>
              </Box>
              <Box
                display="flex"
                flexDirection={"row"}
                justifyContent={"start"}
                alignItems={"center"}
                gap={2}
              >
                <LocalPhoneIcon color="primary"></LocalPhoneIcon>
                <Typography variant="body2" textAlign={"center"}>
                  01062935901
                </Typography>
              </Box>
              <Box
                display="flex"
                flexDirection={"row"}
                justifyContent={"start"}
                alignItems={"center"}
                gap={2}
              >
                <EmailIcon color="primary"></EmailIcon>
                <Typography variant="body2" textAlign={"center"}>
                  <a href="mailto:foody_delicous@kit.com" style={{ textDecoration: "none", color: "inherit" }}>foody_delicous@kit.com</a>
                </Typography>
              </Box>
              <Box display={"flex"} gap={1}>
                <a href="https://www.facebook.com/" style={{ textDecoration: "none", color: "inherit" }} target="_blank"><FacebookIcon /></a>
                <a href="https://www.instagram.com/" style={{ textDecoration: "none", color: "inherit" }} target="_blank"><InstagramIcon /></a>
                <a href="https://twitter.com/" style={{ textDecoration: "none", color: "inherit" }} target="_blank"><TwitterIcon /></a>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h4"
              fontFamily={"serif"}
              fontWeight={"bold"}
              fontStyle={"italic"}
            >
              {" "}
              Feedback
            </Typography>{" "}
            <Typography variant="caption">share your Feedback</Typography>{" "}
            <Box my={2} display={"flex"} flexDirection={"column"} gap={2}>
              {/* form */}
              <form ref={form} onSubmit={handleSubmit((data) => handleForm(data))}>
                <TextField
                  sx={{ mb: 2, width: '100%' }}
                  variant="outlined"
                  label="email"
                  autoComplete="email"
                  {...register('email', {
                    required: 'Required Field',
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "invalid email address"
                    }
                  })}
                  error={!!errors?.email}
                  helperText={errors?.email ? errors.email.message : null}
                />
                <TextField
                  sx={{ mb: 2, width: '100%' }}
                  id="outlined-multiline-static"
                  label="Subject"
                  multiline
                  rows={4}
                  {...register('textArea', {
                    required: 'Required Field',
                    pattern: {
                      value: /.{5,}/gm,
                      message: "invalid Subject"
                    }
                  })}
                  error={!!errors?.textArea}
                  helperText={errors?.textArea ? errors.textArea.message : null}
                />
                <Button variant="contained" type='submit'> submit</Button>
              </form>
              {/* form */}
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h4"
              fontFamily={"serif"}
              fontWeight={"bold"}
              fontStyle={"italic"}
            >
              {" "}
              Our Location
            </Typography>{" "}
            <Typography variant="caption">Main Branch</Typography>{" "}
            <Box my={2} display={"flex"} flexDirection={"column"} gap={2}>
              {/* <button onClick={() => setIsDark((prevState) => !prevState)}>
                Change basemap
              </button> */}

              <MapLocation center={position} zoom={12} darkMode={isDark} />
            </Box>
          </Grid>
        </Grid>
        <Divider color={"white"}></Divider>
        <Grid container p={2.5} spacing={2}>
          <Grid item>
            <Typography variant="caption">
              Copyright © 2022 All Rights Reserved
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
