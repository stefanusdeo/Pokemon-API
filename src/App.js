import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import HomePage from './Pages/HomePage';
import DetailPokemon from './Pages/DetailPokemon';
import StartPage from './Pages/StartPage';
import Bag from './Pages/Bag';

const App = () => {
  return (
    <Router>
      <Container>
        <Route exact path='/' component={StartPage} />
        <Route path='/cariPokemon' component={HomePage} />
        <Route path='/pokemon/:id' component={DetailPokemon} />
        <Route path='/tas' component={Bag} />
      </Container>
    </Router>
  );
};

export default App;
