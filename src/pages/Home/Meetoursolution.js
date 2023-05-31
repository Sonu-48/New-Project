import React from 'react';
import { Container,Box,Typography,Grid, styled, Divider, } from '@mui/material';
import Cryptocash from './Cryptocash';

function Meetoursolution(){
    const Headingbox = styled('div')({
        textAlign:'center',
        paddingBottom:'40px',
        
        "& h4":{
            padding:'30px 0px',
            // borderBottom:'2px solid #fff',
            position:'relative',
            "&::after":{
                position:'absolute',
                content:"''",
                bottom:'0px',
                height:'2px',
                left:'0px',
                right:'0px',
                width:'80px',
                background:'#fff',
                margin:'0 auto'

            }
           
           
        },
        "& p":{
            paddingTop:'20px',
        }
    })
    const Gridbox= styled('div')({
        background:'#121833',
        padding:'20px 15px',
        textAlign:'center',
        marginTop:'30px',
        // boxShadow:"0 0 10px rgba(0, 0, 0, 0.1)",
        "& h6":{
            padding:'20px 0px'
        }
    })

    const service=[
        {
            icon:'images/storage.png',
            heading:'Secure Storage',
            subheading:'your wallet must be secured. Bitcoin makes it possible to transfer value any where in a very easy way and it allows you to be in control of your money.',
        },
        {
            icon:'images/mobile.png',
            heading:'Mobile App',
            subheading:'The #1 most popular cryptocurrency wallet for those looking to transform the financial system right from their pocket. Cash instantly with anyone in the world.',

        },
        {
            icon:"images/exchange.png",
            heading:'Exchange Service',
            subheading:"Each user has unique needs, so there is no one size fits all for exchanges. Our Bitcoin exchange reviews detail each exchange's supported countries",
        },
        {
            icon:'images/invesment.png',
            heading:'Investment projects',
            subheading:'Bitcoin investment opportunities exist outside of simply speculating on the Bitcoin exchange rate. sell bitcoins and profit from extreme changes',
        },
        {
            icon:'images/creaditcard.png',
            heading:'Credit Card Use',
            subheading:'We are accept any credit or debit card from VISA or MasterCard. This option may be especially useful for those seek ing for the ways',
        },
        {
            icon:"images/planning.png",
            heading:'Planning',
            subheading:"A cutting edge issue in traditional estate planning is Cryptocash. Cryptocash is a digital or virtual currency that uses cryptography for security",
        }
        
    ]

    return(
        <Box pt={6}>
            <Container maxWidth="md">
                <Headingbox align="center">
                
                   <Typography variant='h4'>Meet Our Solution For You</Typography>
                   {/* <Divider variant="middle" color="#fff"/> */}
                    <Typography variant='body2'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</Typography>
                </Headingbox>
            </Container>
            <Container >
                <Grid container spacing={3}>
                    {service.map((data)=>{
                        return(
                            <Grid item lg={4} md={4} sm={6} xs={12}>
                            <Gridbox>
                                <img src={data.icon} alt="service-icon"/>
                                <Typography variant="h6">{data.heading}</Typography>
                                <Typography variant='body2'>{data.subheading}</Typography>
    
                            </Gridbox>
                        </Grid>
                        )
                    })}
                    
                </Grid>
            </Container>
            <Box mt={3}>
                <Cryptocash/>
            </Box>

        </Box>
    )
};
export default Meetoursolution;