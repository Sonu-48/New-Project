// import React from 'react';
// import { Box, Icon, Link, styled } from '@mui/material';
// import {TbGridDots} from 'react-icons/tb';
// import {BsFillCartFill} from 'react-icons/bs';
// import {AiFillSetting} from 'react-icons/ai';

// function Sidebar(){
//     const Wrapperbox= styled('div')({
       
//         right:'-19px',
//         top:'50%',
//         bottom:'50%',
//         position:'fixed',
//         transform:'translate(-50%,-50%)',
//         "@media screen and (max-width:768px)":{
            
//         right:'0px',
//         top:'50%',
//         bottom:'50%',
//         position:'fixed',
//         }
    
//     })
//     const Iconbox= styled('div')({
//         padding:'8px 0px',
//         textAlign:'center',
//         background:'#F94551',
//         width:'40px',
//         color:'#fff',
//         fontSize:'20px',
       
//         "& a":{
//             color:'#fff',
//             textDecoration:'none',
//         }
//     })
//     return(
//         <Wrapperbox>
//             <Iconbox>
//                 <Link href="https://bestwebcreator.com/cryptocash/" target="_blank"> <TbGridDots/></Link>
               
//             </Iconbox>
//             <Iconbox sx={{background:'#73e080'}}>
//                 <Link href='https://themeforest.net/item/cryptocash-ico-cryptocurrency-landing-page-html-template/22101785?irgwc=1&clickid=3qdVoaQeDxyNUXdRATU%3A6UkiUkAWqewSCTTg3I0&iradid=275988&irpid=1289558&iradtype=ONLINE_TRACKING_LINK&irmptype=mediapartner&mp_value1=&utm_campaign=af_impact_radius_1289558&utm_medium=affiliate&utm_source=impact_radius' target="_blank"><BsFillCartFill/></Link>
                
//             </Iconbox>
//             <Iconbox sx={{background:'#018DF1'}}>
//                 <Link href="https://themeforest.net/item/cryptocash-ico-cryptocurrency-landing-page-html-template/22101785?irgwc=1&clickid=3qdVoaQeDxyNUXdRATU%3A6UkiUkAWqewSCTTg3I0&iradid=275988&irpid=1289558&iradtype=ONLINE_TRACKING_LINK&irmptype=mediapartner&mp_value1=&utm_campaign=af_impact_radius_1289558&utm_medium=affiliate&utm_source=impact_radius" target="_blank">PSD</Link>
//             </Iconbox>
//             <Iconbox sx={{background:'#212121'}}>
//                 <Link href="" ><AiFillSetting/></Link>
//             </Iconbox>

//         </Wrapperbox>
//     )
// }
// export default Sidebar;