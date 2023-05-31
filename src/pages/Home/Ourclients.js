import React from 'react';
import { Container,Grid,Box,styled, Typography } from '@mui/material';
import Getintouch from './Getintouch';

function Ourclients(){
    const Clientbox= styled('div')({
        textAlign:'center',
        "& h4":{
            padding:'15px',
            position:'relative',
            "&::after":{
                position:'absolute',
                content:"''",
                width:'80px',
                height:'2px',
                background:"#fff",
                bottom:'0px',
                left:'0px',
                right:'0px',
                margin: "0 auto",
            }
        }
    })
    const logodata=[
        {
            image:'/images/bitcoin_logo.png',
        },
        {
            image:'/images/crypto_logo.png',
        },
        {
            image:'/images/client_logo.png',
        },
        {
            image:'/images/coinbase_logo.png',
        },
        {
            image:'/images/crypto_agency.png',
        },
        {
            image:'/images/bitcoin2.png',
        },
        {
            image:'/images/crypto_lab.png',
        },
        {
            image:'/images/tokenex.png',
        },
    ]
    return(
        <>
        <Box pt={7}>
            <Container>
                <Clientbox>
                    <Typography variant='h4'>Our Clients</Typography>
                </Clientbox>
               <Box mt={7}>
               <Grid container spacing={2}>
                    {logodata.map((data)=>{
                        return(
                            <Grid item lg={3} md={3} sm={4} xs={6}>
                                <Box>
                                    <img src={data.image} alt="logo"/>
                                </Box>
                            </Grid>
                        )
                    })}
                   
                </Grid>
               </Box>
            </Container>
           

        </Box>
         <Box mt={2}>
         <Getintouch/>
     </Box>
        </>
    );
}

export default Ourclients;