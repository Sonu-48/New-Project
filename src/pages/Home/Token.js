import React, { useEffect, useState } from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  styled,
  TextField,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import Topbar from "../../layouts/HomeLayout/Topbar";
import Footer from "../../layouts/HomeLayout/Footer";
import Web3 from "web3";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router";

const Mainbox = styled("div")({
  backgroundColor: "#f8f8f8",
  borderRadius: "30px",
  padding: "30px",
  "& h6,p": {
    color: "black",
  },
  "& MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.MuiSelect-select":
    {
      color: "black!important",
    },
});

function Token() {
  const [amount, setAmount] = useState("10");
  const [balance, setBalance] = useState("");
  const [walletid, setWalletid] = useState("");
  const [chainid, setChainid] = useState("");
  const [payment, setPayment] = useState("BNB");
  const web3 = new Web3(window.ethereum);
  const navigate = useNavigate();

  const handleSubmit = () => {
    CheckMetamask();
    if (balance === amount || balance > amount) {
      if(payment==="BNB"){
        SendTransaction();
      }
      else{
        toast.warning("BUSD is not supporting")
      }
      
    } else {
      toast.info("You have insufficient balance");
    }
  };
  const CheckMetamask=()=>{
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })

        .then(() => {
          console.log("Connect Metamask!");
          // toast.success("Metamask has been connected!")
          getWalletAddress();
        });
    } else {
      toast.info("Please install metamask!");
    }
  }
  useEffect(() => {
    CheckMetamask();
   },[]);
  const getWalletAddress = async () => {
    try {
      const accounts = await web3.eth.getAccounts();
      setWalletid(accounts[0]);
      const balanceWei = await web3.eth.getBalance(accounts[0]);
      const balanceEth = web3.utils.fromWei(balanceWei, "ether");
      setBalance(balanceEth);
      const id = await web3.eth.getChainId();
      setChainid(id);
      console.log("id", id);
      console.log("Wallet Address:", accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };

  async function SendTransaction() {
    try {
      let params = [
        {
          from: walletid,
          to: "0xe9b76ca7238902AA3BE8E553E9549C6B7cF8c2FA",
          gas: Number(21000).toString(16),
          value:'0x' + (amount * 1000000000000000000).toString(16),
        },
      ];
      console.log("params",params);

      const result = await window.ethereum.request({
        method: "eth_sendTransaction",
        params,
      });
      toast.success("Transaction successfully!")
      //  navigate("/buy_token")
      console.log("result",result);
    }
     catch (error) {
      console.log("error", error);
      toast.error("you denied transaction")
    }
  }

  return (
    <>
      <Topbar />
      <Box style={{ padding: "200px 0px",background:"linear-gradient(90deg, rgb(2, 0, 36) 0%, rgba(121, 9, 102, 0.82) 35%, rgb(0, 189, 217) 100%)" }}>
        <Container maxWidth="sm">
          <Mainbox>
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h6">Request Amount</Typography>
              {walletid.slice(0, 4)}...{walletid.slice(38, 42)}
            </Box>
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              <Typography variant="body1">BNB:- {balance} BNB</Typography>
              <Typography variant="body1">BUSD:-{balance} BUSD</Typography>
            </Box>
            <Box>
              <Typography variant="body2">Amount</Typography>
              <TextField
                variant="outlined"
                size="small"
                placeholder="10"
                autoComplete="off"
                value={amount}
                fullWidth
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
              />
            </Box>
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                padding: "30px 0px 0px 0px",
              }}
            >
              <Typography variant="body2">Request Amount</Typography>
              <Typography variant="body2">$ {amount}</Typography>
            </Box>
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              <Typography variant="body2">Total Payable</Typography>
              <Typography variant="body2">$ {amount}</Typography>
            </Box>
            <Box pt={3}>
              <Typography variant="body2">Payment Type</Typography>
              <FormControl fullWidth>
                <Select
                  size="small"
                  onChange={(e) => setPayment(e.target.value)}
                  value={payment}
                  style={{ color: "black" }}
                >
                  <MenuItem value="BNB">BNB</MenuItem>
                  <MenuItem value="BUSD">BUSD</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box pt={3}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                style={{ borderRadius: "10px", padding: "15px" }}
                onClick={handleSubmit}
              >
                Submit
              </Button>
              <ToastContainer />
            </Box>
          </Mainbox>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
export default Token;
