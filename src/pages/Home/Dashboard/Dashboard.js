import React from 'react';
import { Container,Grid,Box,Typography,Button,styled } from '@mui/material';
import {BsArrowUpShort} from 'react-icons/bs';
import {BiTargetLock} from 'react-icons/bi';
import {HiCurrencyDollar} from 'react-icons/hi';
import {FaRegUser} from 'react-icons/fa';
import {AiOutlineArrowDown} from 'react-icons/ai';
import Currentuser from './Currentuser';
import Chart from './Chart';

const Headingbox= styled('div')({
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    flexWrap:'wrap',
    borderBottom:'1px solid #efefef',
    padding:'20px 0px',
    "& h1":{
        color:'rgba(17, 43, 74, 0.84)',
        fontFamily:'Open Sans',
        fontWeight:700,
        paddingBottom:'25px',
    }
})
const Mainbox= styled('div')({
    padding:'15px 20px',
    background:'#fff',
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    borderRadius:'0.25rem',
    boxShadow:"0 10px 25px 0 rgba(50, 50, 93, 0.07), 0 5px 15px 0 rgba(0, 0, 0, 0.07)",
 
   transition:'0.5s',
   "& h6":{
    color:'rgba(55, 77, 103, 0.54) ',
    fontWeight:'600',
    fontSize:'16px',
   },
   "& h5":{
    color:'#112B4A',
    fontSize:'30px',
    padding:'10px 0px'

   },
   "& p":{
    color:'#48BA16 ',
    fontWeight:'bold'
   },
  
   "&:hover":{
    transform:'translateY(-10px)'
   },
})
const Imagebox= styled('div')({
    "& svg":{
        color:'rgba(55, 77, 103, 0.2) !important',
        fontSize:'40px',
   },
})
const Wrapperbox=styled('div')({
padding:'20px 0px 50px 0px',
})

const data=[
    {
        heading:'Current Target',
        doller:'$12,920',
        subheading:'31.5%',
        icons:<BsArrowUpShort/>,
        image:<BiTargetLock/>
    },
    {
        heading:'Earnings',
        doller:'$3,642',
        subheading:'31.5%',
        icons:<BsArrowUpShort/>,
        image:<HiCurrencyDollar/>
    },
    {
        heading:'Website Traffic',
        doller:'8,391',
        subheading:'3.5%',
        icons:<AiOutlineArrowDown/>,
        image:<FaRegUser/>
    },
]
function Dashboard(){

    return(
        <>
        <Wrapperbox>
            <Container>
               <Headingbox>
               <Typography variant='h1'>Dashboard</Typography>
               <Button variant='contained' color="secondary">New Report</Button>
               </Headingbox>
               <Box mt={4}>
               <Grid container spacing={2}>
                {data.map((data)=>{
                    return(
                        <Grid item lg={4} md={4} sm={6} xs={12}>
                        <Mainbox>
                            <Box>
                            <Typography variant='h6'>{data.heading}</Typography>
                            <Typography variant='h5'>{data.doller}</Typography>
                            <Typography variant='body2' style={data.subheading==="3.5%"? {color:'#dc3545'}:{}}>{data.subheading}{data.icons}</Typography>
                            </Box>
                            <Imagebox>{data.image}</Imagebox>
                        </Mainbox>
                    </Grid>
                    )
                })}
                
                </Grid>
               </Box>
               
            </Container>

        </Wrapperbox>
        <Box>
            <Chart/>
        </Box>
        </>
    );
}
export default Dashboard;