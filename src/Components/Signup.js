import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  Button,
  TextField,
  Select,
  MenuItem,
  styled,
  FormControl,
  FormHelperText,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Topbar from "../layouts/HomeLayout/Topbar";
import Footer from "../layouts/HomeLayout/Footer";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
// import Web3 from 'web3';
import Web3 from "web3";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const handleSubmit = Yup.object().shape({
  firstname: Yup.string()
    .min(2, "Too Short!")
    .max(10, "Too Long!")
    .matches(
      "([A-Z][a-z]*)([\\s\\'-][A-Z][a-z]*)*",
      "only alphabhets are allow"
    )
    .required("this field is mandatory"),
  lastname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .matches(
      "([A-Z][a-z]*)([\\s\\'-][A-Z][a-z]*)*",
      "only alphabhets are allow"
    )
    .required("this field is mandatory"),
  email: Yup.string()
    .email("Invalid email")
    .required("this field is mandatory"),
  password: Yup.string()
    .required('Invalid password')
    .min(6,"too short password"),
  walletid: Yup.string()
    // .min(25, "too short wallet id")
    // .max(45, "too long wallet id")
    // .matches('(accounts)')
    .required("walled id is mandatory"),
  referralid: Yup.string()
    .min(5, "too short referral id")
    .max(20, "too long referral id")
    .required("referral id is mandatory"),
  country: Yup.string().required("country is mandatory"),
});

