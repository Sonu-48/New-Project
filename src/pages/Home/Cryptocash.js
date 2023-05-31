import React from 'react';
import { Container,Box,Typography,Button,Grid, styled } from '@mui/material';
import {AiOutlineArrowRight} from 'react-icons/ai';
import Tokensale from './Tokensale';

function Cryptocash(){
    const Cryptocashbox= styled('div')({
        "& h4":{
            padding:'10px 0px',
        },
        "& p":{
            padding:'15px 0px'
        }
    })
    return(
        <Box pt={10}>
            <Container>
                <Grid container spacing={3}>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <img src="/images/about_img2.png" alt="image" width="100%"/>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Cryptocashbox>
                            <Typography variant="h4">About The Cryptocash</Typography>
                            <Typography variant='body1'>Cryptocash is one of the most transformative technologies since the invention of the Internet. Cryptocash stands firmly in support of financial freedom and the liberty that Bitcoin provides globally for anyone to voluntarily 
                            participate in a permissionless and decentralized network.</Typography>
                            <Typography variant='body1'>which empowers people to not be marginalized by governments and financial institutions. Bitcoin is freedom. </Typography>
                        </Cryptocashbox>
                        <Box mt={2}>
                        <Button variant="contained" color="primary" sx={{borderRadius:'40px',backgroundImage:"linear-gradient(to right, #ff67cb 0%,#ffcc67 51%,#ff67cb)",backgroundSize:'200% auto', 
                        color:'#fff',padding:'15px 30px'}} endIcon={<AiOutlineArrowRight/>}>LET'S START</Button>

                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Box mt={10}>
                <Tokensale/>
            </Box>

        </Box>
    )
};
export default Cryptocash;