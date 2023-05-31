import React from "react";
import {
  Container,
  Box,
  Grid,
  Typography,
  Button,
  styled,
} from "@mui/material";
import {AiOutlineArrowRight} from 'react-icons/ai';
import {FaCcVisa,FaCcMastercard,FaPaypal} from 'react-icons/fa';
import {BsCurrencyBitcoin} from 'react-icons/bs';
import Tokendistribution from "./Tokendistribution";

function Tokensale() {
  const Wrapperbox = styled("div")({
    background: "#121833",
    padding: "100px 0px",
   
  });
  const Headingbox= styled('div')({
    textAlign:'center',
    "& h4": {
        paddingBottom: "20px",
        position: "relative",
        "&::after": {
          position: "absolute",
          content: "''",
          bottom: "0px",
          left: "0px",
          right: "0px",
          width: "80px",
          height: "2px",
          background: "#fff",
          margin: "0 auto",
        },
      },
      "& p": {
        paddingTop: "10px",
      },
  })

  const Rightbox = styled("div")({
    textAlign:"center",
    "& h6": {
      color: "#FFCB78",
      fontSize: "1rem",
      
    },
  });
  const Imagebox= styled('div')({
    display:'flex',
    padding:'20px 0px',
    alignItems:'center',
    justifyContent:'center',
    flexWrap:'wrap',
    "& svg":{
        color:'#fff',
        fontSize:'20px',
        marginLeft:'10px'
    }
  })

  return (
    <>
    <Wrapperbox>
      <Container maxWidth="sm">
        <Headingbox align="center">
          <Typography variant="h4">Token Sale</Typography>
          <Typography variant="body1">
            Join the industry leaders to discuss where the markets are heading.
            We accept token payments.
          </Typography>
        </Headingbox>
      </Container>
      <Box pt={5}>
        <Container>
          <Grid container spacing={3}>
            <Grid item lg={3} md={3} sm={12} xs={12} display="flex" alignItems="center" justifyContent="center">
              <Rightbox>
                <Box>
                  <Typography variant="h6">Starting time:</Typography>
                  <Typography variant="body2">
                    APR 23, 2018 (MON 10:00 AM)
                  </Typography>
                </Box>
                <Box mt={4}>
                  <Typography variant="h6">Ending time:</Typography>
                  <Typography variant="body2">
                    JUN 18, 2018 (MON 12:00 PM)
                  </Typography>
                </Box>
                <Box mt={4}>
                  <Typography variant="h6">Tokens exchange rage</Typography>
                  <Typography variant="body2">
                    1 ETH = 820 BCC, 1 BCC = 2150 BCC
                  </Typography>
                </Box>
              </Rightbox>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Box sx={{ background: "#0c0e27",padding:'30px 50px',borderRadius:'10px' }}>
                <Box
                  sx={{
                    background:'#121833',
                    borderRadius: "9px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding:'10px'
                  }}
                >
                  <Box sx={{ padding: "15px" }}>
                    <Typography variant="h4">00 :</Typography>
                    <Typography variant="body2">DAYS</Typography>
                  </Box>
                  <Box sx={{ padding: "15px" }}>
                    <Typography variant="h4">00 :</Typography>
                    <Typography variant="body2">HOURS</Typography>
                  </Box>
                  <Box sx={{ padding: "15px" }}>
                    <Typography variant="h4">00 :</Typography>
                    <Typography variant="body2">MINUTES</Typography>
                  </Box>
                  <Box sx={{ padding: "15px" }}>
                    <Typography variant="h4">00</Typography>
                    <Typography variant="body2">SECONDS</Typography>
                  </Box>
                </Box>
                <Box align="center" mt={4}>
                <Button variant="contained" color="primary" sx={{borderRadius:'40px',backgroundImage:"linear-gradient(to right, #ff67cb 0%,#ffcc67 51%,#ff67cb)",backgroundSize:'200% auto', 
                        color:'#fff',padding:'15px 30px'}} endIcon={<AiOutlineArrowRight/>}>BUY TOKENS</Button>
                </Box>
                <Imagebox>
                    <FaCcVisa/>
                    <FaCcMastercard/>
                    <BsCurrencyBitcoin/>
                    <FaPaypal/>
                    
                </Imagebox>
              </Box>
            </Grid>

            <Grid item lg={3} md={3} sm={12} xs={12} display="flex" alignItems="center" justifyContent="center">
            <Rightbox>
                <Box>
                  <Typography variant="h6">Low -High 24h :</Typography>
                  <Typography variant="body2">
                  $ 6,455.83 - $ 7,071.42
                  </Typography>
                </Box>
                <Box mt={4}>
                  <Typography variant="h6">Total tokens sale</Typography>
                  <Typography variant="body2">
                  850,000 BCC (8%)
                  </Typography>
                </Box>
                <Box mt={4}>
                  <Typography variant="h6">Acceptable Currency :</Typography>
                  <Typography variant="body2">
                  BTC, ETH, LTC, XRP
                  </Typography>
                </Box>
              </Rightbox>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Wrapperbox>
    <Box>
        <Tokendistribution/>
    </Box>
    </>
  );
}
export default Tokensale;