const Signupbox = styled("div")({
  background: "#0c0e27",
  padding: "150px 0px",
  "& h1": {
    position: "relative",
    padding: "20px",
    textAlign: "center",
    "&::after": {
      position: "absolute",
      content: "''",
      width: "80px",
      height: "2px",
      background: "#ffff",
      bottom: "0px",
      right: "0px",
      left: "0px",
      margin: "0 auto",
    },
  },
  "& p": {
    color: "#ff69c9",
  },
  "& input::placeholder": {
    color: "#ffff",
    // opacity: "1",
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
    padding: "9px 12px",
  },
  "& .css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input": {
    padding: "0px",
  },
  "& .css-jedpe8-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-jedpe8-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-jedpe8-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
    {
      paddingRight: "0px",
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

function Signup() {
  const [walletid, setWalletid] = useState("");
  const [loading, setLoading] = useState(false);
  const [balance, setBalance] = useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // Create a web3 instance
  const web3 = new Web3(window.ethereum);

  // const web3 = new Web3(window.ethereum);

  // const connectMetamask = async () => {
  //   if (window.ethereum.enable) {
  //     try {
  //       const accounts = await window.ethereum.request({
  //         method: "eth_requestAccounts",

  //       });
  //       setWalletid(accounts[0])
  //       console.log(walletid)
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  // };

  // const connectMetamask=()=>{
  //   if(window.ethereum){
  //     window.ethereum.request({method:'eth_requestAccounts'})
  //     .then((accounts)=>{
  //       console.log(accounts)
  //       setWalletid(accounts[0])
  //     })

  //   }
  //   else{
  //     alert("Please Install Metamask Extension");
  //   }
  // }

  const connectMetamask = () => {
    // toast.success('Welcome in Metamask!')
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })

        .then(() => {
          console.log("Connect Metamask!");
          getWalletAddress();
        });
    } else {
      // alert("install metamask?")
      toast.info("Please install metamask!");
    }
  };
  const getWalletAddress = async () => {
    try {
      const accounts = await web3.eth.getAccounts();
      setWalletid(accounts[0]);
      const balanceWei = await web3.eth.getBalance(accounts[0]);
      const balanceEth = web3.utils.fromWei(balanceWei, "ether");
      setBalance(balanceEth);
      console.log("Wallet Address:", accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };
  const submitForm = (values, { resetForm }) => {
    console.log(values);

    setLoading(true);
    fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    }).then((result) => {
      console.log(result);
      toast.success("Form has been sumitted!");
      // alert("Form has been submitted");
      setLoading(false);
      resetForm({ values: "" });
      navigate("/login");
    });
  };

  return (
    <>
      <Topbar />
      <Signupbox>
        <Container>
          <Box mb={5}>
            <Typography variant="h1">SignUp Page</Typography>
          </Box>
          <Formik
            initialValues={{
              firstname: "",
              lastname: "",
              email: "",
              password:"",
              walletid: "walletid",
              referralid: "",
              country: "",
            }}
            validationSchema={handleSubmit}
            onSubmit={submitForm}
          >
            {({ errors, touched, handleBlur, handleChange, values }) => (
              <Form>
                <Grid container spacing={2}>
                  <Grid
                    item
                    lg={6}
                    md={6}
                    sm={12}
                    xs={12}
                    display="flex"
                    alignItems="center"
                  >
                    <Box pr={4}>
                      <img
                        src="images/banner-img2.png"
                        alt="image"
                        width="100%"
                      />
                    </Box>
                  </Grid>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Grid container spacing={2}>
                      <Grid item lg={12} md={12} sm={12} xs={12}>
                        {/* <Typography variant="body2">
                          walled id: {walletid.slice(0, 4)}...
                          {walletid.slice(38, 42)}
                        </Typography> */}
                        {/* <Typography variant="body2">
                          Balance: {balance}
                        </Typography> */}

                        <Typography variant="body1">
                          Wallet Id <sup style={{ color: "red" }}>*</sup>
                        </Typography>
                        <TextField
                          variant="outlined"
                          placeholder="Wallet Id"
                          fullWidth
                          autoComplete="off"
                          size="small"
                          name="walletid"
                          value={walletid}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={Boolean(touched.walletid && errors.walletid)}
                        />
                        <FormHelperText error>
                          {touched.walletid && errors.walletid}
                        </FormHelperText>
                      </Grid>
                      <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Typography variant="body1">
                          Referral Id <sup style={{ color: "red" }}>*</sup>
                        </Typography>
                        <TextField
                          variant="outlined"
                          placeholder="Referral id"
                          fullWidth
                          autoComplete="off"
                          size="small"
                          value={values.referralid}
                          name="referralid"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={Boolean(
                            touched.referralid && errors.referralid
                          )}
                        />
                        <FormHelperText error>
                          {touched.referralid && errors.referralid}
                        </FormHelperText>
                      </Grid>
                      <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Typography variant="body1">
                          First Name <sup style={{ color: "red" }}>*</sup>
                        </Typography>
                        <TextField
                          variant="outlined"
                          placeholder="First Name"
                          fullWidth
                          autoComplete="off"
                          size="small"
                          name="firstname"
                          value={values.firstname}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={Boolean(touched.firstname && errors.firstname)}
                        />
                        <FormHelperText error>
                          {touched.firstname && errors.firstname}
                        </FormHelperText>
                      </Grid>
                      <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Typography variant="body1">
                          Last Name <sup style={{ color: "red" }}>*</sup>
                        </Typography>
                        <TextField
                          variant="outlined"
                          placeholder="Last Name"
                          fullWidth
                          autoComplete="off"
                          size="small"
                          name="lastname"
                          value={values.lastname}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={Boolean(touched.lastname && errors.lastname)}
                        />
                        <FormHelperText error>
                          {touched.lastname && errors.lastname}
                        </FormHelperText>
                      </Grid>
                      <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Typography variant="body1">
                          Email Id <sup style={{ color: "red" }}>*</sup>
                        </Typography>
                        <TextField
                          variant="outlined"
                          placeholder="sonu@gmail.com"
                          fullWidth
                          autoComplete="off"
                          size="small"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={Boolean(touched.email && errors.email)}
                        />
                        <FormHelperText error>
                          {touched.email && errors.email}
                        </FormHelperText>
                      </Grid>
                      <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Typography variant="body1">
                          Password <sup style={{ color: "red" }}>*</sup>
                        </Typography>
                        <TextField
                          variant="outlined"
                          placeholder="Password"
                          size="small"
                          fullWidth
                          name="password"
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={Boolean(touched.password && errors.password)}
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
                        <FormHelperText error>
                          {touched.password && errors.password}
                        </FormHelperText>
                      </Grid>
                      <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Typography variant="body1">
                          Select Country <sup style={{ color: "red" }}>*</sup>
                        </Typography>
                        <FormControl fullWidth>
                          <Select
                            size="small"
                            name="country"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={Boolean(touched.country && errors.country)}
                            value={values.country}
                          >
                            {/* <MenuItem value={country}>Country</MenuItem> */}
                            <MenuItem value="India">India</MenuItem>
                            <MenuItem value="UK">UK</MenuItem>
                            <MenuItem value="US">US</MenuItem>
                          </Select>
                        </FormControl>
                        <FormHelperText error>
                          {touched.country && errors.country}
                        </FormHelperText>
                      </Grid>
                    </Grid>
                    <Box mt={3}>
                      <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        type="submit"
                        onClick={connectMetamask}
                        disabled={loading}
                      >
                        Register
                      </Button>
                      <ToastContainer />
                    </Box>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </Container>
      </Signupbox>
      <Footer />
    </>
  );
}
export default Signup;
