import React from 'react';
import { Container,Box,Typography } from '@mui/material';
import Topbar from '../../layouts/HomeLayout/Topbar';
import Footer from '../../layouts/HomeLayout/Footer';

function Buy_Token(){
    return(
        <>
        <Topbar/>
        <Box style={{padding:'200px 0px 100px 0px'}}>
            <Container>
                <Typography variant='h1' color="black">HIII Sonu</Typography>
            </Container>
        </Box>
        <Footer/>
        </>
    )
}
export default Buy_Token;