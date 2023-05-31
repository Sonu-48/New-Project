import React from 'react';
import { Container,Grid,Box,Typography,Button,Link,styled} from '@mui/material';
import {FaFacebookF,FaTwitter,FaLinkedinIn,FaPinterestP} from 'react-icons/fa';
import Latestnews from './Latestnews';
import Haveanyquestion from './Haveanyquestion';


function Investorboard(){
    const Investorbox= styled('div')({
        textAlign:'center',
       "& h4":{
        position:'relative',
        padding:'20px',
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
        <Box>
            <Container maxWidth="md">
                    <Investorbox>
                        <Typography variant="h4">Investor Board</Typography>
                    </Investorbox>
                    <Box pt={5}>
                    <Grid container spacing={4}>
                        <Grid item lg={4} md={4} sm={6} xs={12}>
                        <Imagebox>
                                <Iconbox>
                                   <Link href=""><FaFacebookF/></Link>
                                   <Link href=""><FaTwitter/></Link>
                                   <Link href=""><FaLinkedinIn/></Link>
                                   <Link href=""><FaPinterestP/></Link>
                                </Iconbox>
                                <Box sx={{display:'flex',alignItems:'center',flexDirection:'column'}}>
                                <img src="/images/trica.png" alt="Trica Image"/>
                                <Button variant="text" sx={{color:'#fff',paddingTop:'10px'}} >Tricia Diyana</Button>
                                <Typography variant="body2">Invester</Typography>

                                </Box>
                            </Imagebox>
                        </Grid>
                        <Grid item lg={4} md={4} sm={6} xs={12}>
                        <Imagebox>
                                <Iconbox>
                                   <Link href=""><FaFacebookF/></Link>
                                   <Link href=""><FaTwitter/></Link>
                                   <Link href=""><FaLinkedinIn/></Link>
                                   <Link href=""><FaPinterestP/></Link>
                                </Iconbox>
                                <Box sx={{display:'flex',alignItems:'center',flexDirection:'column'}}>
                                <img src="/images/kent.png" alt="Kent Image"/>
                                <Button variant="text" sx={{color:'#fff',paddingTop:'10px'}} >Kent Pierce</Button>
                                <Typography variant="body2">Invester</Typography>

                                </Box>
                            </Imagebox>
                        </Grid>
                        <Grid item lg={4} md={4} sm={6} xs={12}>
                        <Imagebox>
                                <Iconbox>
                                   <Link href=""><FaFacebookF/></Link>
                                   <Link href=""><FaTwitter/></Link>
                                   <Link href=""><FaLinkedinIn/></Link>
                                   <Link href=""><FaPinterestP/></Link>
                                </Iconbox>
                                <Box sx={{display:'flex',alignItems:'center',flexDirection:'column'}}>
                                <img src="/images/rose.png" alt="Rose Image"/>
                                <Button variant="text" sx={{color:'#fff',paddingTop:'10px'}} >Rose Morgen</Button>
                                <Typography variant="body2">Invester</Typography>

                                </Box>
                            </Imagebox>
                        </Grid>
                    </Grid>
                    </Box>
            </Container>
            <Box mt={7}>
                <Haveanyquestion/>
            </Box>

        </Box>
    );
}
export default Investorboard;