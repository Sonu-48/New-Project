import React, { useState } from "react";
import { Container, Box, Grid, Typography, styled, FormControlLabel, Checkbox, Button } from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import Currentuser from "./Currentuser";
import { NavLink } from "react-router-dom";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));
const Teamskillsbox=styled('div')({
    background:'#fff',
    boxShadow:"0 10px 25px 0 rgba(50, 50, 93, 0.07), 0 5px 15px 0 rgba(0, 0, 0, 0.07)",
    borderRadius:'0.25rem',
    "& P":{
        color:'#112b4a',
        lineHeight:'30px'
    },
    "& .css-1l6rwmg-MuiLinearProgress-root.MuiLinearProgress-colorPrimary":{
        height:'4px',
    },
    // "& .css-5xe99f-MuiLinearProgress-bar1":{
    //     background:'green !',
    // },
})
const Todobox= styled('div')({
    background:'#fff',
    boxShadow:"0 10px 25px 0 rgba(50, 50, 93, 0.07), 0 5px 15px 0 rgba(0, 0, 0, 0.07)",
    borderRadius:'0.25rem',
    
    "& h4":{
        color:'rgba(17, 43, 74, 0.84)',
        fontSize:'1rem',
        fontWeight:600,
    },
})
const Inputbox= styled('div')({
    background:'#f8f9fa ',
    padding:'20px',
    "& .css-j204z7-MuiFormControlLabel-root .MuiFormControlLabel-label":{
        color:'#112b4a',
        fontSize:'1rem',
        fontWeight:400,
    },
})

function Teamskills() {
    const [checked,setChecked]= useState(false);

    const handleChange=(e)=>{
        setChecked(e.target.checked)

        }


  return (
    <Box>
      <Container>
        <Grid container spacing={4}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Todobox>
                <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',padding:'20px',}}>
                    <Typography variant="h4">TODO List</Typography>
                    <Button variant="text">Mark All as Completed</Button>
                </Box>
                <Inputbox>
                <FormControlLabel control={<Checkbox  checked={checked} onChange={handleChange}/>} label="Wireframe the CRM application pages" />
                <FormControlLabel control={<Checkbox  />} label="Design a new page in Sketch" />
             
                <FormControlLabel control={<Checkbox  />} label="Interview John for Full-Stack Developer" />
                <FormControlLabel control={<Checkbox  />} label="Quote the custom work" />
                </Inputbox>
            </Todobox>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Teamskillsbox>
              <Box sx={{borderBottom:'1px solid #efefef',padding:'15px'}}>
                <Typography variant="body1">Team Skills</Typography>
              </Box>
           
               <Box mt={2} sx={{padding:'0px 15px 0px 15px'}}>
               <Typography variant="body2">HTML</Typography>
                <Box display="flex" alignItems="center">
                  <Box width="100%">
                    <BorderLinearProgress
                      variant="determinate"
                      value={60}
                    ></BorderLinearProgress>
                  </Box>
                  <Typography variant="body1" style={{color:'#939FAD',paddingLeft:'10px'}}>60%</Typography>
                </Box>
               </Box>
               <Box sx={{padding:'0px 15px 0px 15px'}}>
               <Typography variant="body2">CSS/SCSS</Typography>
                <Box display="flex" alignItems="center">
                  <Box width="100%">
                    <BorderLinearProgress
                      variant="determinate"
                      value={39}
                    ></BorderLinearProgress>
                  </Box>
                  <Typography variant="body1" style={{color:'#939FAD',paddingLeft:'10px'}}>39%</Typography>
                </Box>
               </Box>

               <Box sx={{padding:'0px 15px 0px 15px'}}>
               <Typography variant="body2">JAVASCRIPT</Typography>
                <Box display="flex" alignItems="center">
                  <Box width="100%">
                    <BorderLinearProgress
                      variant="determinate"
                      value={76}
                    ></BorderLinearProgress>
                  </Box>
                  <Typography variant="body1" style={{color:'#939FAD',paddingLeft:'10px'}}>76%</Typography>
                </Box>
               </Box>

               <Box sx={{padding:'0px 15px 20px 15px'}}>
               <Typography variant="body2">VUE JS</Typography>
                <Box display="flex" alignItems="center">
                  <Box width="100%">
                    <BorderLinearProgress
                      variant="determinate"
                      value={50}
                    ></BorderLinearProgress>
                  </Box>
                  <Typography variant="body1" style={{color:'#939FAD',paddingLeft:'10px'}}>50%</Typography>
                </Box>
               </Box>
              
            </Teamskillsbox>
          </Grid>
        </Grid>
      </Container>
    <Box mt={5}>
    <Currentuser/>
    </Box>
    </Box>
  );
}
export default Teamskills;
