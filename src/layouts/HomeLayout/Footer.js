import React from "react";
import {
  Container,
  Grid,
  Box,
  TextField,
  Typography,
  Button,
  styled,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";
import Copyright from "../../pages/Home/Copyright";

function Footer() {
  const Wrapperbox = styled("div")({
    background: "#121833",
    padding: "100px 0px",
    "& a": {
      color: "#fff",
      textDecoration: "none",
      display: "flex",
      alignItems: "center",
      padding: "5px",
      
      "&:hover":{
        color:'#ff69c9'
      }
    },
    "& svg": {
      color: "#fff",
      fontSize: "15px",
      marginRight:'5px',
    },
    "& h4":{
        position:'relative',
        paddingLeft:'40px',
        "&::before":{
            position:'absolute',
            content:"''",
            width:'30px',
            height:'1px',
            top:'17px',
            left:'0px',
            background:"#fff",
        }
    }
  });
  const Subscribebox = styled("div")({
    background: "#fff",
    borderRadius: "50px",
    padding: "10px 20px",
    display: "flex",
    justifyContent: "space-between",
    "& button": {
      background: "#0c0e27",
      borderRadius: "50px",
      padding: "7px 40px",
    },
  });
  const Headingbox= styled('div')({
    "& p":{
        padding:'35px 0px'
    }
  })
  return (
   
    <>
      <Wrapperbox>
      <Container>
        <Grid container spacing={2}>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Box>
              <img src="/images/logo_light.png" alt="logo" />
            </Box>
            <Box mt={3}>
              <Typography variant="body1">
                Cryptocash stands firmly in support of financial freedom and the
                liberty that Bitcoin provides globally for anyone to voluntarily
                participate in a permissionless and decentralized network.
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <Box pl={3}>
              <Box>
                <Typography variant="h4">QUICK LINKS</Typography>
              </Box>
              <Box mt={6}>
                <NavLink to="">
                  <MdArrowForwardIos />
                  Cryptocash ICO
                </NavLink>

                <NavLink to="">
                  <MdArrowForwardIos />
                  How It Works
                </NavLink>
                <NavLink to="">
                  <MdArrowForwardIos />
                  Tokens
                </NavLink>
                <NavLink to="">
                  <MdArrowForwardIos />
                  FAQ
                </NavLink>
                <NavLink to="">
                  <MdArrowForwardIos />
                  Contact
                </NavLink>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={5} md={5} sm={12} xs={12}>
            <Headingbox>
              <Typography variant="h4">NEWSLETTER</Typography>
              <Typography variant="body1">
                By subscribing to our mailing list you will always be update
                with the latest news from us.
              </Typography>
            </Headingbox>
           
              <Grid container>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <Subscribebox>
                    <Box>
                      <TextField
                        variant="standard"
                        placeholder="Enter Email Address"
                      ></TextField>
                    </Box>

                    <Button variant="contained" color="primary">
                      SUBSCRIBE
                    </Button>
                  </Subscribebox>
                </Grid>
              </Grid>
            
          </Grid>
        </Grid>
      </Container>
      </Wrapperbox>
      <Copyright/>
    </>
   
   
  );
}
export default Footer;
