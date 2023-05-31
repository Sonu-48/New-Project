import React from 'react';
import { Container,Grid,Box,Typography,Button,styled} from '@mui/material';
import {BsAndroid2,BsApple} from 'react-icons/bs';
import Leadershipteam from './Leadershipsteam';
import Roadmap from './Roadmap';


function Mobileapp(){

    const Wrapperbox= styled('div')({
        background:'#121833',
        padding:'100px 0px',
        "& h4":{
            paddingBottom:'20px',
            position:'relative',
            "&::after": {
                position: "absolute",
                content: "''",
                width: "80px",
                height: "2px",
                background: "#fff",
                bottom: "0px",
                left: "0px",
                right: "0px",
              },
        },
        "& p":{
            padding:'20px 0px'
        }
    })
    const Buttonbox= styled('div')({
        flexWrap:'wrap',
        marginTop:'20px',
        "@media screen and (max-width:450px)":{
            textAlign:'center',
            flexWrap:'wrap',
            "& button":{
                marginTop:'10px',
                marginLeft:'0px',
            }
        }
    })
    return(
       <>
        <Wrapperbox>
            <Container>
                <Grid container spacing={5}>
                    <Grid item lg={7} md={7} sm={12} xs={12} display="flex" alignItems="center">
                        <Box>
                        <Box>
                            <Typography variant="h4">Download Mobile App</Typography>
                            <Typography variant='body2'>The use of crypto-currencies has become more widespread, and they are now increasingly accepted as a legitimate currency for transactions.
                             Bitcoin is the first ever cryptocurrency and is used like other assets in exchange for goods and services.</Typography>
                             <Typography variant="body2">Send, receive, and exchange Bitcoin, Ethereum, 
                             & Bitcoin Cash instantly with anyone in the world. Securely buy and sell bitcoin alongside your already safely stored cryptocurrency.</Typography>
                        </Box>
                        <Buttonbox>
                        <Button variant="contained" color="primary" sx={{borderRadius:'40px',backgroundImage:"linear-gradient(to right, #ff67cb 0%,#ffcc67 51%,#ff67cb)",backgroundSize:'200% auto', 
                        color:'#fff',padding:'15px 30px'}} startIcon={<BsAndroid2/>}>GOOGLE STORE</Button>
                              <Button variant="contained" color="primary" sx={{borderRadius:'40px',backgroundImage:"linear-gradient(to right, #ff67cb 0%,#ffcc67 51%,#ff67cb)",backgroundSize:'200% auto', 
                        color:'#fff',padding:'15px 30px',marginLeft:'15px',}} startIcon={<BsApple/>}>APPLE STORE</Button>
                        </Buttonbox>
                        </Box>
                    </Grid>
                    <Grid item lg={5} md={5} sm={12} xs={12}>
                        <Box sx={{textAlign:'right' ,textAlign:{sm:"center",xs:'center'}}}>
                            <img src="/images/mobile_app.png" alt="mobile image"/>
                        </Box>
                    </Grid>
                </Grid>
            </Container>

        </Wrapperbox>
        <Box>
            <Leadershipteam/>
        </Box>
        {/* <Box>
            <Roadmap/>
        </Box> */}
       </>
    );
}

export default Mobileapp;