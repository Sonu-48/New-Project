import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  AppBar,
  Drawer,
  Toolbar,
  Button,
  styled,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { useTheme } from "styled-components";
import { FiMenu } from "react-icons/fi";
import { BiHome } from "react-icons/bi";
import Bitcoin from "../../pages/Home/Bitcoin";
import Carosol from "../../pages/Home/Carosol";
import { useNavigate } from "react-router-dom";


const Wrapperbox = styled('div')({
 "& .css-1pfwnga-MuiTypography-root":{
  color:'red !important',
 },
 
})
const Boxgroup = styled("div")({
  marginLeft:'150px',
  "& a": {
    textDecoration: "none",
    color: "#fff",
    fontWeight: 500,
    "&:hover": {
      color: "#ff69c9",
    },
    "&:active": {
      borderBottom: "1px solid #ff69c9",
      color: "#ff69c9",
    },
  },
});
const LoginButton = styled("div")({
  "& button": {
    backgroundImage:
      "linear-gradient(to right, #ff67cb 0%,#ffcc67 51%,#ff67cb)",
    backgroundSize: "200% auto",
    borderRadius: "40px",
    padding: "10px 30px",
  },
});
const Linkbox= styled('div')({
  "& a":{
    color:'#fff',
    textDecoration:'none',
    display:'flex',
    alignItems:'center',
    fontSize:'20px',
  },
  "& svg":{
    paddingRight:'10px',
    fontSize:'20px',
  }
})
const navLinks = ({ isActive }) => {
  return {
    borderBottom: isActive ? "1px solid #ff69c9" : "normal",
    color: isActive ? "#ff69c9" : "normal",
  };
};

const navLinks2=({isActive})=>{
  return{
    color: isActive ? "#ff69c9" : "normal",
  }
}

function Topbar() {
  const drawerWidth = 280;


  const [mobileOpen, setMobileOpen] = useState(false);
  const [walletaddress, setWalletaddress] = useState("");
  const [isconnected,setIsConnected]= useState(false);
  
  const navigate= useNavigate();

  // const connectMetamast = async () => {
  //   if (window.ethereum.enable) {
  //     try {
  //       const accounts = await window.ethereum.request({
  //         method: "eth_requestAccounts",
  //       });
  //       console.log("accounts", accounts);
  //       setWalletaddress(accounts[0]);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   } else {
  //     alert("Meta Mask is not detected");
  //   }
  // };

  const connectMetamast=()=>{
    if(window.ethereum){
      window.ethereum.request({method:'eth_requestAccounts'})
      .then((response)=>{
        // console.log(response)
        setWalletaddress(response[0]);
        setIsConnected(true);
      })

      // window.ethereum.request({method:'eth_getBalance'})
      // .then((balance)=>{
      //   console.log("balance",balance);
      //   setBalance=balance;
      // })

    }
    else(
      alert("Please install metamask extension!")
    )
  }
  return (
    <>
   <Container>
   <Wrapperbox>
      <AppBar
        sx={{ background: "#0c0e27", padding: "20px", boxShadow: "none", position:{lg:'fixed',md:'fixed',sm:'absolute',xs:'absolute'}}}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box>
            <NavLink to="/">
              <img src="/images/logo_light.png" alt="logo" />
            </NavLink>
          </Box>
          <IconButton
            sx={{
              display: { md: "block", lg: "none" },
              backgroundImage:
                "linear-gradient(to right, #ff67cb 0%,#ffcc67 99%)",
              width: "50px",
              height: "50px",
              borderRadius: "5px",
            }}
            onClick={() => setMobileOpen(true)}
          >
            <FiMenu color="#fff" />
          </IconButton>
          <Boxgroup
            sx={{
              display: { lg: "block", md: "none", sm: "none", xs: "none" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <NavLink to="/" style={navLinks}>
                  HOME
                </NavLink>
              </Box>
              <Box ml={4}>
                <NavLink to="/service" style={navLinks}>SERVICES</NavLink>
              </Box>
              <Box ml={4}>
                <NavLink to="/">ABOUT</NavLink>
              </Box>
              <Box ml={4}>
                <NavLink to="/token" style={navLinks}>TOKEN</NavLink>
              </Box>
              <Box ml={4}>
                <NavLink to="/">TEAM</NavLink>
              </Box>
              <Box ml={4}>
                <NavLink to="/">FAQ</NavLink>
              </Box>
              <Box ml={4}>
                <NavLink to="/">CONTACT</NavLink>
              </Box>
              {/* <Box ml={4}>
                <NavLink to="/dashboard">DASHBOARD</NavLink>
              </Box> */}
            </Box>
          </Boxgroup>
          <LoginButton   sx={{
              display: { lg: "block", md: "none", sm: "none", xs: "none" },
            }}>
          <Button variant="contained" color="primary" onClick={()=>navigate("/signup")}>
              Register
            </Button>

          </LoginButton>
          
          <LoginButton
            sx={{
              display: { lg: "block", md: "none", sm: "none", xs: "none" },
            }}
          >
           
            <Box align="right">
              <Button variant="contained" color="primary" onClick={()=> navigate("/login")}>Login</Button>
            
          {/* {walletaddress === "0x770ba6f2f8d5f6bd68609062541de5c425748de6"?<>
          <Button variant="contained" color="primary">
              Connected
            </Button>
          </>:<>
          <Button variant="contained" color="primary" onClick={connectMetamast}>
              Login
            </Button>
          </>} */}  
        </Box>
          </LoginButton>
        </Toolbar>
        
      </AppBar>
      <Box>
      <Drawer
        //   container={container}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            background:'#0c0e27',
          },
        }}
        variant="temporary"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      >
       <Linkbox>
       <List>
          <ListItem>
            <ListItemButton component={NavLink} to="/">
              <NavLink to="/" style={navLinks2} >
                <BiHome />
                Home
              </NavLink>
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <ListItemButton component={NavLink} to="/about">
              <NavLink to="/about">
                <BiHome />
                About
              </NavLink>
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <ListItemButton component={NavLink} to="/contactus">
              <NavLink to="/contactus" >
                <BiHome />
                Contact Us
              </NavLink>
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <ListItemButton component={NavLink} to="/signup">
              <NavLink to="/signup" >
                <BiHome />
                Sign UP
              </NavLink>
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <ListItemButton component={NavLink} to="/signup">
              <NavLink to="/token" >
                <BiHome />
                Token
              </NavLink>
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <ListItemButton component={NavLink} to="/signup">
              <NavLink to="/login" >
                <BiHome />
                Login
              </NavLink>
            </ListItemButton>
          </ListItem>
        </List>
       </Linkbox>
      </Drawer>

      </Box>
      
    </Wrapperbox>
   </Container>
    {/* <Box>
        <Bitcoin />
      </Box> */}
    </>
  );
}
export default Topbar;
