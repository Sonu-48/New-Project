import React from 'react';
import {Container,Box,typography,Grid, Typography, styled,Button, Link} from '@mui/material';
import {FaFacebookF,FaTwitter,FaLinkedinIn,FaPinterestP} from 'react-icons/fa';
import Investorboard from './Investorboard';

function Leadershipteam(){
    const Wrapperbox= styled('div')({
        padding:'100px 0px',
        "& h4":{
            paddingBottom:'20px',
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
        },
    })
    const Imagebox= styled('div')({
        background:'#121833',
        borderRadius:'5px',
        padding:'20px',
        textAlign:'center',
        position:'relative',
    })
    const Iconbox=styled('div')({
        backgroundImage: "linear-gradient(to bottom, #ff67cb 0%,#ffcc67 99%)",
        borderRadius:'40px',
        padding:'15px 10px',
        position:'absolute',
        top:'50%',
        transform:'translateY(-50%)',
        right:'-15px',
        display:'flex',
        flexDirection:'column',
        "@media screen and (max-width:768px)":{
            right:'0px',

        },
        "& a":{
            color:'#fff',
            padding:'5px 0px',
        }

    })
    return(
        <>
        <Wrapperbox>
            <Container maxWidth="md">
                <Box align="center">
                    <Typography variant="h4">Leadership Team</Typography>
                    <Typography variant='body1' style={{padding:'20px 0px'}}>we are proud of our great team. 
                    He is one of the most motivated and enthusiastic people we have, and is always ready and willing to help out where needed.</Typography>
                </Box>
            </Container>
            <Box mt={4}>
                <Container>
                    <Grid container spacing={4}>
                        <Grid item lg={3} md={3} sm={6} xs={12}>
                            <Imagebox>
                                <Iconbox>
                                   <Link href=""><FaFacebookF/></Link>
                                   <Link href=""><FaTwitter/></Link>
                                   <Link href=""><FaLinkedinIn/></Link>
                                   <Link href=""><FaPinterestP/></Link>
                                </Iconbox>
                               <Box sx={{display:'flex',alignItems:'center',flexDirection:'column'}}>
                               <img src="/images/derek.png" alt="Derek Image"/>
                                <Button variant="text" sx={{color:'#fff',paddingTop:'10px'}} >Derek Castro</Button>
                                <Typography variant="body2">Head Of Marketing</Typography>
                               </Box>
                            </Imagebox>
                        </Grid>
                        <Grid item lg={3} md={3} sm={6} xs={12}>
                        <Imagebox>
                                <Iconbox>
                                   <Link href=""><FaFacebookF/></Link>
                                   <Link href=""><FaTwitter/></Link>
                                   <Link href=""><FaLinkedinIn/></Link>
                                   <Link href=""><FaPinterestP/></Link>
                                </Iconbox>
                                <Box  sx={{display:'flex',alignItems:'center',flexDirection:'column'}}>
                                <img src="/images/jessica.png" alt="Jessica Image"/>
                                <Button variant="text" sx={{color:'#fff',paddingTop:'10px'}} >Jessica Bell</Button>
                                <Typography variant="body2">Head Of Sale</Typography>

                                </Box>
                            </Imagebox>
                        </Grid>
                        <Grid item lg={3} md={3} sm={6} xs={12}>
                        <Imagebox>
                                <Iconbox>
                                   <Link href=""><FaFacebookF/></Link>
                                   <Link href=""><FaTwitter/></Link>
                                   <Link href=""><FaLinkedinIn/></Link>
                                   <Link href=""><FaPinterestP/></Link>
                                </Iconbox>
                                <Box sx={{display:'flex',alignItems:'center',flexDirection:'column'}}>
                                <img src="/images/alvaro.png" alt="Alvaro Image"/>
                                <Button variant="text" sx={{color:'#fff',paddingTop:'10px'}} >Alvaro Martin</Button>
                                <Typography variant="body2">Blockchain App Developer</Typography>

                                </Box>
                            </Imagebox>
                        </Grid>
                        <Grid item lg={3} md={3} sm={6} xs={12}>
                        <Imagebox>
                                <Iconbox>
                                   <Link href=""><FaFacebookF/></Link>
                                   <Link href=""><FaTwitter/></Link>
                                   <Link href=""><FaLinkedinIn/></Link>
                                   <Link href=""><FaPinterestP/></Link>
                                </Iconbox>
                                <Box sx={{display:'flex',alignItems:'center',flexDirection:'column'}}>
                                <img src="/images/maria.png" alt="Maria Image"/>
                                <Button variant="text" sx={{color:'#fff',paddingTop:'10px'}} >Maria Willium</Button>
                                <Typography variant="body2">Community Manager</Typography>

                                </Box>
                            </Imagebox>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

        </Wrapperbox>
        <Box>
            <Investorboard/>
        </Box>
        </>
    );
}
export default Leadershipteam;