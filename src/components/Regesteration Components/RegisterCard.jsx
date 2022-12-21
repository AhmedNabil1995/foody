import { React, useState, useEffect } from "react";
import {
  Container,
  Paper,
  Grid,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Box,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Alert,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import cookImage from "../../assets/svgs/Recipe book-bro.svg";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";


import { userRegister, logout } from '../../features/authenticate/authSlice'
import { useDispatch, useSelector } from "react-redux";
// import spinner from "../layout/spinner";



function RegisterCard() {
  const [values, setValues] = useState({ showPassword: false });
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  let firstNameValidationError = "invalid name !!";
  const [firstNameValideState, setFirstNameValideState] = useState(true);
  const validateFirstName = (e) => {
    const regex = /([a-zA-Z]{3,})/;
    if (regex.test(e.target.value)) {
      setFirstNameValideState(true);
    } else {
      setFirstNameValideState(false);
    }
  };

  let lastNameValidationError = "invalid name !!";
  const [lastNameValideState, setLastNameValideState] = useState(true);
  const validateLastName = (e) => {
    const regex = /([a-zA-Z]{3,})/;
    if (regex.test(e.target.value)) {
      setLastNameValideState(true);
    } else {
      setLastNameValideState(false);
    }
  };

  let emailValidationError = 'invalid email !!';
  const [emailValideState, setEmailValideState] = useState(true);
  const validateEmail = (e) => {
    const regex = /\S+@\S+\.\S+/;
    if (regex.test(e.target.value)) {
      setEmailValideState(true);
    } else {
      setEmailValideState(false);
    }
  };

  let passValidationError = 'invalid password !!';
  const [passValideState, setPassValideState] = useState(true);
  const validatePass = (e) => {
    const regex = /(?=.{5,})/;
    if (regex.test(e.target.value)) {
      setPassValideState(true);
    } else {
      setPassValideState(false);
    }
  };

  const [firstName, setFName] = useState('')
  const [lastName, setLName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPass] = useState('')

  const onChangeFName = (e) => {
    setFName(e.target.value)
    validateFirstName(e);
  }
  const onChangeLName = (e) => {
    setLName(e.target.value)
    validateLastName(e);
  }
  const onChangeEmail = (e) => {
    setEmail(e.target.value)
    validateEmail(e);
  }
  const onChangePass = (e) => {
    setPass(e.target.value)
    validatePass(e);
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      firstName,
      lastName,
      email,
      password,
    }
    // console.log(userData);
    dispatch(userRegister(userData))

    setTimeout(() => {
      dispatch(logout());
      navigate('/Login')
    }, 1000);
  }

  const user = useSelector((state) => state.auth.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { isFetching, error } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (error) {
      // console.log("error 87");
    }

    if (!isFetching) {
      //     // navigate('/')

      // console.log("fetch 93");
    }

  }, [isFetching, error])



  // if (isFetching) {
  //   return <spinner />
  // }





  return (
    <div>
      {" "}
      <Container
        sx={{
          pt: 5,
          pb: 5,
        }}
      >
        <Paper
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 4,
          }}
        >
          <Grid container spacing={2}>
            {" "}
            <Grid
              item
              md={6}
              justify="center"
              display={{ xs: "none", md: "block" }}
            >
              <Box width={"100%"} height={"100%"} sx={{ position: "relative" }}>
                <img src={cookImage} alt="" width={"100%"} height={"100%"} />
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: 50,
                    position: "absolute",
                    top: "40%",
                    left: "38%",
                  }}
                >
                  Foody
                  <RestaurantMenuIcon fontSize={"222px"}></RestaurantMenuIcon>
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h4"
                textAlign="center"
                fontFamily={"serif"}
                fontWeight={"bold"}
                fontStyle={"italic"}
                color="primary.dark"
                pt={3}
              >
                {" "}
                Register
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              ></Box>

              <Container sx={{ my: 3 }} component="form" onSubmit={onSubmit}>
                <Grid
                  Container
                  display={"flex"}
                  flexWrap={"wrap"}
                  justifyContent={"space-between"}
                >
                  <Grid item xs={12} md={5.5}>
                    {" "}
                    <FormControl sx={{ mt: 2 }} fullWidth>
                      <InputLabel htmlFor="FirstName-Field">
                        First Name
                      </InputLabel>
                      <OutlinedInput
                        id="FirstName-Field"
                        label="First Name"
                        value={firstName}
                        onChange={onChangeFName}
                        startAdornment={
                          <InputAdornment position="start">
                            <PersonIcon></PersonIcon>
                          </InputAdornment>
                        }
                      />
                      {!firstNameValideState && (
                        <Alert severity="error" sx={{ mt: 1 }}>
                          {firstNameValidationError}
                        </Alert>
                      )}
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={5.5}>
                    <FormControl sx={{ mt: 2 }} fullWidth>
                      <InputLabel htmlFor="LastName-Field">
                        Last Name
                      </InputLabel>
                      <OutlinedInput
                        id="LastName-Field"
                        label="Last Name"
                        value={lastName}
                        onChange={onChangeLName}
                        startAdornment={
                          <InputAdornment position="start">
                            <PersonIcon></PersonIcon>
                          </InputAdornment>
                        }
                      />
                      {!lastNameValideState && (
                        <Alert severity="error" sx={{ mt: 1 }}>
                          {lastNameValidationError}
                        </Alert>
                      )}
                    </FormControl>
                  </Grid>
                </Grid>

                <FormControl sx={{ mt: 2 }} fullWidth>
                  <InputLabel htmlFor="Email-Field">Email</InputLabel>
                  <OutlinedInput
                    id="Email-Field"
                    label="Email"
                    value={email}
                    onChange={onChangeEmail}
                    startAdornment={
                      <InputAdornment position="start">
                        <PersonIcon></PersonIcon>
                      </InputAdornment>
                    }
                  />
                  {!emailValideState && (
                    <Alert severity="error" sx={{ mt: 1 }}>
                      {emailValidationError}
                    </Alert>
                  )}
                </FormControl>

                <FormControl sx={{ mt: 2 }} fullWidth>
                  <InputLabel htmlFor="Password-Field">Password</InputLabel>
                  <OutlinedInput
                    id="Password-Field"
                    type={values.showPassword ? "text" : "password"}
                    value={password}
                    onChange={onChangePass}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {values.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    startAdornment={
                      <InputAdornment position="start">
                        <LockIcon></LockIcon>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                  {!passValideState && <Alert severity="error" sx={{ mt: 1 }}>
                    {passValidationError}
                  </Alert>}
                </FormControl>
                <FormControl
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button variant="contained" sx={{ my: 5 }} type="sumbit">
                    sign up
                  </Button>
                </FormControl>
                {error && <h2>Please try again .... </h2>}
                {user == null ? null : navigate('/Home')}
              </Container>
              {/* <Grid
                container
                p={2}
                direction="row"
                alignItems="center"
                justifyContent="center"
              >

              </Grid> */}
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
}

export default RegisterCard;
