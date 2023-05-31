import React, { useState } from "react";
import {
  Box,
  Typography,
  AppBar,
  Toolbar,
  Button,
  styled,
  IconButton,
  TextField,
  List,
  ListItemButton,
  ListItem,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Drawer,
  Avatar,
  Divider,
  Menu,
  
} from "@mui/material";
import {deepOrange} from '@mui/material/colors'
import { NavLink } from "react-router-dom";
import Notification from "../../pages/Home/Notification";
import Profile from "../../pages/Home/Profile";
import { BiSearch, BiHelpCircle } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import Sidebar from "./Sidebar";
import { FiMenu } from "react-icons/fi";
import { BiHome } from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Logobox = styled("div")({
  display: "flex",
  alignItems: "center",
  "& a": {
    textDecoration: "none",
    color: "white",
    display: "flex",
    alignItems: "center",
  },
  "& h5": {
    marginLeft: "10px",
  },
});
const Searchbox = styled("div")({
  "& .css-nz481w-MuiInputBase-input-MuiInput-input": {
    color: "#fff",
  },
  background: "rgba(0, 0, 0, 0.24)",
  marginLeft: "25px",
  alignItems: "center",
  display: "flex",
  borderRadius: "0.25rem",
  padding: "3px",
  width: "300px",
  "& svg": {
    color: "rgba(255, 255, 255, 0.54)",
    fontSize: "18px",
  },
  "& input::placeholder": {
    color: "rgba(255, 255, 255, 0.54)",
    fontSize: "17px",
  },
});
const Starbox = styled("div")({
  paddingRight: "16px",

  "& a": {
    color: "#ffc107",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    border: "1px solid #ffc107",
    padding: "5px 15px",
    borderRadius: "0.25rem",
    fontSize: "15px",
    fontWeight: "600",
  },
});
const Helpbox = styled("div")({
  paddingRight: "16px",
  "& a": {
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    color: "rgba(255, 255, 255, 0.54)",
    fontSize: "15px",
    fontWeight: "600",
    "& svg": {
      fontSize: "20px",
    },
  },
});
const Mobiledrawerbox = styled("div")({
  "& .css-1uj4fef-MuiModal-root-MuiDrawer-root .MuiDrawer-paper": {
    marginTop: "62px",
  },

  "& .css-o4b71y-MuiAccordionSummary-content.Mui-expanded": {
    margin: "0px",
  },
});
const Accordianbox = styled("div")({
  "& .css-1elwnq4-MuiPaper-root-MuiAccordion-root": {
    boxShadow: "none",
  },
  "& a": {
    color: "rgba(53, 75, 102, 0.84)",
    textDecoration: "none",
    fontWeight: 600,
  },
  "& .css-15v22id-MuiAccordionDetails-root": {
    padding: "0px 50px",
  },
  "& .css-sh22l5-MuiButtonBase-root-MuiAccordionSummary-root": {
    padding: "0px 25px",
  },
  "& svg": {
    paddingRight: "10px",
  },
});
const navLinks = ({ isActive }) => {
  return {
    color: isActive ? "#ff69c9" : "normal",
  };
};
const Profilebox = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: "80px",
});
const Linkbox = styled("div")({
  padding: "7px 20px",

  "& a": {
    color: "#ffff",
    textDecoration: "none",
    "&:hover": {
      color: "#308AF3",
    },
  },
});
const Listbox = styled("div")({
  "& a": {
    color: "rgba(53, 75, 102, 0.84)",
    textDecoration: "none",
    fontWeight: 600,
  },
});
function Topbar() {
  const drawerWidth = 310;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const userName=localStorage.getItem('UserName');
  return (
    <Box>
      <AppBar
        position="fixed"
        sx={{
          background: "#112b4a",
          boxShadow: "none",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Logobox>
            <NavLink to="/" display="flex">
              <img src="/images/stack-logo-white.svg" alt="logo" />
              <Typography variant="h5">Stack</Typography>
            </NavLink>
            <Searchbox
              sx={{
                display: { xs: "none", lg: "block", md: "block", sm: "block" },
              }}
            >
              <IconButton>
                <BiSearch />
              </IconButton>
              <TextField
                variant="standard"
                size="small"
                placeholder="Search"
                InputProps={{ disableUnderline: true }}
              />
            </Searchbox>
          </Logobox>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Helpbox
              sx={{
                display: { lg: "block", md: "block", sm: "none", xs: "none" },
              }}
            >
              <NavLink to="/">
                <BiHelpCircle style={{ marginRight: "5px" }} />
                Get Help
              </NavLink>
            </Helpbox>
            <Starbox
              sx={{
                display: { lg: "block", md: "block", sm: "none", xs: "none" },
              }}
            >
              <NavLink to="/">
                <AiFillStar style={{ marginRight: "5px" }} />
                PRO
              </NavLink>
            </Starbox>
            <Box
              pr={2}
              sx={{
                display: { lg: "block", md: "block", sm: "none", xs: "none" },
              }}
            >
              <Notification />
            </Box>
            <Box
              sx={{
                display: { xs: "none", sm: "block", md: "block", lg: "block" },
              }}
            >
              <Profile />
            </Box>
            <IconButton
              sx={{
                display: { sm: "block", md: "none", lg: "none" },
                width: "50px",
                height: "50px",
                borderRadius: "5px",
              }}
              onClick={() => setMobileOpen(true)}
            >
              <FiMenu color="#fff" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Box>
        <Sidebar />
      </Box>
      {/* Mobiledrawer Open */}
      <Box>
        <Mobiledrawerbox>
          <Drawer
            open={mobileOpen}
            onClose={() => setMobileOpen(false)}
            variant="temporary"
            sx={{
              width: drawerWidth,
              flexShrink: 0,
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
                  <strong>{userName}</strong>
                  <Typography
                    variant="body2"
                    color="rgba(55, 77, 103, 0.54)"
                    sx={{ lineHeight: "1.8", fontSize: "14px" }}
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
                <Linkbox>
                  <Box>
                    <NavLink to="/">Dashboard</NavLink>
                  </Box>
                  <Box pt={1} pb={1}>
                    <NavLink to="/">My Profile</NavLink>
                  </Box>
                  <NavLink to="/">Edit Account</NavLink>
                </Linkbox>
                <Divider sx={{ borderColor: "#e9ecef" }} />
                <Box sx={{ padding: "7px 20px" }}>
                  <Button variant="text">Logout</Button>
                </Box>
              </Menu>
            </Profilebox>
            <Accordianbox>
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
                  <NavLink to="/dashboard" style={navLinks}>
                    Dashboard
                  </NavLink>
                </AccordionDetails>
              </Accordion>
            </Accordianbox>
            <Listbox>
              <List>
                <ListItem>
                  <ListItemButton component={NavLink} to="/about">
                    <NavLink to="/about" style={navLinks}>
                      <BiHome style={{ paddingRight: "10px" }} />
                      About
                    </NavLink>
                  </ListItemButton>
                </ListItem>
              </List>
              <List>
                <ListItem>
                  <ListItemButton component={NavLink} to="/">
                    <NavLink to="/" style={navLinks}>
                      <BiHome style={{ paddingRight: "10px" }} />
                      Customer
                    </NavLink>
                  </ListItemButton>
                </ListItem>
              </List>
              <List>
                <ListItem>
                  <ListItemButton component={NavLink} to="/">
                    <NavLink to="/" style={navLinks}>
                      <BiHome style={{ paddingRight: "10px" }}  />
                      Users
                    </NavLink>
                  </ListItemButton>
                </ListItem>
              </List>
              <List>
                <ListItem>
                  <ListItemButton component={NavLink} to="/">
                    <NavLink to="/" style={navLinks}>
                      <BiHome style={{ paddingRight: "10px" }} />
                      Contact
                    </NavLink>
                  </ListItemButton>
                </ListItem>
              </List>
            </Listbox>
          </Drawer>
        </Mobiledrawerbox>
      </Box>
    </Box>
  );
}
export default Topbar;
