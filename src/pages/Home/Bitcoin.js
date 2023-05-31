import React from 'react';
import { Container,Grid,Box,Typography,Button,styled,FormControl,Select,MenuItem } from '@mui/material';
import {AiOutlineArrowRight} from 'react-icons/ai';
import {BsCurrencyBitcoin} from "react-icons/bs";
import {FaEthereum} from 'react-icons/fa';
import Meetoursolution from './Meetoursolution';
import {TbCurrencyLitecoin,TbCurrencyRipple} from 'react-icons/tb';
const Wrapperbox= styled('div')({
    backgroundColor:'#0c0e27',
    padding:'200px 0px 1px 0px',
    "& h1":{
        paddingTop:'15px'
    },
    "& h5":{
        padding:'30px 0px'
    }
   
})
const Buttonbox= styled('div')({
    display:'flex',
    padding:'30px 0px',
    flexWrap:'wrap',

   
})
const Iconbox= styled('div')({
    padding:'5px 0px',
    display:'flex',
    maxWidth:'420px',
    alignItems:'center',
    justifyContent:'space-between',
    flexWrap:'wrap',
    "& svg":{
        color:'#fff',
        fontSize:'25px'
    },
    "& p":{
        marginLeft:'10px'
    }
})

const Parentbox= styled('div')({
    "@media screen and (max-width:900px)":{
       display:'flex',
       alignItems:'center',
       flexDirection:'column',
       "& h5":{
        textAlign:'center'
       }
    }
})
function Bitcoin(){
    return(
        <Wrapperbox>
            <Container>
                <Grid container spacing={3}>
                    <Grid item lg={5} md={12} sm={12} xs={12}>
                        <Parentbox>
                        <Box >
                            <Typography variant="h1"><strong>Bitcoin</strong> is peer to peer innovative <strong>network</strong></Typography>
                
                            <Typography variant="h5">Token Presale is <span style={{borderRadius:'4px',color:'#fff',padding:'0px 8px',backgroundImage:"linear-gradient(to right, #ff67cb 0%,#ffcc67 99%)"}}>Live</span></Typography>
                        </Box>
                        <Box sx={{border:'1px solid #fff',borderRadius:'9px',display:'flex',alignItems:'center',justifyContent:'space-between',maxWidth:'400px'}}>
                            <Box sx={{padding:'15px'}}>
                                <Typography variant="h4">00  :</Typography>
                                <Typography variant='body2'>DAYS</Typography>
                            </Box>
                            <Box sx={{padding:'15px'}}>
                                <Typography variant="h4">00  :</Typography>
                                <Typography variant='body2'>DAYS</Typography>
                            </Box>
                            <Box sx={{padding:'15px'}}>
                                <Typography variant="h4">00  :</Typography>
                                <Typography variant='body2'>DAYS</Typography>
                            </Box>
                            <Box sx={{padding:'15px'}}>
                                <Typography variant="h4">00</Typography>
                                <Typography variant='body2'>DAYS</Typography>
                            </Box>

                        </Box>
                        <Buttonbox mt={4} >
                            <Button variant="contained" color="primary" endIcon={<AiOutlineArrowRight/>}>WHITEPAPER</Button>
                            <Box ml={3}>
                            <Button variant="outlined" color="primary" sx={{ borderRadius:'40px',background:'transparent',color:'#fff',padding:'15px 30px',borderColor:''}} endIcon={<AiOutlineArrowRight/>}>BUY TOKEN NOW!</Button>
                            </Box>
                        </Buttonbox>
                        <Typography variant='body1'>We Accept:</Typography>
                        <Iconbox>
                            <Box display="flex" alignItems="center">
                                <BsCurrencyBitcoin/>
                                <Typography variant='body2'>Bitcoin</Typography>
                            </Box>
                            <Box display="flex" alignItems="center">
                                <FaEthereum/>
                                <Typography variant='body2'>Etherreum</Typography>
                            </Box>
                            <Box display="flex" alignItems="center">
                                <TbCurrencyLitecoin/>
                                <Typography variant='body2'>Litecoin</Typography>
                            </Box>
                            <Box display="flex" alignItems="center">
                                <TbCurrencyRipple/>
                                <Typography variant='body2'>Ripple</Typography>
                            </Box>
                        </Iconbox>
                        </Parentbox>
                    </Grid>
                    <Grid item lg={7} md={12} sm={12} xs={12}>
                       
                           <Box pl={10}>
                           <img src="images/banner-img2.png" alt="image"width="100%"/>
                           </Box>
                       
                    </Grid>
                </Grid>
            </Container>
            <Box>
                <Meetoursolution/>
            </Box>

        </Wrapperbox>
    )
}
export default Bitcoin;