import React, { useEffect,useState } from 'react';
import Bannerpage from './pages/Home/Bannerpage';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import LearnMore from './pages/Home/LearnMore';
import Topbar from './layouts/HomeLayout/Topbar';
import Bitcoin from './pages/Home/Bitcoin';
import Sidebar from './Components/Sidebar';
import Signup from './Components/Signup';
import Mainlayout from './layouts/HomeLayout';
import Dashboarlayout from './layouts/DashboardLayout';
import About from './pages/Home/Dashboard/About';
import Services from './pages/Home/Services';
import Web3 from 'web3';
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Token from './pages/Home/Token';
import Buy_Token from './pages/Home/Buy_Token';
import Signin from './Components/Signin';

function App() {
  // Create a web3 instance
// const web3 = new Web3(window.ethereum);
//   useEffect(()=>{
//     if(window.ethereum){
      
//       window.ethereum.request({method:'eth_requestAccounts'})
//       toast.success("Metamask is now connected!");
     
      
//     }
//     else{
//       // alert("install metamask?")
//       toast.info("Please install metamask!")
//     }
//   },[])
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Mainlayout/>}/>
      <Route exact path="/signup" element={<Signup/>}/>
      <Route exact path="/login" element={<Signin/>}/> 
      <Route exact path="/token" element={<Token/>}/>
      <Route exact path="buy_token" element={<Buy_Token/>}/>
      <Route exact path="/service" element={<Services/>}/>
      <Route exact path="/learnmore" element={<LearnMore/>}></Route>
      <Route exact path='/dashboard' element={<Dashboarlayout/>}/>
      <Route exact path='/about' element={<About/>}/>
    </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
