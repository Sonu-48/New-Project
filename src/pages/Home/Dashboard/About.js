import React from 'react';
import { Container,Grid,Box,Typography,Button,styled } from '@mui/material';
import Topbar from '../../../layouts/DashboardLayout/Topbar';
import Sidebar from '../../../layouts/DashboardLayout/Sidebar';

const Wrapperbox= styled('div')({
    padding:'65px 16px 0px 310px',
    background:'#F7F8F9',
    "@media screen and (max-width:768px)":{
        padding:'90px 0px',
    }
})
function About(){
    return(
        <Box>
            <Topbar/>
            <Sidebar/>
           <Wrapperbox>
           <Container>
                <Typography variant="h1" color="black">This is About page</Typography>
            </Container>
           </Wrapperbox>

        </Box>
    );
}
export default About;