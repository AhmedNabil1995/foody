import React, { useState } from "react";
import {
  Button,
  Container,
  Divider,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Box } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import LockIcon from "@mui/icons-material/Lock";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUser, logout } from '../../features/authenticate/authSlice'


function ProfilePssword() {
  document.title = "Change Password";

  const [values, setValues] = useState({ showPassword: false });
  const [password, setPass] = useState("");
  const [password2, setPass2] = useState("");
  const [isChanged, setIsChanged] = useState(false);
  const [isFalse, setIsFalse] = useState(true);

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const onChangePass = (e) => {
    setPass(e.target.value);
    // console.log(password);
  };
  const onChangePass2 = (e) => {
    setPass2(e.target.value);
    // console.log(password2);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const user = useSelector((state) => state.auth.user)
  function userLogout() {
    dispatch(logout())
    navigate('/Login')
    // console.log("User Logout")
  }
  const onSubmit = (e) => {
    e.preventDefault()
    // console.log(user, password);
    if (password == password2) {

      let id = user._id;
      const updatedData = {
        password
      }
      // console.log(updatedData);
      dispatch(updateUser({ user, id, updatedData }))
      // console.log('done');
      setIsFalse(true)
      setIsChanged(true)
    }
    else {
      setIsFalse(false)
      // console.log("false");
      setIsChanged(false)
    }
  }

  return (
    <Container sx={{ my: 10 }}>
      <Paper>
        <Container maxWidth="md">
          <Box sx={{ display: "flex", flexDirection: "column", my: "10px" }}>
            <Typography
              variant="h2"
              textAlign="center"
              fontFamily={"serif"}
              fontWeight={"bold"}
              fontStyle={"italic"}
              mt={2}
            >
              {" "}
              Change Password{" "}
            </Typography>

            <Divider
              color={"primary"}
              variant="middle"
              sx={{ height: 3 }}
            ></Divider>
          </Box>
        </Container>
        <Box
          component="form"
          onSubmit={onSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            mt: 4,
          }}
        >
          <FormControl sx={{ m: 1, width: "50%" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              New Password
            </InputLabel>
            <OutlinedInput
              id="password"
              onChange={onChangePass}
              type={values.showPassword ? "text" : "password"}
              value={password}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: "50%" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Confirm Password
            </InputLabel>

            <OutlinedInput
              id="password2"
              onChange={onChangePass2}
              type={values.showPassword ? "text" : "password"}
              value={password2}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <FormControl
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button variant="contained" sx={{ my: 5 }} type="sumbit">
              Change password
            </Button>
          </FormControl>

        </Box>
        {isChanged ?
          <Box sx={{ ml: 5, textAlign: "center" }}>
            <h3>Password Changed, Please Logout and Sign In</h3>
            <Button variant="outlined" sx={{ my: 5, mt: 0 }} onClick={userLogout}>
              LogOut
            </Button>
          </Box>
          :
          null}
        {!isFalse ? <h2>There is a wrong password, please try again ... </h2> : null}
      </Paper>
    </Container>
  );
}

export default ProfilePssword;
