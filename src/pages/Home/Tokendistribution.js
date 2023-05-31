import React from "react";
import { Container, Box, Typography, Grid, styled } from "@mui/material";
import Mobileapp from "./Mobileapp";

function Tokendistribution() {
  const Wrapperbox = styled("div")({
    padding: "150px 0px 50px 0px",
    "& h4": {
      paddingBottom: "20px",
      position: "relative",
      "&::after": {
        position: "absolute",
        content: "''",
        width: "80px",
        height: "2px",
        background: "#fff",
        margin: "0 auto",
        bottom: "0px",
        left: "0px",
        right: "0px",
      },
    },
  });
  const Mainbox = styled("div")({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "40px 40px 0px 0px",
    flexWrap:'wrap',
    "@media screen and (max-width:768px)":{
      padding:'20px',
    },
    "& p": {
      marginLeft: "8px",
    },
  });
  const Rightbox = styled("div")({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding:'40px 0px 0px 40px',
    flexWrap:'wrap',
    marginLeft:'20px',
    "@media screen and (max-width:768px)":{
      padding:'0px 15px',
      marginLeft:'0px',
      marginTop:'10px',
    },
    "& p": {
      marginLeft: "8px",
    },
  });

  return (
    <>
    <Wrapperbox>
      <Container>
        <Grid container spacing={2}>
          <Grid itme lg={6} md={6} sm={12} xs={12}>
            <Box align="center">
              <Typography variant="h4">Token Sale Proceeds</Typography>
              <Box pt={5}>
                <img src="/images/token_sale.png" alt="Token-sale" width="80%" />
              </Box>
            </Box>

            <Mainbox>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  sx={{ width: "7px", height: "7px", background: "#f69040" }}
                />

                <Typography variant="body2">Addvisers</Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  sx={{ width: "7px", height: "7px", background: "#78c596" }}
                />

                <Typography variant="body2"> Marketing</Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  sx={{ width: "7px", height: "7px", background: "#f17776" }}
                />

                <Typography variant="body2">Public Sale</Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  sx={{ width: "7px", height: "7px", background: "#0eadc9" }}
                />

                <Typography variant="body2">Pre Sale</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  sx={{ width: "7px", height: "7px", background: "#4241b8" }}
                />

                <Typography variant="body2">Project</Typography>
              </Box>
            </Mainbox>
          </Grid>
          <Grid itme lg={6} md={6} sm={12} xs={12}>
            <Box align="center">
              <Typography variant="h4">Token Distribution</Typography>
              <Box pt={5}>
                <img src="/images/token_distribution.png" alt="Token-sale" width="80%" />
              </Box>
            </Box>

            <Rightbox>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  sx={{ width: "7px", height: "7px", background: "#f69040" }}
                />

                <Typography variant="body2">ICO Sale</Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  sx={{ width: "7px", height: "7px", background: "#0eadc9" }}
                />

                <Typography variant="body2">Build Out</Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  sx={{ width: "7px", height: "7px", background: "#78c596" }}
                />

                <Typography variant="body2">Team & Advisers</Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  sx={{ width: "7px", height: "7px", background: "#4241b8" }}
                />

                <Typography variant="body2">Private Investors</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  sx={{ width: "7px", height: "7px", background: "#f17776" }}
                />

                <Typography variant="body2">Bounty</Typography>
              </Box>
            </Rightbox>
          </Grid>
        </Grid>
      </Container>
    </Wrapperbox>
    <Box mt={4}>
        <Mobileapp/>
    </Box>
    </>
  );
}
export default Tokendistribution;
