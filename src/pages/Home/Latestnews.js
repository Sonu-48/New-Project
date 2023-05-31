import React from 'react';
import { Container,Grid,Box,Typography,Button,styled, Slide } from '@mui/material';
import { Link } from 'react-router-dom';
import {BiTime} from 'react-icons/bi';
import {GoCommentDiscussion} from 'react-icons/go';
import Ourclients from './Ourclients';
import Slider from './Carosol';
import Carosol from './Carosol';

function Latestnews(){
    const Wrapperbox= styled('div')({
        padding:'100px 0px',
    })
    const Headingbox= styled('div')({
        textAlign:'center',
        "& h4":{
            padding:'20px',
           
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
    const Blogbox= styled('div')({
        border:'1px solid #fff',
        borderRadius:'10px',
        boxShadow:"0 2px 4px rgba(0, 0, 0, 0.2)",
        overflow:'hidden',
       
           "& img":{
            transition:'all 0.5s ease ',
            "&:hover":{
                transform:'scale(1.1)',
               
                
                cursor:'pointer'
            },
           },

        
        "& a":{
            textDecoration:'none',
            color:'#fff',
            fontSize:'18px',
            "&:hover":{
                color:'#ff69c9'

            }
        },
       
       
    })
    const Commentbox= styled('div')({
        background:'#121833',
        borderRadius:'0 0  10px 10px',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        padding:'10px 15px',
        "& svg":{
            color:'#ffcb68',
            fontSize:'18px'
        },
        "& p":{
            marginLeft:'5px',
        }
    })
    return(
        <>
        <Wrapperbox>
            <Container>
                <Headingbox>
                    <Typography variant="h4">Latest News</Typography>
                </Headingbox>
                <Box pt={8}>
                    <Grid container spacing={4}>
                        <Grid item lg={4} md={4} sm={6} xs={12}>
                            <Blogbox>
                               <Box width="100%">
                               <img src="/images/blog_img1.jpg" alt="image"  width="100%"/>
                               </Box>
                               <Box sx={{ padding:'10px 15px',}}>
                                <Typography variant='h6'>
                                    <Link to="/">The Year Cryptocurrencies Seized the Mainstream Spotlightp</Link>
                                </Typography>
                                <Box pt={1} pb={1}>
                                <Typography variant='body2'>The crypto markets continued to build on April's gains this week, with alternative cryptocurrencies like nano, VeChain and bytecoin leading the way.</Typography>

                                </Box>
                                <Button  sx={{color:'#ffcb68',paddingLeft:'0px',fontWeight:600,textTransform:'none',fontSize:'17px'}}>Read More</Button>
                            </Box>
                            <Commentbox>
                                    <Box display="flex" alignItems="center">
                                        <BiTime/>
                                        <Typography variant='body1'>April 14,2018</Typography>
                                    </Box>
                                    <Box display="flex" alignItems="center">
                                        <GoCommentDiscussion/>
                                        <Typography variant="body1">2 Comment</Typography>
                                    </Box>
                            </Commentbox>
                            </Blogbox>
                           
                        </Grid>
                        <Grid item lg={4} md={4} sm={6} xs={12}>
                        <Blogbox>
                               <Box width="100%">
                               <img src="/images/blog2.jpg" alt="blog2"  width="100%"/>
                               </Box>
                               <Box sx={{ padding:'10px 15px',}}>
                                <Typography variant='h6'>
                                    <Link to="/">The Year Cryptocurrencies Seized the Mainstream Spotlightp</Link>
                                </Typography>
                                <Box pt={1} pb={1}>
                                <Typography variant='body2'>The crypto markets continued to build on April's gains this week, with alternative cryptocurrencies like nano, VeChain and bytecoin leading the way.</Typography>

                                </Box>
                                <Button  sx={{color:'#ffcb68',paddingLeft:'0px',fontWeight:600,textTransform:'none',fontSize:'17px'}}>Read More</Button>
                            </Box>
                            <Commentbox>
                                    <Box display="flex" alignItems="center">
                                        <BiTime/>
                                        <Typography variant='body1'>April 14,2018</Typography>
                                    </Box>
                                    <Box display="flex" alignItems="center">
                                        <GoCommentDiscussion/>
                                        <Typography variant="body1">2 Comment</Typography>
                                    </Box>
                            </Commentbox>
                            </Blogbox>
                        </Grid>
                        <Grid item lg={4} md={4} sm={6} xs={12}>
                        <Blogbox>
                               <Box width="100%">
                               <img src="/images/blog3.jpg" alt="image"  width="100%"/>
                               </Box>
                               <Box sx={{ padding:'10px 15px',}}>
                                <Typography variant='h6'>
                                    <Link to="/">The Year Cryptocurrencies Seized the Mainstream Spotlightp</Link>
                                </Typography>
                                <Box pt={1} pb={1}>
                                <Typography variant='body2'>The crypto markets continued to build on April's gains this week, with alternative cryptocurrencies like nano, VeChain and bytecoin leading the way.</Typography>

                                </Box>
                                <Button  sx={{color:'#ffcb68',paddingLeft:'0px',fontWeight:600,textTransform:'none',fontSize:'17px'}}>Read More</Button>
                            </Box>
                            <Commentbox>
                                    <Box display="flex" alignItems="center">
                                        <BiTime/>
                                        <Typography variant='body1'>April 14,2018</Typography>
                                    </Box>
                                    <Box display="flex" alignItems="center">
                                        <GoCommentDiscussion/>
                                        <Typography variant="body1">2 Comment</Typography>
                                    </Box>
                            </Commentbox>
                            </Blogbox>
                        </Grid>
                    </Grid>
                </Box>
            </Container>

        </Wrapperbox>
       
        
        </>
    );
}
export default Latestnews;