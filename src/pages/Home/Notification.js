import React from "react";
import { Box, Button, IconButton,Badge } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import {MdNotifications} from 'react-icons/md';

function Notification() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box>
      <IconButton id="fade-button" onClick={handleClick}>
        <Badge badgeContent={4} color="secondary">
            <MdNotifications color="#fff"/>
        </Badge>
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
        <MenuItem onClick={handleClose} style={{padding:'5px 20px'}}>sonu</MenuItem>
        <MenuItem onClick={handleClose} style={{padding:'5px 20px'}}>sonu</MenuItem>
        <MenuItem onClick={handleClose} style={{padding:'5px 20px'}}>sonu</MenuItem>
      </Menu>
    </Box>
  );
}
export default Notification;
