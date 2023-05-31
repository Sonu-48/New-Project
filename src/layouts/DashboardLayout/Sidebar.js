import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Menu,
  Typography,
  styled,
  
} from "@mui/material";
import { deepOrange, deepPurple } from '@mui/material/colors';

import { BiHome } from "react-icons/bi";
import { NavLink,useNavigate } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Profilebox = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});
const Wrapperbox = styled("div")({
  "& .css-1xi08f2-MuiDrawer-docked .MuiDrawer-paper":{
    marginTop: "65px",
    background: "#F7F8F9",
  },
  "& a": {
    color: "rgba(53, 75, 102, 0.84)",
    textDecoration: "none",
    fontWeight: 600,
  },
  "& svg": {
    paddingRight: "10px",
  },
  "& .css-1elwnq4-MuiPaper-root-MuiAccordion-root": {
    background: "transparent",
    boxShadow: "none",
  },
  "& .css-sh22l5-MuiButtonBase-root-MuiAccordionSummary-root": {
    padding: "0px 25px",
  },
  "& .css-o4b71y-MuiAccordionSummary-content.Mui-expanded": {
    margin: "0px",
  },
  "& .css-15v22id-MuiAccordionDetails-root": {
    padding: "0px 50px",
  },
});
const navLinks = ({ isActive }) => {
  return {
    color: isActive ? "#ff69c9" : "normal",
    // borderRight:isActive? "1px solid #308AF3":"normal"
  };
  
};
const Linkbox =styled('div')({
  padding:'7px 20px',
 
  "& a":{
    color:'#ffff',
    textDecoration:'none',
    "&:hover":{
      color:'#308AF3'
    }
   
  }
})
function Sidebar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate=useNavigate();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const drawerWidth = 300;
  const ITEM_HEIGHT = 48;

  const handleLogout=()=>{
    localStorage.clear('token-info');
    // localStorage.removeItem('UserName')
    // localStorage.removeItem('password')
    navigate('/')
  }
  const userName=localStorage.getItem('UserName')
  return (
    <Wrapperbox>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          display: { sm: "none", xs: "none", md: "block", lg: "block" },
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Profilebox>
          <Box
            display="flex"
            alignItems="center"
            sx={{ padding: "10px 25px" }}
            mb={2}
          >
            
            {/* <Avatar
              src="/images/demi.png"
              style={{ width: "50px", height: "50px" }}
            /> */}
             <Avatar sx={{ bgcolor: deepOrange[500],textAlign:'center' }} >{userName.charAt(0)}</Avatar>

            <Box ml={2}>
              <strong style={{color:'#112b4a',fontWeight:600}}>{userName}</strong>
              <Typography
                variant="body2"
                color="rgba(55, 77, 103, 0.54)"
                sx={{ lineHeight: "1.8", fontSize: "12px" }}
              >
                ACCOUNT MANAGER
              </Typography>
            </Box>
          </Box>
          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? "long-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="long-menu"
            MenuListProps={{
              "aria-labelledby": "long-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            style={{ left: "-130px", top: "13px" }}
            PaperProps={{
              style: {
                // maxHeight: ITEM_HEIGHT * 4.5,
                width: "20ch",
              },
            }}
          >
            <Box sx={{ padding: "7px 20px" }}>
              <strong style={{ color: "#fff" }}>Adrian Demian</strong>
              <Typography variant="body2" lineHeight="1.6" fontWeight="300">
                @adriandemian
              </Typography>
            </Box>
            <Divider sx={{ borderColor: "#e9ecef" }} />
            <Linkbox >
             <Box pt={2}>
             <NavLink to="/">Dashboard</NavLink>
             </Box>
             <Box pt={2} pb={2}>
             <NavLink to="/">My Profile</NavLink>
             </Box>
             <Box pb={2}>
             <NavLink to="/">Edit Account</NavLink>
             </Box>
            </Linkbox>
            <Divider sx={{ borderColor: "#e9ecef" }} />
            <Box sx={{ padding: "7px 20px" }}>
              <Button variant="text" onClick={handleLogout}>Logout</Button>
            </Box>
          </Menu>
        </Profilebox>

        {/* <List>
          <ListItem>
            <ListItemButton component={NavLink} to="/dashboard">
                <NavLink to="/dashboard" style={navLinks}><RxDashboard />Dashboard</NavLink>
            </ListItemButton>
          </ListItem>
        </List> */}
        <Accordion>
          <AccordionSummary 
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            
          >
            <Box display="flex" alignItems="center">
              <RxDashboard />
              <Typography
                variant="body1"
                style={{
                  color: "rgba(53, 75, 102, 0.84)",
                  fontWeight: 600,
                  fontSize: "18px",
                }}
              >
                Dashboards
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <NavLink to="/dashboard" style={navLinks} >
              Dashboard
            </NavLink>
          </AccordionDetails>
        </Accordion>
        <List>
          <ListItem>
            <ListItemButton component={NavLink} to="/about">
              <NavLink to="/about" style={navLinks}>
                <BiHome />
                About
              </NavLink>
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <ListItemButton component={NavLink} to="/">
              <NavLink to="/" style={navLinks}>
                <BiHome />
                Customer
              </NavLink>
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <ListItemButton component={NavLink} to="/">
              <NavLink to="/" style={navLinks}>
                <BiHome />
                Users
              </NavLink>
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <ListItemButton component={NavLink} to="/">
              <NavLink to="/" style={navLinks}>
                <BiHome />
                Contact
              </NavLink>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Wrapperbox>
  );
}

export default Sidebar;
