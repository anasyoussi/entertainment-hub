import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction'; 
import Tv from '@mui/icons-material/Tv';
import Search from '@mui/icons-material/Search';
import Movies from '@mui/icons-material/MovieSharp';
import Fireplace from '@mui/icons-material/Fireplace';
import { makeStyles } from '@mui/styles'; 

const useStyles = makeStyles({ 
  root:{
      width:'100%',
      position:'fixed',
      bottom: 0, 
      zIndex: 100
  },
  navs:{
    color: '#fff'
  }
}) 
export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const classes = useStyles() ;  
  return ( 
      <BottomNavigation
        className={classes.root}
        style={{background: "#2D313A"}}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
          <BottomNavigationAction style={{color: 'white', fontSize: '100px'}} label="Trending" icon={<Fireplace  />} /> 
          <BottomNavigationAction style={{color: 'white', fontSize: '100px'}} label="Movies" icon={<Movies />} /> 
          <BottomNavigationAction style={{color: 'white', fontSize: '100px'}} label="Tv Series" icon={<Tv />} />
          <BottomNavigationAction style={{color: 'white', fontSize: '100px'}} label="Search" icon={<Search />} />
      </BottomNavigation>
    
  );
}





