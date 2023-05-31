import React from 'react';
import { Container,Grid,Box,Typography, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

function Copyright(){
    const Linkbox =styled('div')({
        textAlign:'right',
        "& a":{
            color:'#fff',
            textDecoration:'none',
            "&:hover":{
                color:'#ff69c9'
            }
        }
    })
    return(
        <Box sx={{padding:'20px',background:'#0c0e27'}}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                        <Typography variant='body1'>Copyright © 2018 All Rights Reserved.</Typography>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Linkbox align="right">
                      <NavLink to="">Privacy Policy</NavLink>
                       <NavLink to="" style={{marginLeft:'15px'}}>Terms & Condition</NavLink>
                      </Linkbox>
                    </Grid>
                </Grid>
            </Container>

        </Box>
    );
}
export default Copyright;