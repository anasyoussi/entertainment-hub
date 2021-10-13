import * as React from 'react';
import { useEffect } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction'; 
import Tv from '@mui/icons-material/Tv';
import Search from '@mui/icons-material/Search';
import Movies from '@mui/icons-material/Movie';
import Whatshot from '@mui/icons-material/Whatshot';
import { makeStyles } from '@mui/styles'; 
import { useHistory } from 'react-router';

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
  const classes = useStyles() ;  
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  useEffect(() => {
     if(value === 0) history.push('/');
     else if(value === 1) history.push('/movies');
     else if(value === 2) history.push('/series');
     else if(value === 3) history.push('/search');
  }, [value, history])



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
          <BottomNavigationAction style={{color: 'white', fontSize: '100px'}} label="Trending" icon={<Whatshot  />} /> 
          <BottomNavigationAction style={{color: 'white', fontSize: '100px'}} label="Movies" icon={<Movies />} /> 
          <BottomNavigationAction style={{color: 'white', fontSize: '100px'}} label="Tv Series" icon={<Tv />} />
          <BottomNavigationAction style={{color: 'white', fontSize: '100px'}} label="Search" icon={<Search />} />
      </BottomNavigation>
    
  );
}





