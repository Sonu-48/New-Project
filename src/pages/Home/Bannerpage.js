import React, { useEffect, useState } from "react";
import {
  Container,
  Box,
  Grid,
  Typography,
  Button,
  TextField,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router";
import { MdVisibility } from "react-icons/md";
import { MdVisibilityOff } from "react-icons/md";
import InputAdornment from "@mui/material/InputAdornment";
import QRCode from "react-qr-code";
// import { QRCode } from 'react-qrcode-logo';

function Bannerpage(props) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [fullname,setFullname] = useState("");
  const [email,setEmail] = useState("");
  const [error,setError] = useState("");
  const [token,setToken] = useState();


  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  // const handleChange = (e) => {
  //   setUserinput({ ...userinput, [e.target.name]: e.target.value });
  //   console.log(userinput);
  // };
  const Learnmore = () => {
    navigate("/learnmore");
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    console.log(values);
  };

  // const handleSubmit = async() => {
  //   if(window.ethereum){
  //     try{
  //       const accounts= await window.ethereum.request({
  //         method:"eth_requestAccounts",
  //       })
  //       console.log("accounts",accounts);

  //     }
  //     catch(error){
  //       console.log(error);
  //       setError(error);
  //     }
  //   }
  //   else{
  //     alert("User rejected the request")

  //   }
  //   setUserinput(userdata);
  //   setLoading(true);
  // };

  // const connectMetamast=async()=>{
  //   if(window.ethereum.enable){
  //     try{
  //       const accounts = await window.ethereum.request({
  //         method:"eth_requestAccounts",
          
          
  //       });
  //       console.log("accounts",accounts)
  //       setWalletaddress(accounts[0])        
       
  //     }
  //     catch(error){
  //       console.log(error);
  //     }
  //   }
  //   else{
  //     alert("Meta Mask is not detected")
  //   }
  // }

 const handleSubmit=async(e)=>{
  const data={fullname,email,props,values}
  setLoading(true)
  console.log("data",data)
  fetch("http://localhost:3000/posts",{
    method:'POST',
    headers:{
      'Accept':'application/json',
      'Content-Type':'application/json',
      
    },
    body:JSON.stringify(data)


  }).then((result)=>{
    console.log(result);
    alert("Form has been submitted");
    setLoading(false);
    setFullname("");
    setEmail("")
   setValues({})
  })
 }
  

  return (
    <Box
      style={{
        backgroundImage: "url('/images/banner.png')",
        backgroundSize: "cover",
        padding: "100px 0px 50px 0px",
      }}
    >
      <Container mt={3}>
       
       <Box mt={5}>
       <Grid container spacing={2}>
          <Grid
            item
            lg={7}
            md={7}
            sm={12}
            xs={12}
            display="flex"
            alignItems="center"
          >
            <Box>
              <Typography variant="h2" color="#fff">
                CoinAge
              </Typography>
              <Typography
                variant="h2"
                style={{ padding: "3px 0px" }}
                color="#fff"
              >
                Be your Own Bank
              </Typography>
              <Typography
                variant="h5"
                style={{ padding: "20px 0px" }}
                color="#fff"
              >
                World Most Secure & Easy Way
              </Typography>
              <Box mt={2}>
                <Button variant="contained" color="primary" onClick={Learnmore}>
                  Learn More
                </Button>
              </Box>
              <Box mt={4} style={{ position: "relative" }}>
                <QRCode value="https://www.whatsapp.com/" />
                <img
                  src="/images/whatsapp.png"
                  width="100px"
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: "50%",
                    transform: "translate(-50%,-50%)",
                  }}
                />
              </Box>
              <Box mt={3} pl={2}>
                <Typography variant="h3" color="#ffff">
                  Scan Me
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={5} md={5} sm={12} xs={12}>
            <Box
              style={{
                backgroundImage: "url('/images/login.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                padding: "70px 30px",
                boxShadow: "1.5px 3.99px 27px 0px rgba( 0, 0, 0, 0.1)",
              }}
            >
              <Box align="center" pt={1} pb={3}>
                <Typography variant="h4" color="#fff">
                  GET FREE ACCOUT
                </Typography>
                <Typography variant="h6" pt={2} color="#fff">
                  Register Now !
                </Typography>
              </Box>
              <Box mt={2}>
                <form>
                  <Grid container spacing={2}>
                    <Grid item lg={12} xs={12}>
                      <Typography variant="body" color="blue">Wallet Address</Typography>
                      <TextField variant="outlined"
                      fullWidth
                      placeholder="Wallet Address"
                      value={props.walletaddress}
                      />
                    </Grid>
                    <Grid item lg={12} xs={12}>
                      <TextField
                        variant="outlined"
                        placeholder="Full Name"
                        autoComplete="off"
                        fullWidth
                        name="fullname"
                        value={fullname}
                        onChange={(e)=>setFullname(e.target.value)}
                      />
                    </Grid>
                    <Grid item lg={12} xs={12}>
                      <TextField
                        variant="outlined"
                        placeholder="Email Address"
                        autoComplete="off"
                        fullWidth
                        name="email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                      />
                    </Grid>
                    <Grid item lg={12} xs={12}>
                      <TextField
                        variant="outlined"
                        placeholder="Password"
                        autoComplete="off"
                        type={values.showPassword ? "text" : "password"}
                        fullWidth
                        name="password"
                        // value={userinput.password}
                        // onChange={handleChange}
                        onChange={handlePasswordChange("password")}
                        value={values.password}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton onClick={handleClickShowPassword}>
                                {values.showPassword ? (
                                  <MdVisibility />
                                ) : (
                                  <MdVisibilityOff />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                  </Grid>
                  <Box mt={3} align="center">
                    <Button
                      variant="contained"
                      color="primary"
                      disabled={loading}
                      onClick={handleSubmit}
                    >
                      Create Account
                    </Button>
                    {/* <Typography variant="h5">{setError}</Typography> */}
                  </Box>
                </form>
              </Box>
            </Box>
          </Grid>
        </Grid>
       </Box>
       <Box>
        
       </Box>
      </Container>
    </Box>
  );
}
export default Bannerpage;
