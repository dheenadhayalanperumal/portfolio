import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import Style from './BaseLayout.module.scss';
import Navbar from "./Navbar";
import Home from "./home/Home";
import About from "./about/About";
import Terms from "./terms/Terms";
import Portfolio from "./portfolio/Portfolio";
import { Route, Routes } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import PrivacyPolicy from './terms/PrivacyPolicy';
import PrivacyPolicy from './terms/Termsandconditions';


export default function BaseLayout() {
  let [darkMode, setDarkMode] = useState(false);
  const location = useLocation(); // Get the current location

  function handleToggleDarkMode() {
    let oppositeOfCurrentDarkMode = !darkMode;
    console.log(oppositeOfCurrentDarkMode);
    localStorage.setItem('darkMode', `${oppositeOfCurrentDarkMode}`);
    setDarkMode(oppositeOfCurrentDarkMode);
  }

  useEffect(() => {
    let detectedDarkMode = eval(localStorage.getItem('darkMode'));

    if (detectedDarkMode) {
      setDarkMode(detectedDarkMode);
    } else {
      localStorage.setItem('darkMode', 'false');
    }
  }, []);

  // Check if the current route is '/PrivacyPolicy'
  const isPrivacyPolicyRoute = location.pathname === '/PrivacyPolicy' || location.pathname === '/Privacy' ;

  return (
    <Box className={darkMode ? Style.dark : Style.light}>
      <Grid container display={'flex'} flexDirection={'column'} minHeight={'100vh'}
        justifyContent={'space-between'}>
        
        {/* Conditionally render the Navbar only if not on the /PrivacyPolicy route */}
        {!isPrivacyPolicyRoute && (
          <Grid item>
            <Navbar darkMode={darkMode} handleClick={handleToggleDarkMode} />
          </Grid>
        )}
        
        <Grid item flexGrow={1}>
          <Routes>
            <Route exact path={'/'} element={<Home />} />
            <Route exact path={'/about'} element={<About />} />
            <Route exact path={'/portfolio'} element={<Portfolio />} />
            <Route exact path={'/PrivacyPolicy'} element={<Terms />} />
            <Route exact path={'/Privacy'} element={<PrivacyPolicy />} />
             <Route exact path={'/GamePrivacyPolicy'} element={<Termsandconditions />} />
          </Routes>
        </Grid>
        
        {/* Conditionally render the Footer only if not on the /PrivacyPolicy route */}
        {!isPrivacyPolicyRoute && (
          <Grid item>
            <Box component={'footer'} display={'flex'} flexDirection={'column'} alignItems={'center'}
              py={'1.5rem'} sx={{ opacity: 0.7 }} width={'100%'}>
              {/* <p>Site created with &hearts; by <a href={'https://dheena.live'}>Dheenadhayalan Perumal</a></p> */}
              {/* <p>&copy; 2024</p> */}
            </Box>
          </Grid>
        )}
        
      </Grid>
    </Box>
  );
}
