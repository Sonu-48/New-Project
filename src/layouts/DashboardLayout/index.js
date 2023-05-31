import React from "react";
import { Box, styled } from "@mui/material";
import Topbar from "../DashboardLayout/Topbar";
import Dashboard from "../../pages/Home/Dashboard/Dashboard";

const Wrapperbox = styled("div")({
  padding: "65px 16px 50px 310px",
  background: "#F7F8F9",
  "@media screen and (max-width:768px)": {
    padding: "90px 0px",
  },
});
function Dashboarlayout() {
  return (
    <Box>
      <Box>
        <Topbar />
        <Wrapperbox>
          <Dashboard />
        </Wrapperbox>
      </Box>
    </Box>
  );
}
export default Dashboarlayout;
