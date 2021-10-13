import './App.css'; 
import { BrowserRouter as Router, 
        Switch, 
        Route, 
        Link
       } from 'react-router-dom';
import Header from './Components/Header/Header';
import Container from '@mui/material/Container';
import SimpleBottomNavigation from './Components/MainNav/SimpleBottomNavigation';  
import Trending from './Pages/Trending/Trending';
import Movies from './Pages/Movies/Movies';
import Series from './Pages/Series/Series';
import Search from './Pages/Search/Search';

function App() {
  return (
    <Router>
      <Header />  
      <div className="App">
         <Container>
          <Switch>
            <Route path="/"       component={Trending} exact/>
            <Route path="/movies" component={Movies} />
            <Route path="/series" component={Series} />
            <Route path="/search" component={Search} />   
          </Switch> 
         </Container>
      </div> 
      <SimpleBottomNavigation />
    </Router>
  ); 
}

export default App;
 
// https://youtu.be/vxUfx4aM5d8?t=2214