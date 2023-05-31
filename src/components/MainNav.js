import * as React  from 'react';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";


import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import TvIcon from '@mui/icons-material/Tv';




export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (value === 0) {
      navigate("/");
    } else if (value === 1) {
      navigate("/movies");
    } else if (value === 2) {
      navigate("/series");
    } 
  }, [value, navigate]);

  
  
  return (
    <Box sx={{ width: "100%",backgroundColor: "#2d313a", position: "fixed" ,bottom: 0,zIndex: 100}}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Trending" icon={<WhatshotIcon />} />
        <BottomNavigationAction label="Movie" icon={<MovieCreationIcon />} />
        <BottomNavigationAction label="Series" icon={<TvIcon />} />
        

      </BottomNavigation>
    </Box>
  );
}
