import { Box } from '@mui/material';
import React from 'react';
import Topbar from './Topbar';
import Bitcoin from '../../pages/Home/Bitcoin';
import Footer from './Footer';


function Mainlayout({ children }){
    return(
        <div>
            <Box>
                <Topbar/>
            </Box>
            <Box>
                <Bitcoin/>
            </Box>
            <Box>
                <Footer/>
            </Box>
        </div>
    )
}
export default Mainlayout;