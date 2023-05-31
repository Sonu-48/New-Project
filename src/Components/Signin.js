import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  TextField,
  styled,
  InputAdornment,
  IconButton,
  Button,
  FormHelperText,
} from "@mui/material";
import Topbar from "../layouts/HomeLayout/Topbar";
import Footer from "../layouts/HomeLayout/Footer";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Loginbox = styled("div")({
  background:
    "linear-gradient(90deg, rgb(2, 0, 36) 0%, rgba(121, 9, 102, 0.82) 35%, rgb(0, 189, 217) 100%)",
  padding: "50px 30px",
  borderRadius: "30px",
  "& h1": {
    textAlign: "center",
    position: "relative",
    paddingBottom: "20px",
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
  "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
    borderColor: "yellow",
    width: "100%",
    borderRadius: "5px",
    padding: "0px",
    borderWidth: "2px",
  },
  "& .css-18242q4-MuiInputBase-root-MuiOutlinedInput-root": {
    color: "#fff",
    borderColor: "yellow",
    borderRadius: "5px",
    padding: "9px 12px",
  },
  "& .css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input": {
    padding: "0px",
  },
  "& svg": {
    color: "#fff",
  },
  "& .css-19qh8xo-MuiInputBase-input-MuiOutlinedInput-input": {
    padding: "0px",
  },
  "& .css-ckuibs-MuiInputBase-root-MuiOutlinedInput-root": {
    color: "#fff",
    padding: "9px 12px",
    display: "flex",
    alignItems: "center",
  },
});

function Signin() {
  const [showPassword, setShowPassword] = useState(false);
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigate=useNavigate();
  const Userdata={email,password}

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin=()=>{
   if(email!==""){
    if(password!==""){
      localStorage.setItem('UserName',email)
      // localStorage.setItem('password',password);
      // localStorage.setItem('token-info',JSON.stringify(Userdata));
        toast.success("Login Successful")
        navigate('/dashboard')
    }
   }
   else{
   toast.error("Fields are required")
   }
  }

  return (
    <>
      <Topbar />
      <Box style={{ background: "#0c0e27", padding: "200px 0px 100px 0px" }}>
        <Container maxWidth="sm">
          <Loginbox>
            <Typography variant="h1">Signin Page</Typography>
            <Grid container spacing={2}>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <Typography variant="body1">User Name:</Typography>
                <TextField
                  variant="outlined"
                  placeholder="sonu123"
                  size="small"
                  fullWidth
                  autoComplete="off"
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <Typography variant="body1">Password:</Typography>
                <TextField
                  variant="outlined"
                  placeholder="Password"
                  size="small"
                  fullWidth
                  onChange={(e)=>setPassword(e.target.value)}
                  type={showPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleClickShowPassword}>
                          {showPassword ? (
                            <VisibilityIcon />
                          ) : (
                            <VisibilityOffIcon />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
            <Box pt={3} align="center">
                <Button variant="contained" color="primary" onClick={handleLogin} fullWidth>Login</Button>
                <ToastContainer/>
            </Box>
          </Loginbox>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
export default Signin;
