import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  InputLabel,
  OutlinedInput,
  Paper,
  Typography,
} from "@mui/material";
import CustomMap from "../shared/CustomMap";
// import MapLocation from "../shared/MapLocation";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUser, logout } from "../../features/authenticate/authSlice";

function ProfileAddresses(props) {
  document.title = "Profile Address";

  // console.log(props.isDarkTheme);
  const locateOptions = {
    position: "topright",
    strings: {
      title: "Show me where I am, yo!",
    },
    onActivate: () => { }, // callback before engine starts retrieving locations
  };
  const position = [30.550964701276385, 31.009036511610887];

  let isDarkMode = props.isDarkTheme;
  const [isDark, setIsDark] = useState(props.isDarkTheme);
  useEffect(() => {
    if (isDarkMode === true) {
      setIsDark(true);
    }
    if (isDarkMode === false) {
      setIsDark(false);
    }
  }, [isDarkMode]);

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const user = useSelector((state) => state.auth.user);

  const [street, setStreet] = useState(user?.address?.street)
  const [city, setCity] = useState(user?.address?.city)
  const [area, setCountry] = useState(user?.address?.area)
  const [BuildingNumber, setBN] = useState(user?.address?.BuildingNumber)
  const [floorNumber, setFlNo] = useState(user?.address?.floorNumber)
  const [apartmentNumber, setAN] = useState(user?.address?.apartmentNumber)
  const [isChanged, setIsChanged] = useState(false);


  const onChangeStreet = (e) => {
    setStreet(e.target.value);
    // console.log(street);
  };
  const onChangeCity = (e) => {
    setCity(e.target.value);
    // console.log(city);
  };
  const onChangeCountry = (e) => {
    setCountry(e.target.value);
    // console.log(country);
  };
  const onChangeBN = (e) => {
    setBN(e.target.value);
    // console.log(BN);
  };
  const onChangeFlNo = (e) => {
    setFlNo(e.target.value);
    // console.log(flNo);
  };
  const onChangeAN = (e) => {
    setAN(e.target.value);
    // console.log(AN);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let id = user._id;
    const address = {
      apartmentNumber,
      floorNumber,
      BuildingNumber,
      street,
      area,
      city,
    };
    console.log(address)
    const updatedData = {
      address
    };
    console.log(updatedData);
    dispatch(updateUser({ user, id, updatedData }))
    console.log('done');
    setIsChanged(true)
  }
  function userLogout() {
    dispatch(logout())
    navigate('/Login')
    // console.log("User Logout")
  }
  // let datainfo = {
  //   street,
  //   city,
  //   area
  // }

  // console.log(datainfo);
  return (
    <Container sx={{ my: 10 }}>
      <Paper sx={{ p: 2, pb: 8 }}>
        <Box sx={{ display: "flex", flexDirection: "column", p: 2 }}>
          <Typography
            variant="h3"
            textAlign="center"
            fontFamily={"serif"}
            fontWeight={"bold"}
            fontStyle={"italic"}
            mr={5}
          >
            User Adress information
          </Typography>

          <Divider
            color={"primary"}
            variant="middle"
            sx={{ height: 3 }}
          ></Divider>
        </Box>

        <Container
          component="form"
          onSubmit={onSubmit}
          sx={{ my: 2 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 3,
            }}
          >
            <FormControl fullWidth>
              <InputLabel htmlFor="street-Field">Street</InputLabel>
              <OutlinedInput
                id="street-Field"
                label="area"
                onChange={onChangeStreet}
                value={street}

              />
            </FormControl>
            <FormControl fullWidth>
              <InputLabel htmlFor="area-Field">City</InputLabel>
              <OutlinedInput
                id="area-Field"
                label="area"
                onChange={onChangeCity}
                value={city}

              />
            </FormControl>
            <FormControl fullWidth>
              <InputLabel htmlFor="area-Field">Area</InputLabel>
              <OutlinedInput
                id="area-Field"
                label="area"
                onChange={onChangeCountry}
                value={area}

              />
            </FormControl>
            <FormControl fullWidth>
              <InputLabel htmlFor="area-Field">Building Number</InputLabel>
              <OutlinedInput
                id="area-Field"
                label="area"
                value={BuildingNumber}
                onChange={onChangeBN}
              />
            </FormControl>
            <FormControl fullWidth>
              <InputLabel htmlFor="area-Field">Floor Number</InputLabel>
              <OutlinedInput
                id="area-Field"
                label="area"
                value={floorNumber}
                onChange={onChangeFlNo}
              />
            </FormControl>
            <FormControl fullWidth>
              <InputLabel htmlFor="area-Field">Apartment Number</InputLabel>
              <OutlinedInput
                id="area-Field"
                label="area"
                value={apartmentNumber}
                onChange={onChangeAN}
              />
            </FormControl>
            <FormControl sx={{ mt: 2 }}>
              <Button variant="contained" type="sumbit">
                {" "}
                Submit
              </Button>
            </FormControl>
          </Box>
          {isChanged ?
            <Box sx={{ ml: 5, textAlign: "center" }}>
              <h3>The Address Changed, Please Logout and Sign In</h3>
              <Button variant="outlined" sx={{ my: 5, mt: 0 }} onClick={userLogout}>
                LogOut
              </Button>
            </Box>
            :
            null}
        </Container>
        <CustomMap center={position} darkMode={isDark} />
      </Paper>
    </Container>
  );
}

export default ProfileAddresses;
