import React from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  TextField,
  Button,
  styled,
  Link,
  IconButton,
} from "@mui/material";
import { MdLocationPin } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import {
  AiOutlineMail,
  AiOutlineGooglePlus,
  AiOutlineArrowRight,
} from "react-icons/ai";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaLinkedinIn,
} from "react-icons/fa";
import Footer from "../../layouts/HomeLayout/Footer";

function Getintouch() {
  const Wrapperbox = styled("div")({
    padding: "100px 0px",
    "& h6": {
      fontSize: "18px",
    },
    "& h4": {
      padding: "15px",
      position: "relative",
      "&::after": {
        position: "absolute",
        content: "''",
        width: "80px",
        height: "2px",
        background: "#fff",
        bottom: "0px",
        left: "0px",
        right: "0px",
        margin: "0 auto",
      },
    },
  });
  const Contactbox = styled("div")({
    background: "#121833",
    padding: "30px 20px",
    "& h3": {
      fontWeight: 600,
      paddingBottom: "15px",
    },
    "& p": {
      lineHeight: "25px",
      paddingBottom: "10px",
    },
  });
  const Addressbox = styled("div")({
    display: "flex",
    alignItems: "start",
    marginTop: "10px",
  });
  const Iconbox = styled("div")({
    border: "1px solid #fff",
    borderRadius: "50%",
    height: "46px",
    width: "46px",
    textAlign: "center",
    "& svg": {
      color: "#fff",
      fontSize: "26px",
      padding: "10px",
    },
  });
  const IconButton = styled("div")({
    background: "#fff",
    borderRadius: "100%",
    height: "30px",
    width: "30px",
    textAlign: "center",
    marginLeft: "8px",

    "& a": {
      color: "#000",
    },
    "& svg": {
      padding: "7px",
      "&:hover": {
        color: "#ff69c9",
      },
    },
  });
  const Textfieldbox = styled("div")({
    "& input::placeholder": {
      color: "#ffff",
      opacity:'2'
      
    },
    
    "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
      borderColor: "#fff",
      width: "100%",
      borderRadius: "5px",
      padding: "0px",
    
    },
    "& .css-18242q4-MuiInputBase-root-MuiOutlinedInput-root": {
      color: "#fff",
      borderColor: "#fff",
      borderRadius: "5px",
     
    },
   
    "& .css-1sqnrkk-MuiInputBase-input-MuiOutlinedInput-input": {
      color: "#fff",
      padding: "10px",
    },
  });
  return (
    <>
    <Wrapperbox>
      <Container maxWidth="md">
        <Box align="center">
          <Typography variant="h4">Get In Touch</Typography>
        </Box>
        <Box mt={5}>
          <Grid container spacing={4}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Contactbox>
                <Typography variant="h3">Connect With Us</Typography>
                <Typography variant="body1">
                  Our office is located in a beautiful building and garden
                </Typography>
                <Addressbox>
                  <Iconbox>
                    <MdLocationPin />
                  </Iconbox>
                  <Box ml={2}>
                    <Typography variant="body1">ADDRESS</Typography>
                    <Typography variant="body2">
                      22 International Division Via G.B. Pirelli
                    </Typography>
                  </Box>
                </Addressbox>

                <Addressbox>
                  <Iconbox>
                    <BsTelephoneFill />
                  </Iconbox>
                  <Box ml={2}>
                    <Typography variant="body1">PHONE</Typography>
                    <Typography variant="body2">+23 0123 4567</Typography>
                  </Box>
                </Addressbox>

                <Addressbox>
                  <Iconbox>
                    <AiOutlineMail />
                  </Iconbox>
                  <Box ml={2}>
                    <Typography variant="body1">EMAIL-ID</Typography>
                    <Typography variant="body2">Yourmail@gmail.com</Typography>
                  </Box>
                </Addressbox>
                <Box
                  mt={1}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant="h6">FOLLOWS US</Typography>

                  <Box display="flex" alignItems="center">
                    <IconButton>
                      <Link href="">
                        <FaFacebookF />
                      </Link>
                    </IconButton>
                    <IconButton>
                      <Link href="">
                        <FaTwitter />
                      </Link>
                    </IconButton>
                    <IconButton>
                      <Link href="">
                        <AiOutlineGooglePlus />
                      </Link>
                    </IconButton>
                    <IconButton>
                      <Link href="">
                        <FaPinterestP />
                      </Link>
                    </IconButton>
                    <IconButton>
                      <Link href="">
                        <FaLinkedinIn />
                      </Link>
                    </IconButton>
                  </Box>
                </Box>
              </Contactbox>
            </Grid>
            <Grid
              item
              lg={6}
              md={6}
              sm={12}
              xs={12}
              display="flex"
              alignItems="center"
            >
              <Textfieldbox>
                <Grid container spacing={2}>
                  <Grid item lg={12} xs={12}>
                    <TextField
                      variant="outlined"
                      placeholder="Enter Name *"
                      size="small"
                      autoComplete="off"
                      fullWidth
                    />
                  </Grid>
                  <Grid item lg={12} xs={12}>
                    <TextField
                      variant="outlined"
                      placeholder="Enter Email *"
                      size="small"
                      autoComplete="off"
                      fullWidth
                    />
                  </Grid>
                  <Grid item lg={12} xs={12}>
                    <TextField
                      variant="outlined"
                      placeholder="Enter Subject *"
                      size="small"
                      autoComplete="off"
                      fullWidth
                    />
                  </Grid>
                  <Grid item lg={12} xs={12}>
                    <TextField
                      variant="outlined"
                      placeholder="Message *"
                      fullWidth
                      multiline
                      rows={4}
                      style={{ color: "#fff",opacity:'22' }}
                    />
                  </Grid>
                  <Grid item lg={12} xs={12}>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      sx={{
                        borderRadius: "40px",
                        backgroundImage:
                          "linear-gradient(to right, #ff67cb 0%,#ffcc67 51%,#ff67cb)",
                        backgroundSize: "200% auto",
                        color: "#fff",
                        padding: "15px 30px",
                      }}
                      endIcon={<AiOutlineArrowRight />}
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </Textfieldbox>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Wrapperbox>
    {/* <Box mt={2}>
      <Footer/>
    </Box> */}
    </>
  );
}
export default Getintouch;
