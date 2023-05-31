import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Latestnews from "./Latestnews";
import { Container, styled } from "@mui/material";
import Generalaccodian from "../../Components/Generalaccodian";
import Preico from "./Preico";
import Icotokens from "./Icotokens";
import Legal from "./Legal";
import Carosol from "./Carosol";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Haveanyquestion() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const Tabbox = styled('div')({
    '& .css-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-selected':{
        color:'#ff69c9',
        borderBottom:'none !important',
    },
    "& .css-1h9z7r5-MuiButtonBase-root-MuiTab-root":{
        color:'#fff'
    },
    "& .css-heg063-MuiTabs-flexContainer":{
        justifyContent:'center',
    }
  })
  const Headingbox= styled('div')({
    textAlign:'center',
    padding:'0px 30px',
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
        
    },
    "& p":{
        padding:'30px 0px',
    }
  })

  return (
    <>
      <Box sx={{ width: "100%",background:'#121833',padding:'100px 0px' }}>
        <Container maxWidth="md">
        <Headingbox>
                <Typography variant="h4">Have Any Question?</Typography>
                <Typography variant="body1">Frequently asked questions (FAQ) or Questions and Answers (Q&A), 
                are listed questions and answers, all supposed to be commonly asked in some context</Typography>
            </Headingbox>
        </Container>
        <Container>
            <Tabbox  align="center">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            align="center"
          >
            <Tab label="General" {...a11yProps(0)} />
            <Tab label="Pre-ICO & ICC" {...a11yProps(1)} />
            <Tab label="ICO Tokens" {...a11yProps(2)} />
            <Tab label="Legal" {...a11yProps(3)} />
          </Tabs>
        </Tabbox>
        <TabPanel value={value} index={0}>
          <Generalaccodian/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Preico/>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Icotokens/>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Legal/>
        </TabPanel>
        </Container>
      </Box>
      <Box mt={2}>
        <Carosol />
      </Box>
    </>
  );
}
