import React, { useRef } from "react";
import {
  Container,
  Paper,
  Grid,
  Typography,
  Button,
  Divider,
  FormControl,
  InputLabel,
  Box,
  OutlinedInput,
  TextField,
} from "@mui/material";
import sideImage from "../../assets/svgs/contact us.svg";
import BusinessIcon from "@mui/icons-material/Business";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { useForm } from "react-hook-form";

function MyContactCard() {
  const form = useRef(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleForm = (data) => {
    console.log("");
    form.current.reset();
  };
  return (
    <div>
      {" "}
      <Container
        sx={{
          pt: 5,
          pb: 5,
        }}
      >
        {/* sx={{ my: "50px", py: "50px" }} */}
        <Container maxWidth="md">
          <Box sx={{ display: "flex", flexDirection: "column", my: "10px" }}>
            <Typography
              variant="h2"
              textAlign="center"
              fontFamily={"serif"}
              fontWeight={"bold"}
              fontStyle={"italic"}
            >
              {" "}
              Contact Us
            </Typography>

            <Typography variant="h6" textAlign="center" alignSelf={"center"}>
              Got A Question? We'll Answer
            </Typography>
            <Divider
              color={"primary"}
              variant="middle"
              sx={{ height: 3 }}
            ></Divider>
          </Box>
        </Container>
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
            <Grid item xs={12} md={4} textAlign="center" mt={2}>
              <BusinessIcon color="primary" fontSize="large">
                {" "}
              </BusinessIcon>
              <Typography variant="h5" color={"primary.light"}>
                Address:
              </Typography>
              <Typography variant="h6">
                ITI Menofia Branch Shbien Al Kom,Almenofia
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} textAlign="center" mt={2}>
              <PhoneIcon color="primary" fontSize="large">
                {" "}
              </PhoneIcon>
              <Typography variant="h5" color={"primary.light"}>
                Phones:
              </Typography>
              <Typography variant="h6">(040) 3558194</Typography>
              <Typography variant="h6">(+20) 1062935901</Typography>
            </Grid>
            <Grid item xs={12} md={4} textAlign="center" mt={2}>
              <EmailIcon color="primary" fontSize="large">
                {" "}
              </EmailIcon>
              <Typography variant="h5" color={"primary.light"}>
                E-mail:
              </Typography>
              <Typography variant="h6">
                <a href="mailto:foody_delicous@kit.com" style={{ textDecoration: "none", color: "inherit" }}>foody_delicous@kit.com</a>
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} justify="center">
              <img src={sideImage} alt="" width={"100%"} height={"100%"} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                textAlign="center"
                fontFamily={"serif"}
                fontWeight={"bold"}
                fontStyle={"italic"}
                color="primary.dark"
              >
                {" "}
                Get In Touch
              </Typography>
              <Container sx={{ my: 2 }}>
                {/* form section  =============   */}
                <form
                  ref={form}
                  onSubmit={handleSubmit((data) => handleForm(data))}
                >
                  {/* Name input field ====  */}
                  <TextField
                    sx={{ mb: 2, width: "100%" }}
                    variant="outlined"
                    label="name"
                    autoComplete="name"
                    {...register("name", {
                      required: "Required Field",
                      pattern: {
                        value: /^[a-zA-Z ]{3,20}$/gm,
                        // only contain charachters and space, and length from 3 to 20 letters
                        message: "invalid name (only contain charachters and space, and length from 3 to 20 letters)",
                      },
                    })}
                    error={!!errors?.name}
                    helperText={errors?.name ? errors.name.message : null}
                  />
                  {/* Email input field ====  */}
                  <TextField
                    sx={{ mb: 2, width: "100%" }}
                    variant="outlined"
                    label="eamil"
                    autoComplete="email"
                    {...register("email", {
                      required: "Required Field",
                      pattern: {
                        // email must be in the form like ahmed@gmail.com
                        value: /\S+@\S+\.\S+/,
                        message: "invalid email address (must be in the form like ahmed@gmail.com)",
                      },
                    })}
                    error={!!errors?.email}
                    helperText={errors?.email ? errors.email.message : null}
                  />
                  {/* Phone input field ====  */}
                  <TextField
                    sx={{ mb: 2, width: "100%" }}
                    variant="outlined"
                    label="phone"
                    autoComplete="phone"
                    {...register("phone", {
                      required: "Required Field",
                      pattern: {
                        // egyption phone number
                        value: /^01[0125][0-9]{8}$/gm,
                        message: "invalid phone number",
                      },
                    })}
                    error={!!errors?.phone}
                    helperText={errors?.phone ? errors.phone.message : null}
                  />
                  {/* Subject input field ====  */}
                  <TextField
                    sx={{ mb: 2, width: "100%" }}
                    id="outlined-multiline-static"
                    label="Subject"
                    multiline
                    rows={4}
                    {...register("textArea", {
                      required: "Required Field",
                      pattern: {
                        // subject must have at lest 5 charachter
                        value: /.{5,}/gm,
                        message: "invalid Subject ( must have at lest 5 charachter)",
                      },
                    })}
                    error={!!errors?.textArea}
                    helperText={
                      errors?.textArea ? errors.textArea.message : null
                    }
                  />
                  <Button variant="contained" type="submit">
                    {" "}
                    submit
                  </Button>
                </form>
              </Container>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
}

export default MyContactCard;
