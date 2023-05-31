import React from "react";
import { Box, Button, IconButton,Badge, ListItemIcon, ListItemText, styled, Avatar, Typography } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import {MdNotifications} from 'react-icons/md';
import {AiFillSetting} from 'react-icons/ai';
import {BiLogOut} from 'react-icons/bi';
import { deepOrange, deepPurple } from '@mui/material/colors';

function Profile() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
 
 const userName=localStorage.getItem('UserName')
 console.log(userName);

 
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box display="flex" alignItems="center" sx={{borderLeft:'1px solid rgba(0, 0, 0, 0.34) !important'}}>
      <IconButton id="fade-button" onClick={handleClick}>
        {/* <Avatar src="/images/demi.png" >
          
        </Avatar> */}
           <Avatar sx={{ bgcolor: deepOrange[500],textAlign:'center' }} >{userName.charAt(0)}</Avatar>
        <Typography variant="body2" pl={1}>{userName}</Typography>
      </IconButton>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose} style={{padding:'5px 20px'}}>
            <ListItemIcon>
                <AiFillSetting color="#fff"/>
            </ListItemIcon>
            <ListItemText>Setting</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose} style={{padding:'5px 20px'}}>
            <ListItemIcon>
                <BiLogOut color="#fff"/>
            </ListItemIcon>
            <ListItemText>Logout</ListItemText>
        </MenuItem>
      </Menu>
    </Box>
  );
}
export default Profile;
